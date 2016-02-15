/**
 * @fileoverview For tag must have index attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-for-require-index"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-for-require-index", rule, {

    valid: [
        {
            code: "<For index={foo}><div/></For>",
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
            errors: [{
                message: "'For' tag must have a 'index' attribute.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
