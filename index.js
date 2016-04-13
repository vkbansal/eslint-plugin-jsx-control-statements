"use strict";

module.exports = {
    rules: {
        "jsx-choose-not-empty": require("./lib/rules/jsx-choose-not-empty"),
        "jsx-for-require-each": require("./lib/rules/jsx-for-require-each"),
        "jsx-for-require-of": require("./lib/rules/jsx-for-require-of"),
        "jsx-if-require-condition": require("./lib/rules/jsx-if-require-condition"),
        "jsx-otherwise-once-last": require("./lib/rules/jsx-otherwise-once-last"),
        "jsx-use-if-tag": require("./lib/rules/jsx-use-if-tag"),
        "jsx-when-require-condition": require("./lib/rules/jsx-when-require-condition")
    }
};
