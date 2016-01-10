/**
 * @fileoverview If tag must contain single child
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

var utils = require("../utils"),
    _ = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    function isElseComponent(child) {
        return child.type === 'JSXElement' && child.openingElement.name.name === 'Else';
    }

    function isNotElseComponent(child) {
        return !isElseComponent(child);
    }

    function hasElseCondition(node) {
        var children = node.parent.children;

        return children.length
            && children.length > 1
            && children.some(isElseComponent);
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            if (!utils.isIfComponent(node)) return node;

            var children = utils.filterChildren(node.parent.children),
                ifBlock = _.takeWhile(children, isNotElseComponent),
                elseBlock = _.takeRightWhile(children, isNotElseComponent);

            if (ifBlock.length !== 1) {
                context.report(node, "'If' tag must have single child.");
            }


            if (hasElseCondition(node) && elseBlock.length !== 1) {
                context.report(node, "There must be single child between 'Else' and ending 'If'.");
            }
        }
    };
};

module.exports.schema = [];
