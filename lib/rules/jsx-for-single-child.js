/**
 * @fileoverview For tag must contain single child
 * @author Vivek Kumar Bansal
 * @copyright 2016 Vivek Kumar Bansal. All rights reserved.
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

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            if (!isForComponent(node)) return node;

            if (!utils.hasSingleChild(node)) {
                context.report(node, "'For' tag must have single child.");
            }
        }
    };
};

module.exports.schema = [];
