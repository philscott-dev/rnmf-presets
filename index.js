// Map RN versions → capabilities → { name, version }
// Add anything you want to pin (react-native, react, core libs, etc.)
module.exports = {
  0.77: {
    core: { name: "react-native", version: "^0.77.2" },
    react: { name: "react", version: "^18.3.1" },
    reanimated: { name: "react-native-reanimated", version: "^3.10.0" },
    gestureHandler: {
      name: "react-native-gesture-handler",
      version: "^2.15.0",
    },
    navigationCore: { name: "@react-navigation/native", version: "^6.1.9" },
    navigationNativeStack: {
      name: "@react-navigation/native-stack",
      version: "^6.9.17",
    },
    screens: { name: "react-native-screens", version: "^3.30.0" },
    safeArea: { name: "react-native-safe-area-context", version: "^4.10.1" },
    svg: { name: "react-native-svg", version: "^14.1.0" },
    vectorIcons: { name: "react-native-vector-icons", version: "^10.1.0" },
  },
  ">=0.80 <0.82": {
    core: { name: "react-native", version: "^0.81.0" },
    react: { name: "react", version: "^18.3.1" },
    reanimated: { name: "react-native-reanimated", version: "^3.15.0" },
    gestureHandler: {
      name: "react-native-gesture-handler",
      version: "^2.16.0",
    },
    navigationCore: { name: "@react-navigation/native", version: "^7.0.4" },
    navigationNativeStack: {
      name: "@react-navigation/native-stack",
      version: "^7.0.4",
    },
    screens: { name: "react-native-screens", version: "^4.6.0" },
    safeArea: { name: "react-native-safe-area-context", version: "^5.0.0" },
    svg: { name: "react-native-svg", version: "^15.2.0" },
    vectorIcons: { name: "react-native-vector-icons", version: "^10.2.0" },
  },
};
