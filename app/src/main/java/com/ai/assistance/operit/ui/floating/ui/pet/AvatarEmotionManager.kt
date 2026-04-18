package com.ai.assistance.operit.ui.floating.ui.pet

import com.ai.assistance.operit.util.AppLogger
import com.ai.assistance.operit.core.avatar.common.state.AvatarEmotion
import com.ai.assistance.operit.core.avatar.common.state.AvatarMoodTypes

/**
 * Avatar emotion manager.
 * Emotion inference logic migrated from PetOverlayService.
 */
object AvatarEmotionManager {

    /**
     * Infer emotion from text content.
     * Uses keyword matching to decide which expression should be used.
     */
    fun inferEmotionFromText(text: String): AvatarEmotion {
        val t = text.lowercase()
        val happyKeywords = listOf("\u5f00\u5fc3", "\u9ad8\u5174", "\u4e0d\u9519", "\u68d2", "\u592a\u597d\u4e86", "😀", "🙂", "😊", "😄", "\u8d5e")
        val angryKeywords = listOf("\u751f\u6c14", "\u6124\u6012", "\u6c14\u6b7b", "\u8ba8\u538c", "\u7cdf\u7cd5", "😡", "\u6012")
        val cryKeywords = listOf("\u96be\u8fc7", "\u4f24\u5fc3", "\u6cae\u4e27", "\u5fe7\u4f24", "\u54ed", "😭", "😢")
        val shyKeywords = listOf("\u5bb3\u7f9e", "\u7f9e", "\u8138\u7ea2", "\u4e0d\u597d\u610f\u601d", "///")
        
        fun containsAny(keys: List<String>): Boolean = 
            keys.any { t.contains(it) || text.contains(it) }
        
        return when {
            containsAny(happyKeywords) -> AvatarEmotion.HAPPY
            containsAny(angryKeywords) -> AvatarEmotion.SAD
            containsAny(cryKeywords) -> AvatarEmotion.SAD
            containsAny(shyKeywords) -> AvatarEmotion.CONFUSED
            else -> AvatarEmotion.IDLE
        }
    }
    
    /**
     * Extract the mood tag from text.
     * The AI may include a <mood> tag in its response to explicitly specify emotion.
     */
    fun extractMoodTagValue(text: String): String? {
        return try {
            val regex = Regex("<mood>([^<]+)</mood>", RegexOption.IGNORE_CASE)
            val all = regex.findAll(text).toList()
            if (all.isEmpty()) return null
            AvatarMoodTypes.normalizeKey(all.last().groupValues[1])
                .takeIf { it.isNotBlank() }
        } catch (_: Exception) { null }
    }
    
    /**
     * Convert a mood value into AvatarEmotion.
     */
    private fun moodToEmotion(mood: String): AvatarEmotion? {
        return AvatarMoodTypes.builtInFallbackEmotion(mood)
    }
    
    /**
     * Analyze the text and return the most suitable expression.
     * Prefer the mood tag; fall back to keyword inference when it is absent.
     */
    fun analyzeEmotion(text: String): AvatarEmotion {
        AppLogger.d("AvatarEmotionManager", "Analyzing emotion from raw text: $text")
        
        // First, try to read the value from the mood tag.
        val parsedMood = extractMoodTagValue(text)
        if (!parsedMood.isNullOrBlank()) {
            val emotion = moodToEmotion(parsedMood)
            if (emotion != null) {
                AppLogger.d("AvatarEmotionManager", "Resolved from mood tag: $parsedMood -> $emotion")
                return emotion
            }
        }
        
        // If no mood tag is present, fall back to keyword inference.
        val emotion = inferEmotionFromText(text)
        AppLogger.d("AvatarEmotionManager", "Using keyword inference: $emotion")
        return emotion
    }
    
    /**
     * Remove XML-like tags from text.
     * Used to strip mood and similar markup before showing content to the user.
     */
    fun stripXmlLikeTags(text: String): String {
        var s = text
        // Match paired tags such as <tag>...</tag>.
        val paired = Regex(
            pattern = "<([A-Za-z][A-Za-z0-9:_-]*)(\\s[^>]*)?>[\\s\\S]*?</\\1>",
            options = setOf(RegexOption.IGNORE_CASE, RegexOption.DOT_MATCHES_ALL)
        )
        repeat(5) { _ ->
            val updated = s.replace(paired, "")
            if (updated == s) return@repeat
            s = updated
        }
        // Match self-closing tags such as <tag />.
        s = s.replace(
            Regex("<[A-Za-z][A-Za-z0-9:_-]*(\\s[^>]*)?/\\s*>", RegexOption.IGNORE_CASE),
            ""
        )
        // Match any remaining tags.
        s = s.replace(
            Regex("</?[^>]+>", RegexOption.IGNORE_CASE),
            ""
        )
        return s.trim()
    }
} 
