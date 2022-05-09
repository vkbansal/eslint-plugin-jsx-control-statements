/**
 * @fileoverview <Choose> tag must not be empty
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-choose-not-empty"),
    RuleTester = require("eslint").RuleTester;
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-choose-not-empty", rule, {
    valid: [
        {
            code: "<Choose><When/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code: "\n<Choose>\n\t<When/>\n</Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "<Choose></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [
                {
                    message: "'Choose' tag must not be empty.",
                    type: "JSXOpeningElement"
                },
                {
                    message: "'Choose' tag must have atleast one 'When' tag.",
                    type: "JSXOpeningElement"
                }
            ]
        },
        {
            code: "<Choose><div/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [
                {
                    message: "'Choose' tag must have atleast one 'When' tag.",
                    type: "JSXOpeningElement"
                }
            ]
        }
    ]
});
