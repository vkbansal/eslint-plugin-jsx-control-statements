"use strict";

module.exports = {
    rules: {
        "jsx-for-require-each": require("./lib/rules/jsx-for-require-each"),
        "jsx-for-require-index": require("./lib/rules/jsx-for-require-index"),
        "jsx-for-require-of": require("./lib/rules/jsx-for-require-of"),
        "jsx-for-single-child": require("./lib/rules/jsx-for-single-child"),
        "jsx-if-require-condition": require("./lib/rules/jsx-if-require-condition"),
        "jsx-if-single-child": require("./lib/rules/jsx-if-single-child"),
        "jsx-use-if-tag": require("./lib/rules/jsx-use-if-tag")
    }
};
