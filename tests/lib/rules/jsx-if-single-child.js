/**
 * @fileoverview If tag must contain single child
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-if-single-child"),
    RuleTester = require("eslint").RuleTester;
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-if-single-child", rule, {

    valid: [
        {
            code: "<If><div/></If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<If>\n\t<div/>\n<Else/>\n\t<div/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "<If>foobar</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "<If>foo<Else/>bar</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<If>\n\t<foobar/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<If>\n\t<div>\n\t\t<foo/>\n\t</div>\n<Else/>\n\t<div>\n\t\t<bar/>\n\t</div>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }, {
            code: "\n<If>\n\t{items.map(item => <span>{item}</span>)}\n</If>",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "\n<If>\n\t<div/>\n\t<div/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'If' tag must have single child.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n\t<div/>\n<Else/>\n\t<div/>\n\t<div/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'If' tag must have single child.",
                type: "JSXOpeningElement"
            }, {
                message: "There must be single child between 'Else' and ending 'If'.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n\t<div/>\n<Else/>\n\t<div/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "'If' tag must have single child.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n<Else/>\n\t<div/>\n\t<div/>\n</If>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "There must be single child between 'Else' and ending 'If'.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
