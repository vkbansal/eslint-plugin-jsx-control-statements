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

function isAttr(decl, name) {
    if (decl.type === 'JSXSpreadAttribute') {
        return false;
    }
    return (decl.name.name === name);
}

function isTag(tag, node) {
    return node.name && node.name.type === "JSXIdentifier" && node.name.name === tag;
}

function isForComponent(node) {
    return isTag("For", node);
}

function isIfComponent(node) {
    return isTag("If", node);
}

exports.hasSingleChild = hasSingleChild;
exports.filterChildren = filterChildren;
exports.isTag = isTag;
exports.isAttr = isAttr;
exports.isForComponent = isForComponent;
exports.isIfComponent = isIfComponent;
