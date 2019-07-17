# step by step

- install "@ionic-native/splash-screen": "4.4.0"
- install "cordova-plugin-splashscreen": "^4.1.0"
- config splash behavior in config.xml
```xml
<preference name="SplashScreen" value="screen" />
<preference name="SplashScreenDelay" value="3000" />
<preference name="AutoHideSplashScreen" value="false" />
<preference name="SplashShowOnlyFirstTime" value="false" />
<preference name="FadeSplashScreenDuration" value="300" />
<preference name="SplashMaintainAspectRatio" value="true" />
```
- make splash image as you need, and tell the UI man what to do

|    scale    |    idiom    |    width    |    height    |    size    |    filename    |
|:-----------:|:-----------:|:-----------:|:------------:|:----------:|:--------------:|
|     2x*     |  universal  |     any     |     any      | 2732x2732  | `Default@2x~universal~anyany.png` |
|     2x      |  universal  |     com     |     any      | 1278x2732  | `Default@2x~universal~comany.png` |
|     2x      |  universal  |     com     |     com      | 1334x750   | `Default@2x~universal~comcom.png` |
|     3x*     |  universal  |     any     |     any      | 2208x2208  | `Default@3x~universal~anyany.png` |
|     3x      |  universal  |     any     |     com      | 2208x1242  | `Default@3x~universal~anycom.png` |
|     3x      |  universal  |     com     |     any      | 1242x2208  | `Default@3x~universal~comany.png` |

look here for detail informations [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen/blob/master/README.md)
- put the image into folder and change file name follow the rules
```
drawable-port-ldpi-screen.png      --- low dpi(~120dpi) for port mode
drawable-port-mdpi-screen.png      --- medium dpi(~160dpi) for port mode
drawable-port-hdpi-screen.png      --- high dpi(~240dpi) for port mode
drawable-port-xhdpi-screen.png     ---extra-high dpi(~320dpi) for port mode
drawable-port-xxhdpi-screen.png    ---extra-extra-high dpi(~480dpi) for port mode
drawable-port-xxxhdpi-screen.png   ---extra-extra-extra-high dpi(~640dpi) for port mode
```

the methods is same if you need land mode
- now do the code
in app.components.ts
```javascript
import { SplashScreen } from '@ionic-native/splash-screen';

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  platform.ready().then(() => {
    splashScreen.hide();
  });
}
```
if you need some time to do something, then better do this way
```javascript
platformReady() {
  // Call any initial plugins when ready
  this.platform.ready().then(() => {
    this.splashScreen.hide();
  });
}
```

you must debug app on the phone to see the splash screen effective
