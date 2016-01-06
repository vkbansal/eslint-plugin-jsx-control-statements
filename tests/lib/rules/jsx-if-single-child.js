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
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "\n<If>\n\t<div/>\n<Else/>\n\t<div/>\n</If>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "<If>foobar</If>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "<If>foo<Else/>bar</If>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "\n<If>\n\t<foobar/>\n</If>",
            ecmaFeatures: {
                jsx: true
            }
        }, {
            code: "\n<If>\n\t<div>\n\t\t<foo/>\n\t</div>\n<Else/>\n\t<div>\n\t\t<bar/>\n\t</div>\n</If>",
            ecmaFeatures: {
                jsx: true
            }
        }
    ],

    invalid: [
        {
            code: "\n<If>\n\t<div/>\n\t<div/>\n</If>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "'If' tag must have single child.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n\t<div/>\n<Else/>\n\t<div/>\n\t<div/>\n</If>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "There must be single child between 'If' and 'Else'.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n\t<div/>\n<Else/>\n\t<div/>\n</If>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "There must be single child between 'If' and 'Else'.",
                type: "JSXOpeningElement"
            }]
        }, {
            code: "\n<If>\n\t<div/>\n<Else/>\n\t<div/>\n\t<div/>\n</If>",
            ecmaFeatures: {
                jsx: true
            },
            errors: [{
                message: "There must be single child between 'If' and 'Else'.",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
