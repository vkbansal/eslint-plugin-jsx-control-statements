/**
 * @fileoverview For tag must have each attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-for-require-each"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-for-require-each", rule, {
    valid: [
        {
            code: "<For each={foo}><div/></For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "<For><div/></For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [
                {
                    message: "'For' tag must have a 'each' attribute.",
                    type: "JSXOpeningElement"
                }
            ]
        }
    ]
});
