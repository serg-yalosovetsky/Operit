@echo off
set "JAVA_HOME=E:\code\Operit-keys\jdk21\jdk-21.0.10+7"
set "ANDROID_HOME=C:\Users\sergy\AppData\Local\Android\Sdk"
set "ANDROID_SDK_ROOT=%ANDROID_HOME%"
set "PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%PATH%"
cd /d E:\code\Operit
call gradlew.bat :app:assembleRelease --no-daemon --stacktrace
echo EXITCODE=%ERRORLEVEL%
