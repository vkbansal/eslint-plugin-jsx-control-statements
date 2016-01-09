"use strict";

module.exports = {
    rules: {
        "jsx-if-require-condition": require("./lib/rules/jsx-if-require-condition"),
        "jsx-if-single-child": require("./lib/rules/jsx-if-single-child"),
        "jsx-use-if-tag": require("./lib/rules/jsx-use-if-tag"),
        "jsx-for-single-child": require("./lib/rules/jsx-for-single-child")
    }
};
