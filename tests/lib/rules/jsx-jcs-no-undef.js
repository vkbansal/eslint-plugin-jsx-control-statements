/**
 * @fileoverview Tests for JSX Control Statements no-undef.
 * @author Alex Gilleran
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-jcs-no-undef"),
    RuleTester = require("eslint").RuleTester;
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("jsx-jcs-no-undef", rule, {
    valid: [
        // <For> statement
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "{element.textValue}" +
                "{idx}" +
                "<div>" +
                "{element.textValue}" +
                "{idx}" +
                "</div>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "<AnotherElement foo={element} bar={idx}>" +
                "<YetAnotherElement foo={element} bar={idx} />" +
                "</AnotherElement>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code:
                '<For each="element1" of={this.props.elements} index="idx1">' +
                '<For each="element2" of={this.props.elements} index="idx2">' +
                "{element1} {element2} {idx1} {idx2}" +
                "</For>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        // <With> statement
        {
            code: "<With value={47}>" + "{value}" + "<div>" + "{value}" + "</div>" + "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code:
                '<With value={47} anotherValue={"foo"}>' +
                "<AnotherElement foo={value} bar={anotherValue}>" +
                "<YetAnotherElement foo={value} bar={anotherValue} />" +
                "</AnotherElement>" +
                "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code:
                "<With value={47}>" +
                '<With anotherValue={"foo"}>' +
                "{value} {anotherValue}" +
                "</With>" +
                "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        // Standard no-undef rules follow:
        "var a = 1, b = 2; a;",
        "/*global b*/ function f() { b; }",
        { code: "function f() { b; }", globals: { b: true } },
        { code: "function f() { b; }", globals: { b: true } },
        "/*global b a:false*/  a;  function f() { b; a; }",
        "function a(){}  a();",
        "function f(b) { b; }",
        "var a; a = 1; a++;",
        "var a; function f() { a = 1; }",
        "/*global b:true*/ b++;",
        "/*eslint-env browser*/ window;",
        "/*eslint-env browser*/ window;",
        '/*eslint-env node*/ require("a");',
        "Object; isNaN();",
        "toString()",
        "hasOwnProperty()",
        "function evilEval(stuffToEval) { var ultimateAnswer; ultimateAnswer = 42; eval(stuffToEval); }",
        "typeof a",
        "typeof (a)",
        "var b = typeof a",
        "typeof a === 'undefined'",
        "if (typeof a === 'undefined') {}",
        {
            code: "function foo() { var [a, b=4] = [1, 2]; return {a, b}; }",
            parserOptions: { ecmaVersion: 6 }
        },
        { code: "var toString = 1;", parserOptions: { ecmaVersion: 6 } },
        { code: "function myFunc(...foo) {  return foo;}", parserOptions: { ecmaVersion: 6 } },
        {
            code: "var React, App, a=1; React.render(<App attr={a} />);",
            parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
        },
        {
            code: "var console; [1,2,3].forEach(obj => {\n  console.log(obj);\n});",
            parserOptions: { ecmaVersion: 6 }
        },
        {
            code: "var Foo; class Bar extends Foo { constructor() { super();  }}",
            parserOptions: { ecmaVersion: 6 }
        },
        {
            code: "import Warning from '../lib/warning'; var warn = new Warning('text');",
            parserOptions: { sourceType: "module", ecmaVersion: 6 }
        },
        {
            code: "import * as Warning from '../lib/warning'; var warn = new Warning('text');",
            parserOptions: { sourceType: "module", ecmaVersion: 6 }
        },
        { code: "var a; [a] = [0];", parserOptions: { ecmaVersion: 6 } },
        { code: "var a; ({a} = {});", parserOptions: { ecmaVersion: 6 } },
        { code: "var a; ({b: a} = {});", parserOptions: { ecmaVersion: 6 } },
        { code: "var obj; [obj.a, obj.b] = [0, 1];", parserOptions: { ecmaVersion: 6 } },
        { code: "URLSearchParams;", env: { browser: true } },

        // Notifications of readonly are removed: https://github.com/eslint/eslint/issues/4504
        { code: "/*global b:false*/ function f() { b = 1; }" },
        { code: "function f() { b = 1; }", globals: { b: true } },
        { code: "/*global b:false*/ function f() { b++; }" },
        { code: "/*global b*/ b = 1;" },
        { code: "/*global b:false*/ var b = 1;" },
        { code: "Array = 1;" },

        // new.target: https://github.com/eslint/eslint/issues/5420
        { code: "class A { constructor() { new.target; } }", parserOptions: { ecmaVersion: 6 } },

        // Experimental,
        {
            code: "var {bacon, ...others} = stuff; foo(others)",
            parserOptions: {
                ecmaVersion: 2018
            },
            globals: { stuff: true, foo: true }
        }
    ],

    invalid: [
        // <For> statement
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "{wrongElement}" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "<Blah key={wrongElement}></Blah>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "<WrapperElement>" +
                "{wrongElement}" +
                "</WrapperElement>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                '<For each="element" of={this.props.elements} index="idx">' +
                "<WrapperElement>" +
                "<Blah key={wrongElement}></Blah>" +
                "</WrapperElement>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                '<For each="element1" of={this.props.elements} index="idx1">' +
                "{idx2} {element2}" +
                '<For each="element2" of={this.props.elements} index="idx2">' +
                "{element1} {idx1}" +
                "</For>" +
                "</For>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [
                { message: "'idx2' is not defined.", type: "Identifier" },
                { message: "'element2' is not defined.", type: "Identifier" }
            ]
        },

        // <With> statement
        {
            code: "<With value={47}>" + "{wrongElement}" + "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code: "<With value={47}>" + "<Blah key={wrongElement}></Blah>" + "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                "<With value={47}>" +
                "<WrapperElement>" +
                "{wrongElement}" +
                "</WrapperElement>" +
                "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                "<With value={47}>" +
                "<WrapperElement>" +
                "<Blah key={wrongElement}></Blah>" +
                "</WrapperElement>" +
                "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'wrongElement' is not defined.", type: "Identifier" }]
        },
        {
            code:
                "<With value={47}>" +
                "{anotherValue}" +
                "<With anotherValue={this.props.elements}>" +
                "{value}" +
                "</With>" +
                "</With>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{ message: "'anotherValue' is not defined.", type: "Identifier" }]
        },

        // standard no-undef rules follow:
        { code: "a = 1;", errors: [{ message: "'a' is not defined.", type: "Identifier" }] },
        {
            code: "if (typeof anUndefinedVar === 'string') {}",
            options: [{ typeof: true }],
            errors: [{ message: "'anUndefinedVar' is not defined.", type: "Identifier" }]
        },
        { code: "var a = b;", errors: [{ message: "'b' is not defined.", type: "Identifier" }] },
        {
            code: "function f() { b; }",
            errors: [{ message: "'b' is not defined.", type: "Identifier" }]
        },
        { code: "window;", errors: [{ message: "'window' is not defined.", type: "Identifier" }] },
        {
            code: 'require("a");',
            errors: [{ message: "'require' is not defined.", type: "Identifier" }]
        },
        {
            code: "var React; React.render(<img attr={a} />);",
            errors: [{ message: "'a' is not defined." }],
            parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
        },
        {
            code: "var React, App; React.render(<App attr={a} />);",
            errors: [{ message: "'a' is not defined." }],
            parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
        },
        {
            code: "[a] = [0];",
            parserOptions: { ecmaVersion: 6 },
            errors: [{ message: "'a' is not defined." }]
        },
        {
            code: "({a} = {});",
            parserOptions: { ecmaVersion: 6 },
            errors: [{ message: "'a' is not defined." }]
        },
        {
            code: "({b: a} = {});",
            parserOptions: { ecmaVersion: 6 },
            errors: [{ message: "'a' is not defined." }]
        },
        {
            code: "[obj.a, obj.b] = [0, 1];",
            parserOptions: { ecmaVersion: 6 },
            errors: [{ message: "'obj' is not defined." }, { message: "'obj' is not defined." }]
        },

        // Experimental
        {
            code: "const c = 0; const a = {...b, c};",
            parserOptions: {
                ecmaVersion: 2018
            },
            errors: [{ message: "'b' is not defined." }]
        }
    ]
});
