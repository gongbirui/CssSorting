const vscode = require("vscode");
class OutputChannel {
  constructor() {
    this.channel = vscode.window.createOutputChannel("CssAttrSorting");
  }
  now() {
    return new Date().toLocaleTimeString(undefined, { hour12: false });
  }
  log(msg, type) {
    if (msg == "") return;
    this.channel.appendLine(this.now() + "[" + type.toUpperCase() + "]:" + msg);
    this.channel.show(true);
  }
  info(msg = "") {
    this.log(msg, "info");
  }
  success(msg = "") {
    this.log(msg, "success");
  }
  err(msg = "") {
    this.log(msg, "err");
  }
  warn(msg = "") {
    this.log(msg, "warn");
  }
}
module.exports = new OutputChannel();
