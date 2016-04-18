/**
 * @fileoverview Use If tag instead of ternary operator
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-use-if-tag"),
    RuleTester = require("eslint").RuleTester;
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-use-if-tags", rule, {

    valid: [
        {
            code: "condition ? consequent : alternate",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "condition ? <Consequent/> : <Alternate/>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "Ternary operator used. Use 'If' tag instead.",
                type: "ConditionalExpression"
            }]
        }, {
            code: "condition ? <Consequent/> : null",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "Ternary operator used. Use 'If' tag instead.",
                type: "ConditionalExpression"
            }]
        }, {
            code: "condition ? <Consequent/> : Alternate",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "Ternary operator used. Use 'If' tag instead.",
                type: "ConditionalExpression"
            }]
        }, {
            code: "condition ? Consequent : <Alternate/>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "Ternary operator used. Use 'If' tag instead.",
                type: "ConditionalExpression"
            }]
        }
    ]
});
