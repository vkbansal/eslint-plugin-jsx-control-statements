/**
 * @fileoverview For tag must have index attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015-present Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

var utils = require("../utils"),
    _ = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    function indexAttr(decl) {
        return utils.isAttr(decl, 'index');
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            var attributes = node.attributes,
                attr = _.find(attributes, indexAttr);

            if (!utils.isForComponent(node)) return;

            if (attr) {
                let scope = context.getScope();
                scope.through = scope.through.filter(function(v) {
                    return attr.value.value !== v.identifier.name;
                });
                return;
            }

            context.report(node, "'For' tag must have a 'index' attribute.");
        }
    };
};

module.exports.schema = [];
