/**
 * @fileoverview For tag must have body attribute
 * @author Jack Harding
 */
"use strict";

var utils = require("../utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function (node) {
            var attributes = node.attributes,
                attr = utils.findAttr(attributes, "body");

            if (!utils.isForComponent(node)) return;

            if (attr) {
                var scope = context.getScope();
                scope.through = scope.through.filter(function (v) {
                    return attr.value.value !== v.identifier.name;
                });
                return;
            }

            context.report(node, "'For' tag must have a 'body' attribute.");
        }
    };
};

module.exports.schema = [];
