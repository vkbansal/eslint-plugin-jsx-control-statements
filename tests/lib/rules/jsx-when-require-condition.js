/**
 * @fileoverview When tag must have condition attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-when-require-condition"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-when-require-condition", rule, {

    valid: [
        {
            code: "<When condition={foo}><div/></When>",
            ecmaFeatures: {
                jsx: true
            }
        }
    ],

    invalid: [
        {
            code: "<When><div/></When>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "'When' tag must have a 'condition' attribute.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
