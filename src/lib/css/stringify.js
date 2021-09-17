class Compiler {
  constructor() {}
  visit(node) {
    return this[node.type](node);
  }
  mapVisit(nodes) {
    var buf = "";

    for (var i = 0, length = nodes.length; i < length; i++) {
      buf += this.visit(nodes[i]);
    }
    return buf;
  }
  compile(node) {
    return node.stylesheet.rules.map(this.visit, this).join("");
  }
  comment(node) {
    return "/*" + node.comment + "*/";
  }
  rule(node) {
    var decls = node.declarations;
    if (!decls.length) return "";
    return node.selectors.join(",") + "{" + this.mapVisit(decls) + "}";
  }
  declaration(node) {
    return node.prototype + ":" + node.value + ";";
  }
  import(node) {
    return "@import " + node.import + ";";
  }
  charset(node) {
    return "@charset " + node.charset + ";";
  }
  namespace(node) {
    return "@namespace " + node.namespace + ";";
  }
  extend(node) {
    return "@extend " + node.extend + ";";
  }
  include(node) {
    return "@include " + node.include + ";";
  }
  "custom-media"(node) {
    return "@custom-media " + node.name + " " + node.media + ";";
  }
  media(node) {
    return "@media " + node.media + "{" + this.mapVisit(node.rules) + "}";
  }
  mixin(node) {
    return "@mixin " + node.mixin + "{" + this.mapVisit(node.rules) + "}";
  }
  supports(node) {
    return "@supports " + node.supports + "{" + this.mapVisit(node.rules) + "}";
  }
  document(node) {
    var doc = "@" + (node.vendor || "") + "document " + node.document;
    return doc + "{" + this.mapVisit(node.rules) + "}";
  }
  keyframes(node) {
    return (
      "@" +
      (node.vendor || "") +
      "keyframes " +
      node.name +
      "{" +
      this.mapVisit(node.keyframes) +
      "}"
    );
  }
  keyframe(node) {
    var decls = node.declarations;

    return node.values.join(",") + "{" + this.mapVisit(decls) + "}";
  }
  page(node) {
    var sel = node.selectors.length ? node.selectors.join(", ") : "";
    return "@page" + sel + "{" + this.mapVisit(node.declarations) + "}";
  }
  "font-face"(node) {
    return "@font-face" + "{" + this.mapVisit(node.declarations) + "}";
  }
  host(node) {
    return "@host" + "{" + this.mapVisit(node.rules) + "}";
  }
}
module.exports = Compiler;
