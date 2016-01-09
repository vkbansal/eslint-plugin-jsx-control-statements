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
    function isForComponent(node) {
        return utils.isTag("For", node);
    }

    function indexAttr(decl) {
        if (decl.type === 'JSXSpreadAttribute') {
            return false;
        }
        return (decl.name.name === 'index');
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function(node) {
            var attributes = node.attributes,
                attr = _.find(attributes, indexAttr);

            if (!isForComponent(node)) return;

            if (attr) {
                let scope = context.getScope();
                scope.through = scope.through.filter((v) => attr.value.value !== v.identifier.name);
                context.markVariableAsUsed(attr.value.value);
                return;
            }

            context.report(node, "'For' tag must have a 'index' attribute.");
        }
    };
};

module.exports.schema = [];
