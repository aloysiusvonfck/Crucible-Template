# Crucible Template

A minimal Android dynamic feature module template for use with NexusIDE.

## Structure

```
app/
├── build.gradle.kts
├── src/main/
│   ├── java/com/nexuside/dynamic/
│   │   ├── MainActivity.kt
│   │   ├── GeneratedModuleContent.kt  # <-- This gets replaced
│   │   └── ui/theme/
│   │       ├── Color.kt
│   │       └── Theme.kt
│   └── res/values/
│       ├── colors.xml
│       └── strings.xml
└── build.gradle.kts
```

## How it works

1. NexusIDE sends code to `/api/compile`
2. Backend triggers GitHub Actions via `repository_dispatch`
3. Workflow clones this repo, replaces `GeneratedModuleContent.kt`
4. Builds APK with Gradle
5. APK is available as a GitHub Action artifact

## Build locally

```bash
./gradlew assembleDebug
```

The APK will be at `app/build/outputs/apk/debug/app-debug.apk`
