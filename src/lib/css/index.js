var Parser = require("./parser");
var Compiler = require("./stringify");
class CSS {
  constructor(plugin = {}) {
    this.plugin = plugin;
  }
  parse(css) {
    let parser = new Parser(css, this.plugin);
    return parser.stylesheet();
  }
  stringify(node) {
    var complier = new Compiler();
    return complier.compile(node);
  }
}
module.exports = CSS;
