package com.ai.assistance.operit.ui.features.settings.sections

import android.net.Uri
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Brightness4
import androidx.compose.material.icons.filled.ColorLens
import androidx.compose.material.icons.filled.Link
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Card
import androidx.compose.material3.CardColors
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Slider
import androidx.compose.material3.Surface
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import coil.compose.rememberAsyncImagePainter
import com.ai.assistance.operit.R
import com.ai.assistance.operit.data.preferences.UserPreferencesManager
import com.ai.assistance.operit.ui.features.settings.components.ChatStyleOption
import com.ai.assistance.operit.ui.features.settings.components.ColorSelectionItem
import com.ai.assistance.operit.ui.features.settings.components.ThemeModeOption
import com.ai.assistance.operit.ui.features.chat.components.ChatStyle
import com.ai.assistance.operit.ui.features.chat.components.style.bubble.BubbleImageBackgroundSurface
import com.ai.assistance.operit.ui.features.chat.components.style.bubble.BubbleImageStyleConfig
import kotlin.math.abs

internal typealias SaveThemeSettingsAction = (suspend () -> Unit) -> Unit

@Composable
internal fun ThemeSettingsCharacterBindingInfoCard(
    aiAvatarUri: String?,
    activeCharacterName: String?,
    isGroupTarget: Boolean,
    cardColors: CardColors,
) {
    Card(
        modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp),
        colors = cardColors,
        shape = RoundedCornerShape(8.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Box(
                modifier =
                    Modifier
                        .size(40.dp)
                        .clip(CircleShape)
                        .background(MaterialTheme.colorScheme.surfaceVariant),
                contentAlignment = Alignment.Center,
            ) {
                if (aiAvatarUri != null) {
                    Image(
                        painter = rememberAsyncImagePainter(Uri.parse(aiAvatarUri)),
                        contentDescription = stringResource(R.string.character_avatar),
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Crop,
                    )
                } else {
                    Icon(
                        Icons.Default.Person,
                        contentDescription =
                            stringResource(R.string.character_card_default_avatar),
                        tint = MaterialTheme.colorScheme.onSurfaceVariant,
                        modifier = Modifier.size(24.dp),
                    )
                }
            }

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text =
                        if (isGroupTarget) {
                            stringResource(R.string.current_character_group, activeCharacterName ?: "")
                        } else {
                            stringResource(R.string.current_character, activeCharacterName ?: "")
                        },
                    style = MaterialTheme.typography.bodyMedium,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.primary,
                )
                Text(
                    text =
                        if (isGroupTarget) {
                            stringResource(R.string.theme_auto_bind_character_group)
                        } else {
                            stringResource(R.string.theme_auto_bind_character_card)
                        },
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
            }

            Icon(
                Icons.Default.Link,
                contentDescription = stringResource(R.string.bind),
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(20.dp),
            )
        }
    }
}

@Composable
internal fun ThemeSettingsThemeModeSection(
    cardColors: CardColors,
    useSystemThemeInput: Boolean,
    onUseSystemThemeInputChange: (Boolean) -> Unit,
    themeModeInput: String,
    onThemeModeInputChange: (String) -> Unit,
    saveThemeSettingsWithCharacterCard: SaveThemeSettingsAction,
    preferencesManager: UserPreferencesManager,
) {
    ThemeSettingsSectionTitle(
        title = stringResource(id = R.string.theme_title_mode),
        icon = Icons.Default.Brightness4,
    )

    Card(modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp), colors = cardColors) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = stringResource(id = R.string.theme_system_title),
                style = MaterialTheme.typography.titleMedium,
                modifier = Modifier.padding(bottom = 8.dp),
            )

            Row(
                modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(id = R.string.theme_follow_system),
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text = stringResource(id = R.string.theme_follow_system_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }

                Switch(
                    checked = useSystemThemeInput,
                    onCheckedChange = {
                        onUseSystemThemeInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(useSystemTheme = it)
                        }
                    },
                )
            }

            if (!useSystemThemeInput) {
                HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                Text(
                    text = stringResource(id = R.string.theme_select),
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.padding(bottom = 8.dp),
                )

                Row(
                    modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    ThemeModeOption(
                        title = stringResource(id = R.string.theme_light),
                        selected = themeModeInput == UserPreferencesManager.THEME_MODE_LIGHT,
                        modifier = Modifier.weight(1f),
                        onClick = {
                            onThemeModeInputChange(UserPreferencesManager.THEME_MODE_LIGHT)
                            saveThemeSettingsWithCharacterCard {
                                preferencesManager.saveThemeSettings(
                                    themeMode = UserPreferencesManager.THEME_MODE_LIGHT,
                                )
                            }
                        },
                    )

                    ThemeModeOption(
                        title = stringResource(id = R.string.theme_dark),
                        selected = themeModeInput == UserPreferencesManager.THEME_MODE_DARK,
                        modifier = Modifier.weight(1f),
                        onClick = {
                            onThemeModeInputChange(UserPreferencesManager.THEME_MODE_DARK)
                            saveThemeSettingsWithCharacterCard {
                                preferencesManager.saveThemeSettings(
                                    themeMode = UserPreferencesManager.THEME_MODE_DARK,
                                )
                            }
                        },
                    )
                }
            }
        }
    }
}

@Composable
internal fun ThemeSettingsChatStyleSection(
    cardColors: CardColors,
    chatStyleInput: String,
    onChatStyleInputChange: (String) -> Unit,
    inputStyleInput: String,
    onInputStyleInputChange: (String) -> Unit,
    bubbleShowAvatarInput: Boolean,
    onBubbleShowAvatarInputChange: (Boolean) -> Unit,
    cursorUserBubbleFollowThemeInput: Boolean,
    onCursorUserBubbleFollowThemeInputChange: (Boolean) -> Unit,
    cursorUserBubbleColorInput: Int,
    bubbleUserBubbleColorInput: Int,
    bubbleAiBubbleColorInput: Int,
    onShowColorPicker: (String) -> Unit,
    bubbleUserUseImageInput: Boolean,
    onBubbleUserUseImageInputChange: (Boolean) -> Unit,
    bubbleAiUseImageInput: Boolean,
    onBubbleAiUseImageInputChange: (Boolean) -> Unit,
    bubbleUserImageUriInput: String?,
    bubbleAiImageUriInput: String?,
    onPickBubbleUserImage: () -> Unit,
    onPickBubbleAiImage: () -> Unit,
    onClearBubbleUserImage: () -> Unit,
    onClearBubbleAiImage: () -> Unit,
    bubbleUserImageCropLeftInput: Float,
    onBubbleUserImageCropLeftInputChange: (Float) -> Unit,
    bubbleUserImageCropTopInput: Float,
    onBubbleUserImageCropTopInputChange: (Float) -> Unit,
    bubbleUserImageCropRightInput: Float,
    onBubbleUserImageCropRightInputChange: (Float) -> Unit,
    bubbleUserImageCropBottomInput: Float,
    onBubbleUserImageCropBottomInputChange: (Float) -> Unit,
    bubbleUserImageRepeatStartInput: Float,
    onBubbleUserImageRepeatStartInputChange: (Float) -> Unit,
    bubbleUserImageRepeatEndInput: Float,
    onBubbleUserImageRepeatEndInputChange: (Float) -> Unit,
    bubbleAiImageCropLeftInput: Float,
    onBubbleAiImageCropLeftInputChange: (Float) -> Unit,
    bubbleAiImageCropTopInput: Float,
    onBubbleAiImageCropTopInputChange: (Float) -> Unit,
    bubbleAiImageCropRightInput: Float,
    onBubbleAiImageCropRightInputChange: (Float) -> Unit,
    bubbleAiImageCropBottomInput: Float,
    onBubbleAiImageCropBottomInputChange: (Float) -> Unit,
    bubbleAiImageRepeatStartInput: Float,
    onBubbleAiImageRepeatStartInputChange: (Float) -> Unit,
    bubbleAiImageRepeatEndInput: Float,
    onBubbleAiImageRepeatEndInputChange: (Float) -> Unit,
    saveThemeSettingsWithCharacterCard: SaveThemeSettingsAction,
    preferencesManager: UserPreferencesManager,
) {
    ThemeSettingsSectionTitle(
        title = stringResource(id = R.string.chat_style_title),
        icon = Icons.Default.ColorLens,
    )

    Card(modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp), colors = cardColors) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = stringResource(id = R.string.chat_style_desc),
                style = MaterialTheme.typography.titleMedium,
                modifier = Modifier.padding(bottom = 8.dp),
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                ChatStyleOption(
                    title = stringResource(id = R.string.chat_style_cursor),
                    selected = chatStyleInput == UserPreferencesManager.CHAT_STYLE_CURSOR,
                    modifier = Modifier.weight(1f),
                ) {
                    onChatStyleInputChange(UserPreferencesManager.CHAT_STYLE_CURSOR)
                    saveThemeSettingsWithCharacterCard {
                        preferencesManager.saveThemeSettings(
                            chatStyle = UserPreferencesManager.CHAT_STYLE_CURSOR,
                        )
                    }
                }

                ChatStyleOption(
                    title = stringResource(id = R.string.chat_style_bubble),
                    selected = chatStyleInput == UserPreferencesManager.CHAT_STYLE_BUBBLE,
                    modifier = Modifier.weight(1f),
                ) {
                    onChatStyleInputChange(UserPreferencesManager.CHAT_STYLE_BUBBLE)
                    saveThemeSettingsWithCharacterCard {
                        preferencesManager.saveThemeSettings(
                            chatStyle = UserPreferencesManager.CHAT_STYLE_BUBBLE,
                        )
                    }
                }
            }

            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

            Text(
                text = stringResource(id = R.string.input_style_title),
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(bottom = 4.dp),
            )
            Text(
                text = stringResource(id = R.string.input_style_desc),
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.padding(bottom = 8.dp),
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                ChatStyleOption(
                    title = stringResource(id = R.string.input_style_classic),
                    selected =
                        inputStyleInput == UserPreferencesManager.INPUT_STYLE_CLASSIC,
                    modifier = Modifier.weight(1f),
                ) {
                    onInputStyleInputChange(UserPreferencesManager.INPUT_STYLE_CLASSIC)
                    saveThemeSettingsWithCharacterCard {
                        preferencesManager.saveThemeSettings(
                            inputStyle = UserPreferencesManager.INPUT_STYLE_CLASSIC,
                        )
                    }
                }

                ChatStyleOption(
                    title = stringResource(id = R.string.input_style_agent),
                    selected = inputStyleInput == UserPreferencesManager.INPUT_STYLE_AGENT,
                    modifier = Modifier.weight(1f),
                ) {
                    onInputStyleInputChange(UserPreferencesManager.INPUT_STYLE_AGENT)
                    saveThemeSettingsWithCharacterCard {
                        preferencesManager.saveThemeSettings(
                            inputStyle = UserPreferencesManager.INPUT_STYLE_AGENT,
                        )
                    }
                }
            }

            if (inputStyleInput == UserPreferencesManager.INPUT_STYLE_AGENT) {
                Text(
                    text = stringResource(id = R.string.input_style_agent_reserved),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.padding(top = 8.dp),
                )
            }

            if (chatStyleInput == UserPreferencesManager.CHAT_STYLE_CURSOR) {
                HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = stringResource(id = R.string.chat_style_cursor_user_follow_theme),
                            style = MaterialTheme.typography.bodyMedium,
                        )
                        Text(
                            text =
                                stringResource(id = R.string.chat_style_cursor_user_follow_theme_desc),
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                    Switch(
                        checked = cursorUserBubbleFollowThemeInput,
                        onCheckedChange = {
                            onCursorUserBubbleFollowThemeInputChange(it)
                            saveThemeSettingsWithCharacterCard {
                                preferencesManager.saveThemeSettings(
                                    cursorUserBubbleFollowTheme = it,
                                )
                            }
                        },
                    )
                }

                if (!cursorUserBubbleFollowThemeInput) {
                    Row(
                        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                        horizontalArrangement = Arrangement.spacedBy(12.dp),
                    ) {
                        ColorSelectionItem(
                            title = stringResource(id = R.string.chat_style_cursor_user_bubble_color),
                            color = Color(cursorUserBubbleColorInput),
                            modifier = Modifier.weight(1f),
                            onClick = { onShowColorPicker("cursorUserBubble") },
                        )
                    }
                }
            }

            if (chatStyleInput == UserPreferencesManager.CHAT_STYLE_BUBBLE) {
                HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = stringResource(id = R.string.chat_style_bubble_show_avatar),
                            style = MaterialTheme.typography.bodyMedium,
                        )
                        Text(
                            text =
                                stringResource(id = R.string.chat_style_bubble_show_avatar_desc),
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                    Switch(
                        checked = bubbleShowAvatarInput,
                        onCheckedChange = {
                            onBubbleShowAvatarInputChange(it)
                            saveThemeSettingsWithCharacterCard {
                                preferencesManager.saveThemeSettings(bubbleShowAvatar = it)
                            }
                        },
                    )
                }

                HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                Text(
                    text = stringResource(id = R.string.chat_style_bubble_color_title),
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.padding(bottom = 8.dp),
                )

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    ColorSelectionItem(
                        title = stringResource(id = R.string.chat_style_bubble_user_color),
                        color = Color(bubbleUserBubbleColorInput),
                        modifier = Modifier.weight(1f),
                        onClick = { onShowColorPicker("bubbleUserBubble") },
                    )
                    ColorSelectionItem(
                        title = stringResource(id = R.string.chat_style_bubble_ai_color),
                        color = Color(bubbleAiBubbleColorInput),
                        modifier = Modifier.weight(1f),
                        onClick = { onShowColorPicker("bubbleAiBubble") },
                    )
                }

                HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                BubbleImageStyleEditor(
                    title = stringResource(id = R.string.chat_style_bubble_user_image_title),
                    enabled = bubbleUserUseImageInput,
                    onEnabledChange = {
                        onBubbleUserUseImageInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserUseImage = it)
                        }
                    },
                    imageUri = bubbleUserImageUriInput,
                    onPickImage = onPickBubbleUserImage,
                    onClearImage = onClearBubbleUserImage,
                    cropLeft = bubbleUserImageCropLeftInput,
                    onCropLeftChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleUserImageCropLeftInputChange(value)
                    },
                    onCropLeftChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageCropLeft = value)
                        }
                    },
                    cropTop = bubbleUserImageCropTopInput,
                    onCropTopChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleUserImageCropTopInputChange(value)
                    },
                    onCropTopChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageCropTop = value)
                        }
                    },
                    cropRight = bubbleUserImageCropRightInput,
                    onCropRightChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleUserImageCropRightInputChange(value)
                    },
                    onCropRightChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageCropRight = value)
                        }
                    },
                    cropBottom = bubbleUserImageCropBottomInput,
                    onCropBottomChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleUserImageCropBottomInputChange(value)
                    },
                    onCropBottomChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageCropBottom = value)
                        }
                    },
                    repeatStart = bubbleUserImageRepeatStartInput,
                    onRepeatStartChange = {
                        val value = it.coerceIn(0.05f, 0.9f)
                        onBubbleUserImageRepeatStartInputChange(value)
                    },
                    onRepeatStartChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageRepeatStart = value)
                        }
                    },
                    repeatEnd = bubbleUserImageRepeatEndInput,
                    onRepeatEndChange = {
                        val minValue = (bubbleUserImageRepeatStartInput + 0.01f).coerceAtMost(0.95f)
                        val value = it.coerceIn(minValue, 0.95f)
                        onBubbleUserImageRepeatEndInputChange(value)
                    },
                    onRepeatEndChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleUserImageRepeatEnd = value)
                        }
                    },
                )

                BubbleImageStyleEditor(
                    title = stringResource(id = R.string.chat_style_bubble_ai_image_title),
                    enabled = bubbleAiUseImageInput,
                    onEnabledChange = {
                        onBubbleAiUseImageInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiUseImage = it)
                        }
                    },
                    imageUri = bubbleAiImageUriInput,
                    onPickImage = onPickBubbleAiImage,
                    onClearImage = onClearBubbleAiImage,
                    cropLeft = bubbleAiImageCropLeftInput,
                    onCropLeftChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleAiImageCropLeftInputChange(value)
                    },
                    onCropLeftChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageCropLeft = value)
                        }
                    },
                    cropTop = bubbleAiImageCropTopInput,
                    onCropTopChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleAiImageCropTopInputChange(value)
                    },
                    onCropTopChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageCropTop = value)
                        }
                    },
                    cropRight = bubbleAiImageCropRightInput,
                    onCropRightChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleAiImageCropRightInputChange(value)
                    },
                    onCropRightChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageCropRight = value)
                        }
                    },
                    cropBottom = bubbleAiImageCropBottomInput,
                    onCropBottomChange = {
                        val value = it.coerceIn(0f, 0.45f)
                        onBubbleAiImageCropBottomInputChange(value)
                    },
                    onCropBottomChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageCropBottom = value)
                        }
                    },
                    repeatStart = bubbleAiImageRepeatStartInput,
                    onRepeatStartChange = {
                        val value = it.coerceIn(0.05f, 0.9f)
                        onBubbleAiImageRepeatStartInputChange(value)
                    },
                    onRepeatStartChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageRepeatStart = value)
                        }
                    },
                    repeatEnd = bubbleAiImageRepeatEndInput,
                    onRepeatEndChange = {
                        val minValue = (bubbleAiImageRepeatStartInput + 0.01f).coerceAtMost(0.95f)
                        val value = it.coerceIn(minValue, 0.95f)
                        onBubbleAiImageRepeatEndInputChange(value)
                    },
                    onRepeatEndChangeFinished = { value ->
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(bubbleAiImageRepeatEnd = value)
                        }
                    },
                )
            }

            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

            val previewChatStyle =
                if (chatStyleInput == UserPreferencesManager.CHAT_STYLE_BUBBLE) {
                    ChatStyle.BUBBLE
                } else {
                    ChatStyle.CURSOR
                }
            val previewUserImageStyle =
                remember(
                    bubbleUserUseImageInput,
                    bubbleUserImageUriInput,
                    bubbleUserImageCropLeftInput,
                    bubbleUserImageCropTopInput,
                    bubbleUserImageCropRightInput,
                    bubbleUserImageCropBottomInput,
                    bubbleUserImageRepeatStartInput,
                    bubbleUserImageRepeatEndInput,
                ) {
                    val imageUri = bubbleUserImageUriInput
                    if (bubbleUserUseImageInput && !imageUri.isNullOrBlank()) {
                        BubbleImageStyleConfig(
                            imageUri = imageUri,
                            cropLeftRatio = bubbleUserImageCropLeftInput,
                            cropTopRatio = bubbleUserImageCropTopInput,
                            cropRightRatio = bubbleUserImageCropRightInput,
                            cropBottomRatio = bubbleUserImageCropBottomInput,
                            repeatStartRatio = bubbleUserImageRepeatStartInput,
                            repeatEndRatio = bubbleUserImageRepeatEndInput,
                        )
                    } else {
                        null
                    }
                }
            val previewAiImageStyle =
                remember(
                    bubbleAiUseImageInput,
                    bubbleAiImageUriInput,
                    bubbleAiImageCropLeftInput,
                    bubbleAiImageCropTopInput,
                    bubbleAiImageCropRightInput,
                    bubbleAiImageCropBottomInput,
                    bubbleAiImageRepeatStartInput,
                    bubbleAiImageRepeatEndInput,
                ) {
                    val imageUri = bubbleAiImageUriInput
                    if (bubbleAiUseImageInput && !imageUri.isNullOrBlank()) {
                        BubbleImageStyleConfig(
                            imageUri = imageUri,
                            cropLeftRatio = bubbleAiImageCropLeftInput,
                            cropTopRatio = bubbleAiImageCropTopInput,
                            cropRightRatio = bubbleAiImageCropRightInput,
                            cropBottomRatio = bubbleAiImageCropBottomInput,
                            repeatStartRatio = bubbleAiImageRepeatStartInput,
                            repeatEndRatio = bubbleAiImageRepeatEndInput,
                        )
                    } else {
                        null
                    }
                }

            ChatStylePreviewCard(
                chatStyle = previewChatStyle,
                userColor =
                    if (previewChatStyle == ChatStyle.CURSOR && cursorUserBubbleFollowThemeInput) {
                        MaterialTheme.colorScheme.primaryContainer
                    } else if (previewChatStyle == ChatStyle.CURSOR) {
                        Color(cursorUserBubbleColorInput)
                    } else {
                        Color(bubbleUserBubbleColorInput)
                    },
                aiColor =
                    if (previewChatStyle == ChatStyle.BUBBLE) {
                        Color(bubbleAiBubbleColorInput)
                    } else {
                        MaterialTheme.colorScheme.surface
                    },
                userImageStyle = if (previewChatStyle == ChatStyle.BUBBLE) previewUserImageStyle else null,
                aiImageStyle = if (previewChatStyle == ChatStyle.BUBBLE) previewAiImageStyle else null,
            )
        }
    }
}

@Composable
private fun BubbleImageStyleEditor(
    title: String,
    enabled: Boolean,
    onEnabledChange: (Boolean) -> Unit,
    imageUri: String?,
    onPickImage: () -> Unit,
    onClearImage: () -> Unit,
    cropLeft: Float,
    onCropLeftChange: (Float) -> Unit,
    onCropLeftChangeFinished: (Float) -> Unit,
    cropTop: Float,
    onCropTopChange: (Float) -> Unit,
    onCropTopChangeFinished: (Float) -> Unit,
    cropRight: Float,
    onCropRightChange: (Float) -> Unit,
    onCropRightChangeFinished: (Float) -> Unit,
    cropBottom: Float,
    onCropBottomChange: (Float) -> Unit,
    onCropBottomChangeFinished: (Float) -> Unit,
    repeatStart: Float,
    onRepeatStartChange: (Float) -> Unit,
    onRepeatStartChangeFinished: (Float) -> Unit,
    repeatEnd: Float,
    onRepeatEndChange: (Float) -> Unit,
    onRepeatEndChangeFinished: (Float) -> Unit,
) {
    Card(
        modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
        colors =
            CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.35f),
            ),
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = title,
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text = stringResource(id = R.string.chat_style_bubble_image_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Switch(checked = enabled, onCheckedChange = onEnabledChange)
            }

            if (enabled) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    OutlinedButton(
                        onClick = onPickImage,
                        modifier = Modifier.weight(1f),
                    ) {
                        Text(stringResource(id = R.string.chat_style_bubble_pick_image))
                    }
                    OutlinedButton(
                        onClick = onClearImage,
                        modifier = Modifier.weight(1f),
                    ) {
                        Text(stringResource(id = R.string.chat_style_bubble_clear_image))
                    }
                }

                Text(
                    text =
                        if (imageUri.isNullOrBlank()) {
                            stringResource(id = R.string.chat_style_bubble_no_image_selected)
                        } else {
                            stringResource(id = R.string.chat_style_bubble_image_selected)
                        },
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.padding(top = 8.dp),
                )

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    BubbleStyleSliderRow(
                        label = stringResource(id = R.string.chat_style_bubble_crop_left),
                        value = cropLeft,
                        range = 0f..0.45f,
                        onValueChange = onCropLeftChange,
                        onValueChangeFinished = onCropLeftChangeFinished,
                        modifier = Modifier.weight(1f),
                    )
                    BubbleStyleSliderRow(
                        label = stringResource(id = R.string.chat_style_bubble_crop_top),
                        value = cropTop,
                        range = 0f..0.45f,
                        onValueChange = onCropTopChange,
                        onValueChangeFinished = onCropTopChangeFinished,
                        modifier = Modifier.weight(1f),
                    )
                }
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    BubbleStyleSliderRow(
                        label = stringResource(id = R.string.chat_style_bubble_crop_right),
                        value = cropRight,
                        range = 0f..0.45f,
                        onValueChange = onCropRightChange,
                        onValueChangeFinished = onCropRightChangeFinished,
                        modifier = Modifier.weight(1f),
                    )
                    BubbleStyleSliderRow(
                        label = stringResource(id = R.string.chat_style_bubble_crop_bottom),
                        value = cropBottom,
                        range = 0f..0.45f,
                        onValueChange = onCropBottomChange,
                        onValueChangeFinished = onCropBottomChangeFinished,
                        modifier = Modifier.weight(1f),
                    )
                }
                BubbleStyleSliderRow(
                    label = stringResource(id = R.string.chat_style_bubble_repeat_start),
                    value = repeatStart,
                    range = 0.05f..0.9f,
                    onValueChange = onRepeatStartChange,
                    onValueChangeFinished = onRepeatStartChangeFinished,
                )
                BubbleStyleSliderRow(
                    label = stringResource(id = R.string.chat_style_bubble_repeat_end),
                    value = repeatEnd,
                    range = ((repeatStart + 0.01f).coerceAtMost(0.95f))..0.95f,
                    onValueChange = onRepeatEndChange,
                    onValueChangeFinished = onRepeatEndChangeFinished,
                )
            }
        }
    }
}

@Composable
private fun BubbleStyleSliderRow(
    label: String,
    value: Float,
    range: ClosedFloatingPointRange<Float>,
    onValueChange: (Float) -> Unit,
    onValueChangeFinished: (Float) -> Unit,
    modifier: Modifier = Modifier,
) {
    var lastCommittedValue by remember { mutableStateOf(value) }
    val latestValue by rememberUpdatedState(value)
    val latestRange by rememberUpdatedState(range)
    val latestValueFinishCallback by rememberUpdatedState(onValueChangeFinished)
    val valueChangeFinished = remember {
        {
            val finalValue = latestValue.coerceIn(latestRange.start, latestRange.endInclusive)
            if (abs(finalValue - lastCommittedValue) > 0.0005f) {
                latestValueFinishCallback(finalValue)
                lastCommittedValue = finalValue
            }
        }
    }

    Column(modifier = modifier.fillMaxWidth().padding(top = 8.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Text(
                text = "${(value * 100).toInt()}%",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.primary,
            )
        }
        Slider(
            value = value,
            onValueChange = onValueChange,
            onValueChangeFinished = valueChangeFinished,
            valueRange = range,
        )
    }
}

@Composable
private fun ChatStylePreviewCard(
    chatStyle: ChatStyle,
    userColor: Color,
    aiColor: Color,
    userImageStyle: BubbleImageStyleConfig?,
    aiImageStyle: BubbleImageStyleConfig?,
) {
    Card(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.25f)),
    ) {
        Column(modifier = Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Text(
                text = stringResource(id = R.string.chat_style_preview_title),
                style = MaterialTheme.typography.bodyMedium,
            )

            if (chatStyle == ChatStyle.CURSOR) {
                Surface(
                    shape = RoundedCornerShape(8.dp),
                    color = userColor,
                    tonalElevation = 1.dp,
                ) {
                    Text(
                        text = stringResource(id = R.string.chat_style_preview_user_message),
                        modifier = Modifier.padding(12.dp),
                        color = MaterialTheme.colorScheme.onPrimaryContainer,
                        style = MaterialTheme.typography.bodyMedium,
                    )
                }
                Column(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 4.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp),
                ) {
                    Text(
                        text = stringResource(id = R.string.mcp_command_response),
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.75f),
                    )
                    Text(
                        text = stringResource(id = R.string.chat_style_preview_ai_message),
                        color = MaterialTheme.colorScheme.onSurface,
                        style = MaterialTheme.typography.bodyMedium,
                    )
                }
            } else {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.End,
                ) {
                    val shape = RoundedCornerShape(20.dp, 4.dp, 20.dp, 20.dp)
                    if (userImageStyle != null) {
                        BubbleImageBackgroundSurface(
                            imageStyle = userImageStyle,
                            shape = shape,
                            modifier = Modifier.widthIn(max = 240.dp).defaultMinSize(minHeight = 44.dp),
                            contentPadding = PaddingValues(12.dp),
                        ) {
                            Text(
                                text = stringResource(id = R.string.chat_style_preview_user_message),
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface,
                            )
                        }
                    } else {
                        Surface(
                            shape = shape,
                            color = userColor,
                            modifier = Modifier.widthIn(max = 240.dp).defaultMinSize(minHeight = 44.dp),
                            tonalElevation = 1.dp,
                        ) {
                            Text(
                                text = stringResource(id = R.string.chat_style_preview_user_message),
                                modifier = Modifier.padding(12.dp),
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onPrimaryContainer,
                            )
                        }
                    }
                }
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Start,
                ) {
                    val shape = RoundedCornerShape(4.dp, 20.dp, 20.dp, 20.dp)
                    if (aiImageStyle != null) {
                        BubbleImageBackgroundSurface(
                            imageStyle = aiImageStyle,
                            shape = shape,
                            modifier = Modifier.widthIn(max = 240.dp).defaultMinSize(minHeight = 44.dp),
                            contentPadding = PaddingValues(12.dp),
                        ) {
                            Text(
                                text = stringResource(id = R.string.chat_style_preview_ai_message),
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface,
                            )
                        }
                    } else {
                        Surface(
                            shape = shape,
                            color = aiColor,
                            modifier = Modifier.widthIn(max = 240.dp).defaultMinSize(minHeight = 44.dp),
                            tonalElevation = 1.dp,
                        ) {
                            Text(
                                text = stringResource(id = R.string.chat_style_preview_ai_message),
                                modifier = Modifier.padding(12.dp),
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface,
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
internal fun ThemeSettingsDisplayOptionsSection(
    cardColors: CardColors,
    showThinkingProcessInput: Boolean,
    onShowThinkingProcessInputChange: (Boolean) -> Unit,
    showStatusTagsInput: Boolean,
    onShowStatusTagsInputChange: (Boolean) -> Unit,
    showInputProcessingStatusInput: Boolean,
    onShowInputProcessingStatusInputChange: (Boolean) -> Unit,
    showChatFloatingDotsAnimationInput: Boolean,
    onShowChatFloatingDotsAnimationInputChange: (Boolean) -> Unit,
    saveThemeSettingsWithCharacterCard: SaveThemeSettingsAction,
    preferencesManager: UserPreferencesManager,
) {
    ThemeSettingsSectionTitle(
        title = stringResource(id = R.string.display_options_title),
        icon = Icons.Default.ColorLens,
    )

    Card(modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp), colors = cardColors) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(id = R.string.show_thinking_process),
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text = stringResource(id = R.string.show_thinking_process_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Switch(
                    checked = showThinkingProcessInput,
                    onCheckedChange = {
                        onShowThinkingProcessInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(showThinkingProcess = it)
                        }
                    },
                )
            }

            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(id = R.string.show_status_tags),
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text = stringResource(id = R.string.show_status_tags_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Switch(
                    checked = showStatusTagsInput,
                    onCheckedChange = {
                        onShowStatusTagsInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(showStatusTags = it)
                        }
                    },
                )
            }

            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(id = R.string.show_input_processing_status),
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text =
                            stringResource(id = R.string.show_input_processing_status_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Switch(
                    checked = showInputProcessingStatusInput,
                    onCheckedChange = {
                        onShowInputProcessingStatusInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(
                                showInputProcessingStatus = it,
                            )
                        }
                    },
                )
            }

            HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = stringResource(id = R.string.show_chat_floating_dots_animation),
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Text(
                        text = stringResource(id = R.string.show_chat_floating_dots_animation_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Switch(
                    checked = showChatFloatingDotsAnimationInput,
                    onCheckedChange = {
                        onShowChatFloatingDotsAnimationInputChange(it)
                        saveThemeSettingsWithCharacterCard {
                            preferencesManager.saveThemeSettings(
                                showChatFloatingDotsAnimation = it,
                            )
                        }
                    },
                )
            }
        }
    }
}

@Composable
internal fun ThemeSettingsSectionTitle(
    title: String,
    icon: ImageVector,
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.padding(vertical = 8.dp),
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary,
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(
            text = title,
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary,
        )
    }
    HorizontalDivider(modifier = Modifier.padding(bottom = 8.dp))
}
