/**
 * @fileoverview For tag must have of attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-for-require-of"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-for-require-of", rule, {

    valid: [
        {
            code: "<For of={foo}><div/></For>",
            ecmaFeatures: {
                jsx: true
            }
        }
    ],

    invalid: [
        {
            code: "<For><div/></For>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "'For' tag must have a 'of' attribute.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
