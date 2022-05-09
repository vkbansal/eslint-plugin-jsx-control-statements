/**
 * @fileoverview If tag must have condition attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-if-require-condition"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-if-require-condition", rule, {
    valid: [
        {
            code: "<If condition={foo}><div/></If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code: "<If condition={foo}><div/><Else/></If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "<If><div/></If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [
                {
                    message: "'If' tag must have a 'condition' attribute.",
                    type: "JSXOpeningElement"
                }
            ]
        }
    ]
});
