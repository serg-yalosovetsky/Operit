# Markdown :

、 KMP Markdown .、 Markdown ,(LLM),“”,.

## Translated section

, Markdown .

### 1. ·:,

,`Stream<Char>`().

- ****:,,.
- ****: Markdown ,.
- ****:,,.

### 2. KMP :

`StreamKmpGraph`, [Knuth-Morris-Pratt (KMP)](https://en.wikipedia.org/wiki/Knuth–Morris–Pratt_algorithm) .

- ****:,KMP ,.
- ****:, O(n),.
- ** DSL**:`kmpPattern`,,.

### 3. :

`StreamPlugin`. Markdown (、、).

- ****:,.
- ****: Markdown (),`StreamPlugin`,.
- ****:(,),.

### 4. : Markdown

 Markdown (),:

1. ****:,、、.
2. ****:,,、、.

.

### 5. UI :

 UI ,`StreamMarkdownRenderer` “”,.

- ****:`BatchNodeUpdater`, UI ,,(Recomposition).
- ** UI**: Jetpack Compose `SnapshotStateList``key`, UI ,.
- ****:,.

## Translated section

 UI .

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#f8fafc',
    'primaryColor': '#f1f5f9',
    'primaryTextColor': '#1e293b',
    'primaryBorderColor': '#475569',
    'lineColor': '#64748b',
    'secondaryColor': '#e2e8f0',
    'tertiaryColor': '#f1f5f9'
  },
  'flowchart': {
    'curve': 'basis',
    'padding': 25,
    'nodeSpacing': 35,
    'rankSpacing': 65,
    'diagramPadding': 25,
    'htmlLabels': true,
    'useMaxWidth': true
  }
}}%%

graph TD
 A[""] --> DSL["KMP DSL
    (*text*, ##title##)"]
    
 DSL --> P["
 (、、...)"]
    
 P -->|| KMP["KMP "]
    
 A --> SP["
 splitBy()"]
    
    KMP --> SP
 SP --> OUT["MarkdownNode
 UI "]

 %%
    style A fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#ffffff
    style DSL fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#ffffff
    style P fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#ffffff
    style KMP fill:#6366f1,stroke:#4338ca,stroke-width:3px,color:#ffffff
    style SP fill:#10b981,stroke:#059669,stroke-width:2px,color:#ffffff
    style OUT fill:#059669,stroke:#047857,stroke-width:3px,color:#ffffff
```

## Translated section

### 1. ()
 Markdown `kmpPattern` DSL :
```kotlin
// :*content*
kmpPattern {
    char('*')
    group(1) { greedyStar { noneOf('*') } }
    char('*')
}
```
 `StreamKmpGraph` ,:
- **KMP **:
- ****:KMP +

### 2.
 `StreamPlugin`( `BoldPlugin`, `HeaderPlugin`) `StreamKmpGraph`,(,).

### 3. - splitBy

**:**
```kotlin
charStream.splitBy(blockPlugins).collect { blockGroup ->
 //
 // KMP O(n) ,
}
```

**:**
```kotlin
blockGroup.stream.splitBy(inlinePlugins).collect { inlineGroup ->
 // KMP
 //
}
```

### 4. KMP

 `c`:
1. ****: `c`
2. ****:, KMP
3. ****:,
4. ****: `Match`()、`InProgress` `NoMatch`

:
- ****:KMP ,
- ****:,
- ****:,

### 5.
 `MarkdownNode` , UI ,"".
