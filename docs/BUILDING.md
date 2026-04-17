# **Android Operit (Linux/Ubuntu)**

 Linux ( Ubuntu/Debian) Android **Operit** .

## ** Operit**

**Operit AI** AI ,**** Android ,****. AI .

,. [README.md](../README.md).

## ****

1. :
2. : Android
3. :
4. : Android SDK NDK
5. : -
6. :
7.

## **1. :**

,:**Git** **JDK 17**.
```bash 
# Translated section
sudo apt update

# JDK 17
sudo apt install -y git wget unzip openjdk-17-jdk

, Java :
java -version  
# "OpenJDK Runtime Environment (build 17..."
``` 
**:** **JDK 17**., JDK 17.

## **2. : Android **

 SDK, Android (Command Line Tools), Android Studio.

1. ** Android SDK :**
```bash
mkdir -p ~/Android/cmdline-tools
```
2. :
 Android Developers , Linux .
**:** ,！
```bash
# ,
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O ~/cmdline-tools.zip
```

3. :
 latest , sdkmanager .
```bash
# Translated section
unzip ~/cmdline-tools.zip -d ~/Android/cmdline-tools

# cmdline-tools latest
mv ~/Android/cmdline-tools/cmdline-tools ~/Android/cmdline-tools/latest

# Translated section
rm ~/cmdline-tools.zip
```
 ~/Android/cmdline-tools/latest/bin.

## **3. :**

 **Java** **Android SDK** , java、git sdkmanager.

1. **:**
```bash
nano ~/.bashrc
```

2. **:**
```bash
# =============== Java JDK 17 ===============
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64  
export PATH=$JAVA_HOME/bin:$PATH

# =============== Android SDK ===============
export ANDROID_HOME=$HOME/Android  
# latest/bin PATH
export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$PATH  
# platform-tools (ADB/Fastboot) PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

3. **:**
```bash
source ~/.bashrc
```

## **4. : Android SDK NDK**

 sdkmanager SDK 、 NDK.

1. SDK (！):
, Gradle .
```bash
yes | sdkmanager --licenses
```

2. 、SDK :
Operit android-34 34.0.0 .
```bash
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```
3. NDK :
 NDK 25.1.8937393.
```bash
sdkmanager "ndk;25.1.8937393"
```

## **: - **

( 16GB ), Gradle .
 **gradle.properties** ,:

```properties
# Gradle JVM , 8GB
org.gradle.jvmargs=-Xmx8g -XX:MaxMetaspaceSize=1g -XX:+HeapDumpOnOutOfMemoryError

# Translated section
org.gradle.parallel=true

# () worker , CPU
# org.gradle.workers.max=8
``` 

## **5. : GitHub OAuth **

 GitHub (、MCP ), GitHub OAuth Application Client ID.

1. ** GitHub OAuth App:**
 - GitHub :[**GitHub Developer Settings**](https://github.com/settings/developers)
 - **"New OAuth App"**.
 - :
 - **Application name**: `Operit Dev` ()
 - **Homepage URL**: `https://github.com/< GitHub >/Operit` ( Fork )
 - **Authorization callback URL**: `operit://github-oauth-callback` (**！**)

2. ** Client ID:**
 , **Client ID**. ID.

3. **:**
 - , `local.properties.example` .
 - `local.properties`.
 - `local.properties` , `"YOUR_OWN_GITHUB_CLIENT_ID_HERE"` Client ID.

   ```properties
 # :
   GITHUB_CLIENT_ID=iv1.1234567890abcdef
   ```
 **:** `local.properties` Git , ID ,.

## **6. :**

,.

1. :
( Git ):

**: Fork **
 GitHub Fork: [AAswordman/Operit](https://github.com/AAswordman/Operit)
 Fork( --recurse-submodules):
```bash
git clone --recurse-submodules https://github.com/< GitHub >/Operit.git
cd Operit
```  
():
```bash
git remote add upstream https://github.com/AAswordman/Operit.git
```  

**: Fork,()**
```bash
git clone --recurse-submodules https://github.com/AAswordman/Operit.git
cd Operit
```  

 --recurse-submodules,:
```bash
git submodule update --init --recursive
```  
 FBX ,:
```bash
git submodule update --init fbx/third_party/ufbx
```  
2. ** (！):**
`README.md` ,. [ Google Drive ](https://drive.google.com/drive/folders/1g-Q_i7cf6Ua4KX9ZM6V282EEZvTVVfF7?usp=sharing) , `libs` `.keep` . **:** ,.:`models.zip`、`subpack.zip`、`jniLibs.zip`、`libs.zip`.
```bash
./app/src/main/assets/models/.keep  
./app/src/main/assets/subpack/.keep  
./app/src/main/jniLibs/.keep
./app/libs
```

3. ** ():**
```bash
git checkout docs/add-building-guide
# Translated section
```

4. ** Gradle :**
```bash
chmod +x ./gradlew
```

4. assembleDebug :
,.
```bash
./gradlew assembleDebug
```
5. APK :
, APK :
app/build/outputs/apk/debug/app-debug.apk

## **7. **

| | |
| :---- | :---- |
| sdkmanager: command not found | . **~/.bashrc** , source ~/.bashrc. |
| Could not determine Java version... | **JAVA_HOME** , JDK . **JDK 17** . |
| NDK not found. | **** sdkmanager **ndk;25.1.8937393** . |
| You have not accepted the license agreements... | . **** `yes |

