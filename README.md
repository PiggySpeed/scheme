Setup:

IOS:
- react-native link -> leads to errors, do not use!
- check to ensure icons are installed correctly: https://github.com/oblador/react-native-vector-icons

Android: 
- edited android/app/build.gradle file and added:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
