"use strict";

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

function isTag(tag, node) {
    return node.name && node.name.type === "JSXIdentifier" && node.name.name === tag;
}

exports.hasSingleChild = hasSingleChild;
exports.filterChildren = filterChildren;
exports.isTag = isTag;
