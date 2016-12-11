Setup:

IOS:
- react-native link -> leads to errors, do not use!
- check to ensure icons are installed correctly: https://github.com/oblador/react-native-vector-icons

Android: 
- edited android/app/build.gradle file and added:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


Realm@0.14.3:
- Not supported in windows just yet, but can use this workaround: 
- https://github.com/realm/realm-js/issues/674
- This was removed from Realm package.json: "postlink": "node_modules/realm/scripts/rnpm-postlink.js"
- Remember to do react-native link afterwards and manually add the missing lines of code to the android files