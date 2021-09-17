var Parser = require("./parser");
var Compiler = require("./stringify");

module.exports = {
  parse(css) {
    let parser = new Parser(css);
    return parser.stylesheet();
  },
  stringify(node) {
    var complier = new Compiler();
    return complier.compile(node);
  },
};
