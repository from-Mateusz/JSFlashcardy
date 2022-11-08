const path = require("path");

module.exports = {
    entry: "./resources/js/welcome.js",
    output: {
        filename: "_welcome.js",
        path: path.resolve(__dirname, "resources", "js", "deploy")
    }
};