const fs = require("fs");
const compiler = require("vue-template-compiler");
const sortCssBlock = require("../../src/functions/sort-css-block");

// 读取vue文件
const vueFileContent = fs.readFileSync("./test.vue", "utf8");
const sfc = compiler.parseComponent(vueFileContent);
function createBlock(sfc, tag) {
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

let vueFile = "";
vueFile += createBlock(sfc.template, "template");
vueFile += createBlock(sfc.script, "script");

sfc.styles.map((ele) => {
  ele.content = sortCssBlock(ele.content.normalize());
  vueFile += createBlock(ele, "style");
});

console.log(vueFile);

