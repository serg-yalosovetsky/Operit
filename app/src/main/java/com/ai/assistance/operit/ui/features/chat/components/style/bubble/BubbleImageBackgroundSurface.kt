package com.ai.assistance.operit.ui.features.chat.components.style.bubble

import android.graphics.BitmapFactory
import android.net.Uri
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.graphics.Shape
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt

/**
 * Bubble image rendering config.
 * Ratios are all normalized to [0f, 1f].
 */
data class BubbleImageStyleConfig(
    val imageUri: String,
    val cropLeftRatio: Float = 0f,
    val cropTopRatio: Float = 0f,
    val cropRightRatio: Float = 0f,
    val cropBottomRatio: Float = 0f,
    val repeatStartRatio: Float = 0.35f,
    val repeatEndRatio: Float = 0.65f,
)

@Composable
fun BubbleImageBackgroundSurface(
    imageStyle: BubbleImageStyleConfig,
    shape: Shape,
    modifier: Modifier = Modifier,
    contentPadding: PaddingValues = PaddingValues(12.dp),
    content: @Composable BoxScope.() -> Unit,
) {
    val imageBitmap = rememberBubbleImageBitmap(imageStyle.imageUri)

    Box(
        modifier =
            modifier
                .clip(shape)
                .drawWithContent {
                    imageBitmap?.let { bitmap ->
                        drawRepeatedCenterBubble(bitmap, imageStyle)
                    }
                    drawContent()
                }
                .padding(contentPadding),
        content = content,
    )
}

@Composable
private fun rememberBubbleImageBitmap(uriString: String): ImageBitmap? {
    val context = LocalContext.current
    var bitmap by remember(uriString) { mutableStateOf<ImageBitmap?>(null) }

    LaunchedEffect(context, uriString) {
        bitmap =
            withContext(Dispatchers.IO) {
                runCatching {
                    context.contentResolver.openInputStream(Uri.parse(uriString))?.use { input ->
                        BitmapFactory.decodeStream(input)?.asImageBitmap()
                    }
                }.getOrNull()
            }
    }

    return bitmap
}

private data class BubbleSliceLayout(
    val srcX: Int,
    val srcY: Int,
    val srcWidth: Int,
    val srcHeight: Int,
    val leftCapWidth: Int,
    val centerWidth: Int,
    val rightCapWidth: Int,
)

private fun buildSliceLayout(bitmap: ImageBitmap, config: BubbleImageStyleConfig): BubbleSliceLayout {
    val width = bitmap.width.coerceAtLeast(1)
    val height = bitmap.height.coerceAtLeast(1)

    val cropLeft = config.cropLeftRatio.coerceIn(0f, 0.45f)
    val cropTop = config.cropTopRatio.coerceIn(0f, 0.45f)
    val cropRight = config.cropRightRatio.coerceIn(0f, 0.45f)
    val cropBottom = config.cropBottomRatio.coerceIn(0f, 0.45f)

    val srcLeft = (width * cropLeft).roundToInt().coerceIn(0, width - 1)
    val srcTop = (height * cropTop).roundToInt().coerceIn(0, height - 1)
    val srcRight = (width * (1f - cropRight)).roundToInt().coerceIn(srcLeft + 1, width)
    val srcBottom = (height * (1f - cropBottom)).roundToInt().coerceIn(srcTop + 1, height)

    val croppedWidth = (srcRight - srcLeft).coerceAtLeast(1)
    val croppedHeight = (srcBottom - srcTop).coerceAtLeast(1)

    if (croppedWidth < 3) {
        return BubbleSliceLayout(
            srcX = srcLeft,
            srcY = srcTop,
            srcWidth = croppedWidth,
            srcHeight = croppedHeight,
            leftCapWidth = 0,
            centerWidth = croppedWidth,
            rightCapWidth = 0,
        )
    }

    val repeatStart = config.repeatStartRatio.coerceIn(0.05f, 0.9f)
    val repeatEnd = config.repeatEndRatio.coerceIn(repeatStart + 0.01f, 0.95f)

    val repeatStartPx = (croppedWidth * repeatStart).roundToInt().coerceIn(1, croppedWidth - 2)
    val repeatEndPx = (croppedWidth * repeatEnd).roundToInt().coerceIn(repeatStartPx + 1, croppedWidth - 1)

    return BubbleSliceLayout(
        srcX = srcLeft,
        srcY = srcTop,
        srcWidth = croppedWidth,
        srcHeight = croppedHeight,
        leftCapWidth = repeatStartPx,
        centerWidth = max(1, repeatEndPx - repeatStartPx),
        rightCapWidth = max(0, croppedWidth - repeatEndPx),
    )
}

private fun DrawScope.drawRepeatedCenterBubble(bitmap: ImageBitmap, config: BubbleImageStyleConfig) {
    val layout = buildSliceLayout(bitmap, config)
    val dstWidth = size.width.roundToInt().coerceAtLeast(1)
    val dstHeight = size.height.roundToInt().coerceAtLeast(1)

    if (layout.centerWidth <= 0 || layout.srcWidth <= 0 || layout.srcHeight <= 0) {
        drawImage(
            image = bitmap,
            srcOffset = IntOffset(layout.srcX, layout.srcY),
            srcSize = IntSize(layout.srcWidth, layout.srcHeight),
            dstOffset = IntOffset.Zero,
            dstSize = IntSize(dstWidth, dstHeight),
        )
        return
    }

    val verticalScale = dstHeight.toFloat() / layout.srcHeight.toFloat()

    var leftDstWidth = (layout.leftCapWidth * verticalScale).roundToInt().coerceAtLeast(0)
    var rightDstWidth = (layout.rightCapWidth * verticalScale).roundToInt().coerceAtLeast(0)

    if (leftDstWidth + rightDstWidth >= dstWidth) {
        val target = max(0, dstWidth - 1)
        val total = max(1, leftDstWidth + rightDstWidth)
        val ratio = target.toFloat() / total.toFloat()
        leftDstWidth = (leftDstWidth * ratio).roundToInt().coerceAtLeast(0)
        rightDstWidth = (rightDstWidth * ratio).roundToInt().coerceAtLeast(0)
    }

    val centerDstStart = leftDstWidth
    val centerDstEnd = (dstWidth - rightDstWidth).coerceAtLeast(centerDstStart)

    if (leftDstWidth > 0 && layout.leftCapWidth > 0) {
        drawImage(
            image = bitmap,
            srcOffset = IntOffset(layout.srcX, layout.srcY),
            srcSize = IntSize(layout.leftCapWidth, layout.srcHeight),
            dstOffset = IntOffset(0, 0),
            dstSize = IntSize(leftDstWidth, dstHeight),
        )
    }

    if (rightDstWidth > 0 && layout.rightCapWidth > 0) {
        drawImage(
            image = bitmap,
            srcOffset = IntOffset(layout.srcX + layout.srcWidth - layout.rightCapWidth, layout.srcY),
            srcSize = IntSize(layout.rightCapWidth, layout.srcHeight),
            dstOffset = IntOffset(dstWidth - rightDstWidth, 0),
            dstSize = IntSize(rightDstWidth, dstHeight),
        )
    }

    if (centerDstEnd > centerDstStart) {
        val baseTileDstWidth = max(1, (layout.centerWidth * verticalScale).roundToInt())
        var currentX = centerDstStart

        while (currentX < centerDstEnd) {
            val remaining = centerDstEnd - currentX
            val tileDstWidth = min(baseTileDstWidth, remaining)
            val tileSrcWidth =
                if (tileDstWidth == baseTileDstWidth) {
                    layout.centerWidth
                } else {
                    max(1, (layout.centerWidth * (tileDstWidth.toFloat() / baseTileDstWidth.toFloat())).roundToInt())
                }

            drawImage(
                image = bitmap,
                srcOffset = IntOffset(layout.srcX + layout.leftCapWidth, layout.srcY),
                srcSize = IntSize(tileSrcWidth, layout.srcHeight),
                dstOffset = IntOffset(currentX, 0),
                dstSize = IntSize(tileDstWidth, dstHeight),
            )

            currentX += tileDstWidth
        }
    }
}
