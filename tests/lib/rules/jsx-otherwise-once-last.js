/**
 * @fileoverview <Choose> tag must not be empty
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-otherwise-once-last"),
    RuleTester = require("eslint").RuleTester;
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-otherwise-once-last", rule, {

    valid: [
        {
            code: "<Choose></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "<Choose><When/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<Choose>\n\t<When/>\n</Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<Choose>\n\t<When/>\n\t<Otherwise/>\n</Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "<Choose><Otherwise/><Otherwise/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'Choose' tag must have only one 'Otherwise' tag.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "<Choose><Otherwise/><div/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'Otherwise' tag must be last child.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "<Choose><Otherwise/><Otherwise/><div/></Choose>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'Choose' tag must have only one 'Otherwise' tag.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
