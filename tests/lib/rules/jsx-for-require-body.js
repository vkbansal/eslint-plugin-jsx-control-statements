/**
 * @fileoverview For tag must have body attribute
 * @author Jack Harding
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-for-require-body"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-for-require-body", rule, {
    valid: [
        {
            code: "<For body={renderItem}/>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],

    invalid: [
        {
            code: "<For each={foo}><div/></For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            errors: [
                {
                    message: "'For' tag must have a 'body' attribute.",
                    type: "JSXOpeningElement",
                },
            ],
        },
    ],
});
