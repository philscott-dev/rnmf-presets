// Map RN versions → capabilities → { name, version }
// Add anything you want to pin (react-native, react, core libs, etc.)
module.exports = {
  "*": {
    core: { name: "react-native", version: "^0.77.2" },
    react: { name: "react", version: "^18.3.1" }
  }
}