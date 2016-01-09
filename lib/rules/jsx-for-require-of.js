/**
 * @fileoverview For tag must have of attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

var utils = require("../utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    function isForComponent(node) {
        return utils.isTag("For", node);
    }

    function hasIndexAttr(decl) {
        if (decl.type === 'JSXSpreadAttribute') {
            return false;
        }
        return (decl.name.name === 'of');
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            var attributes = node.attributes;

            if (!isForComponent(node) || attributes.some(hasIndexAttr)) {
                return;
            }

            context.report(node, "'For' tag must have a 'of' attribute.");
        }
    };
};

module.exports.schema = [];
