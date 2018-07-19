# SafeCoin Mobile

SafeCoin mobile app built using Onsen UI, Redux, React and Webpack.

Use node v7.10.1

## Setup instructions

```
sudo apt-get install default-jdk gradle
wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip sdk-tools-linux-4333796.zip
./tools/bin/sdkmanager --install "system-images;android-27;google_apis;x86"
./tools/bin/sdkmanager "build-tools;27.0.3" "platforms;android-27" "tools"
export ANDROID_HOME="/home/your-username/tools/"

nvm install v7.10.1
nvm use v7.10.1
npm install -g yarn cordova@7.1.0
yarn install
cordova plugin add cordova-plugin-qrscanner cordova-plugin-file cordova-plugin-http cordova-clipboard cordova-plugin-inappbrowser cordova-plugin-device cordova-plugin-wkwebview-engine cordova-plugin-whitelist
cordova plugin add cordova-plugin-google-analytics
cordova platform add [android@6.2.3 | ios]
```
### debug ios/android
```
cordova run android
cordova run ios
```
### final ios/android
```
cordova run ios --release
cordova run android --release
```

#### Part1 create safecoin.keystore file for signed APK
```
keytool -genkey -v -keystore ~/safecoin.keystore -alias safecoin_play -keyalg RSA -keysize 2048 -validity 10000
```
#### Part2 Optional (PKCS12 format which is an industry standard format using)
```
keytool -importkeystore -srckeystore ~/safecoin.keystore -destkeystore ~/safecoin.keystore -deststoretype pkcs12
```

### sign:android
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/safecoin.keystore -signedjar platforms/android/build/outputs/apk/android-release-signed.apk platforms/android/build/outputs/apk/android-release-unsigned.apk safecoin_play
```

### aligned:android
```
$ANDROID_HOME/build-tools/27.0.3/zipalign -v 4 platforms/android/build/outputs/apk/android-release-signed.apk platforms/android/build/outputs/apk/android-release-signed-aligned.apk
```

### iOS FAQ

1. Icons

Icons are a bit of a bitch to setup for iOS. Make sure you've added the ios platform to cordova, and copy the folder `./assets/img/ios/AppIcon.appiconset` to `./platforms/ios/SAFE\ Wallet/Images.xcassets`. Remove the folder `AppIcon.appiconset` if it exists in `./platforms/ios/SAFE\ Wallet/Images.xcassets`.

2. `.ipa` files (using it on a real iPhone)

```
1: Change scheme destination to Generic IOS device.

2: Click Product > Archive > once this is complete open up the Organiser and click the latest version.

3: Click on Export... option from right side of organiser window.

4: Select a method for export > Choose correct signing > Save to Destination.
```

2.1 Adding account to sign for the app

```
1. Xcode -> Preferences -> Account -> sign in with your apple id
2. https://i.stack.imgur.com/w4SlR.gif
```

# Contributors

[kendricktan](http://github.com/kendricktan/)

[alexanderzabuga](https://github.com/alexanderzabuga)

[kevinah95](https://github.com/kevinah95)

[afucher](https://github.com/afucher)

[andyvh](https://github.com/andyvh)

[darkavenger](https://github.com/darkavenger)

[emhaye](https://github.com/emhaye)

[simoneddeland](https://github.com/simoneddeland)

[dropnib](https://github.com/dropnib)

[rubyxroot](https://github.com/rubyxroot)

[berar](https://github.com/berar)

[OleksandrBlack](https://github.com/OleksandrBlack)
