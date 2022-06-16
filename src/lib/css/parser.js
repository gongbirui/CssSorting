var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
class Position {
  constructor(start, css = "") {
    this.start = start;
    this.end = {};
    this.content = css;
  }
}
class Parser {
  constructor(css, plugin = {}) {
    this.css = css;
    this.lineno = 1;
    this.column = 1;
    this.plugin = plugin;
  }
  stylesheet() {
    var ruleList = this.rules();
    return {
      type: "stylesheet",
      stylesheet: {
        rules: ruleList,
      },
    };
  }
  // 获取规则
  rules() {
    var node;
    var rules = [];
    this.whitespace();
    this.comments(rules);
    while (
      this.css.length &&
      this.css.charAt(0) != "}" &&
      (node = this.atrule() || this.declaration() || this.rule())
    ) {
      if (node != false) {
        rules.push(node);
        this.comments(rules);
      }
    }
    return rules.length <= 0 ? false : rules;
  }
  // 祛除空白格子
  whitespace() {
    this.match(/^\s*/);
  }
  // 匹配正则
  match(re) {
    var m = re.exec(this.css);
    if (!m) return;
    var str = m[0];
    this.updatePosition(str);
    this.css = this.css.slice(str.length);
    return m;
  }
  // 更新位置
  updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) this.lineno += lines.length;
    var i = str.lastIndexOf("\n");
    this.column = ~i ? str.length - i : this.column + str.length;
  }
  // 获取评论
  comments(rules) {
    var c;
    rules = rules || [];
    while ((c = this.comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }
  // 评论
  comment() {
    var pos = this.position();
    if ("/" != this.css.charAt(0) || "*" != this.css.charAt(1)) return;

    var i = 2;
    while (
      "" != this.css.charAt(i) &&
      ("*" != this.css.charAt(i) || "/" != this.css.charAt(i + 1))
    )
      ++i;
    i += 2;
    if ("" === this.css.charAt(i - 1)) {
      return this.error("End of comment missing");
    }

    var str = this.css.slice(2, i - 2);
    this.column += 2;
    this.updatePosition(str);
    this.css = this.css.slice(i);
    this.column += 2;

    return pos({
      type: "comment",
      comment: str,
    });
  }
  // 追加位置
  position() {
    var start = { line: this.lineno, column: this.column };
    return (node) => {
      node.position = new Position(start);
      this.whitespace();
      return node;
    };
  }
  // 报错
  error(msg) {
    var errMsg =
      "before line:" + this.lineno + ",column:" + this.column + "  " + msg;
    var err = new Error(errMsg);
    this.plugin?.console(errMsg);
    throw err;
  }
  atrule() {
    if (this.css[0] != "@") return;
    return (
      this.atkeyframes() ||
      this.atmedia() ||
      this.atcustommedia() ||
      this.atsupports() ||
      this.atimport() ||
      this.atcharset() ||
      this.atnamespace() ||
      this.atdocument() ||
      this.atpage() ||
      this.athost() ||
      this.atfontface() ||
      this.atextend() ||
      this.atinclude() ||
      this.atmixin() ||
      undefined
    );
  }
  // 解析keyframes
  atkeyframes() {
    var pos = this.position();
    var m = this.match(/^@([-\w]+)?keyframes\s*/);

    if (!m) return;
    var vendor = m[1];

    var m2 = this.match(/^([-\w]+)\s*/);
    if (!m2) return this.error("@keyframes missing name");
    var name = m2[1];

    if (!this.open()) return this.error("@keyframes missing '{'");

    var frame;
    var frames = this.comments();
    while ((frame = this.keyframe())) {
      frames.push(frame);
      frames = frames.concat(this.comments());
    }

    if (!this.close()) return this.error("@keyframes missing '}'");

    return pos({
      type: "keyframes",
      name: name,
      vendor: vendor,
      keyframes: frames,
    });
  }
  // 解析keyframes中的块
  keyframe() {
    var m;
    var vals = [];
    var pos = this.position();

    while ((m = this.match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
      vals.push(m[1]);
      this.match(/^,\s*/);
    }

    if (!vals.length) return;

    return pos({
      type: "keyframe",
      values: vals,
      declarations: this.declarations(),
    });
  }
  // 媒体查询
  atmedia() {
    var pos = this.position();
    var m = this.match(/^@media *([^{]+)/);

    if (!m) return;
    var media = this.trim(m[1]).replace(commentre, "");

    if (!this.open()) return this.error("@media missing '{'");

    var style = this.comments().concat(this.rules());

    if (!this.close()) return this.error("@media missing '}'");

    return pos({
      type: "media",
      media: media,
      rules: style,
    });
  }
  // 自定义媒体查询
  atcustommedia() {
    var pos = this.position();
    var m = this.match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return;

    return pos({
      type: "custom-media",
      name: this.trim(m[1]),
      media: this.trim(m[2]),
    });
  }
  // 特征查询
  atsupports() {
    var pos = this.position();
    var m = this.match(/^@supports *([^{]+)/);

    if (!m) return;
    var supports = this.trim(m[1]);

    if (!this.open()) return this.error("@supports missing '{'");

    var style = this.comments().concat(this.rules());

    if (!this.close()) return this.error("@supports missing '}'");

    return pos({
      type: "supports",
      supports: supports,
      rules: style,
    });
  }
  // 媒体查询
  atmixin() {
    var pos = this.position();
    var m = this.match(/^@mixin *([^{]+)/);

    if (!m) return;
    var mixin = this.trim(m[1]).replace(commentre, "");

    if (!this.open()) return this.error("@mixin missing '{'");

    var style = this.comments().concat(this.rules());

    if (!this.close()) return this.error("@mixin missing '}'");

    return pos({
      type: "mixin",
      mixin: mixin,
      rules: style,
    });
  }
  atimport() {
    return this._compileAtrule("import");
  }
  atcharset() {
    return this._compileAtrule("charset");
  }
  atnamespace() {
    return this._compileAtrule("namespace");
  }
  atextend() {
    return this._compileAtrule("extend");
  }
  atinclude() {
    return this._compileAtrule("include");
  }
  _compileAtrule(name) {
    var pos = this.position();
    var re = new RegExp("^@" + name + "\\s*([^;]+);");
    var m = this.match(re);
    if (!m) return;

    var ret = { type: name };
    ret[name] = m[1].trim();
    return pos(ret);
  }
  atdocument() {
    var pos = this.position();
    var m = this.match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;

    var vendor = this.trim(m[1]);
    var doc = this.trim(m[2]);

    if (!this.open()) return this.error("@document missing '{'");

    var style = this.comments().concat(this.rules());

    if (!this.close()) return this.error("@document missing '{'");

    return pos({
      type: "document",
      document: doc,
      vendor: vendor,
      rules: style,
    });
  }
  // 打印设置
  atpage() {
    var pos = this.position();
    var m = this.match(/^@page */);
    if (!m) return;

    var sel = this.selector() || [];

    if (!this.open()) return this.error("@page missing '{'");
    var decls = this.comments();

    // declarations
    var decl;
    while ((decl = this.declaration())) {
      decls.push(decl);
      decls = decls.concat(this.comments());
    }

    if (!this.close()) return this.error("@page missing '}'");

    return pos({
      type: "page",
      selectors: sel,
      declarations: decls,
    });
  }
  athost() {
    var pos = this.position();
    var m = this.match(/^@host\s*/);

    if (!m) return;

    if (!this.open()) return this.error("@host missing '{'");

    var style = this.comments().concat(this.rules());

    if (!this.close()) return this.error("@host missing '}'");

    return pos({
      type: "host",
      rules: style,
    });
  }
  atfontface() {
    var pos = this.position();
    var m = this.match(/^@font-face\s*/);
    if (!m) return;

    if (!this.open()) return this.error("@font-face missing '{'");
    var decls = this.comments();

    // declarations
    var decl;
    while ((decl = this.declaration())) {
      decls.push(decl);
      decls = decls.concat(this.comments());
    }

    if (!this.close()) return this.error("@font-face missing '}'");

    return pos({
      type: "font-face",
      declarations: decls,
    });
  }
  // 规则解析
  rule() {
    var pos = this.position();
    var sel = this.selector();

    if (!sel) return this.error("selector missing");
    this.comments();

    return pos({
      type: "rule",
      selectors: sel,
      declarations: this.declarations(),
    });
  }
  // 解析选择器
  selector() {
    var m = this.match(/^([^{]+)/);
    if (!m) return;

    return this.trim(m[0])
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
      .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (m) => {
        return m.replace(/,/g, "\u200C");
      })
      .split(/\s*(?![^(]*\)),\s*/)
      .map((s) => {
        return s.replace(/\u200C/g, ",");
      });
  }
  // 祛除空格
  trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, "") : "";
  }
  // 遍历css属性设置
  declarations() {
    var decls = [];

    if (!this.open()) return this.error("missing '{'");
    this.comments(decls);

    var decl;
    while (
      (decl = this.atrule() || this.declaration() || this.rules() || false)
    ) {
      if (decl == false) continue;
      if (Array.isArray(decl)) {
        decls = decls.concat(decl);
      } else {
        decls.push(decl);
      }
      this.comments(decls);
    }
    if (!this.close()) return this.error("missing '}'");
    return decls;
  }
  // { 开始
  open() {
    return this.match(/^{\s*/);
  }
  // css属性设置
  declaration() {
    var pos = this.position();
    // 检测内层嵌套代码块
    if (this.nextIsDeclarations()) return;
    // 单行注释
    this.match(/^\/\/[^\n]*/);
    this.whitespace();
    // 属性
    var prop = this.match(/^(\*?[-#\/\*\\\w\$\@]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return;
    prop = this.trim(prop[0]);
    // :
    if (!this.match(/^:\s*/)) return this.error("property missing ':'");

    // val
    var val = this.match(
      /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/
    );

    var ret = pos({
      type: "declaration",
      prototype: prop.replace(commentre, ""),
      value: val ? this.trim(val[0]).replace(commentre, "") : "",
    });

    // ;
    this.match(/^[;\s]*/);

    return ret;
  }
  // } 结束
  close() {
    return this.match(/^}/);
  }
  nextIsDeclarations() {
    let m = /^(\*?[-#\/\*\\\w\$\@]+(\[[0-9a-z_-]+\])?)\s*/.exec(this.css);
    if (m) {
      let propNextWord = this.css
        .slice(m[0].length || 0)
        .replace(commentre, "")[0];
      if (!propNextWord || propNextWord == "{") return true;
    }
    return false;
  }
}

module.exports = Parser;
