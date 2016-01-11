/**
 * @fileoverview For tag must have single child
 * @author Vivek Kumar Bansal
 * @copyright 2016 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-for-single-child"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-for-single-child", rule, {
    valid: [
        {
            code: "<For><div/></For>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "<For>foobar</For>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "\n<For>\n\t<foobar/>\n</For>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "\n<For>\n\t{foobar}\n</For>",
            ecmaFeatures: {
                jsx: true
            }
        }
    ],

    invalid: [
        {
            code: "\n<For>\n\t<div/>\n\t<div/>\n</For>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "'For' tag must have single child.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
