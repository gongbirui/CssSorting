const compiler = require("vue-template-compiler");
const outputChannel = require("../outputChannel");
const cssSorting = require("../cssSorting");

// 拼接vue代码块
function createVueBlock(sfc, tag) {
  let str = `<${tag}`;
  Object.keys(sfc.attrs).forEach(function (key) {
    if (Object.prototype.toString.call(sfc.attrs[key]) == "[object String]") {
      str += ` ${key}="${sfc.attrs[key]}"`;
    }
    if (Object.prototype.toString.call(sfc.attrs[key]) == "[object Boolean]") {
      str += ` ${key}`;
    }
  });
  str += ">";
  str += sfc.content;
  str += `</${tag}>\r\n`;
  str += `\r\n`;
  return str;
}
function vueFormatter(document) {
  const sfc = compiler.parseComponent(document.getText());
  let vueStr = "";
  try {
    let err;
    vueStr += createVueBlock(sfc.template, "template");
    vueStr += createVueBlock(sfc.script, "script");
    sfc.styles.map((ele) => {
      if (ele.attrs?.lang == "less") {
        err = new Error(
          "暂未完全支持支持less! 如果没使用less的高级特性，可将尝试将style的lang修改为scss"
        );
      } else {
        ele.content = cssSorting(ele.content.normalize());
      }
      vueStr += createVueBlock(ele, "style");
    });
    if (err) throw err;
  } catch (error) {
    outputChannel.err(error);
  }
  return vueStr;
}
module.exports = vueFormatter;
