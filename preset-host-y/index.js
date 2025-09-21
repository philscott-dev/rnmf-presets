// Map RN versions → capabilities → { name, version }
// Add anything you want to pin (react-native, react, core libs, etc.)
module.exports = {
  "*": {
    core: { name: "react-native", version: "^0.80.0" },
    react: { name: "react", version: "^19.0.0" }
    // add gesture-handler, reanimated, etc. as custom capabilities if you like
  }
}