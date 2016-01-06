/**
 * @fileoverview If tag must contain single child
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    function isIfComponent(node) {
        return node.name && node.name.type === "JSXIdentifier" && node.name.name === "If";
    }

    function isElseComponent(node) {
        var n = node.openingElement || node;

        return n.name && n.name.type === "JSXIdentifier" && n.name.name === "Else" && n.selfClosing;
    }

    function filterChildren(children) {
        return children.filter(function(c) {
            if (c.type === "JSXElement") return true;

            if (c.type === "Literal") return c.value.trim() !== "";

            return false;
        });
    }

    function hasSingleChild(node) {
        var children = filterChildren(node.parent.children);
        return children.length && children.length === 1;
    }

    function hasElseCondition(node) {
        var children = node.parent.children;

        return children.length
            && children.length > 1
            && children.some(isElseComponent);
    }

    function hasSingleChildrenBetween(node) {
        var children = filterChildren(node.parent.children);

        return children.length
            && children.length === 3
            && isElseComponent(children[1]);
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            if (!isIfComponent(node)) return node;


            if (!hasElseCondition(node) && !hasSingleChild(node)) {
                context.report(node, "'If' tag must have single child.");
            } else if (hasElseCondition(node) && !hasSingleChildrenBetween(node)) {
                context.report(node, "There must be single child between 'If' and 'Else'.");
            }
        }
    };
};

module.exports.schema = [];
