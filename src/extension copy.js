const vscode = require("vscode");
const prettier = require("prettier-eslint");
const compiler = require("vue-template-compiler");
const sortCssBlock = require("./functions/sort-css-block");

/**
 * 创建文档range对象
 */
function initDocumentRange(document) {
  const lastLine = document.lineCount - 1;
  const start = new vscode.Position(0, 0);
  const end = new vscode.Position(
    lastLine,
    document.lineAt(lastLine).text.length
  );

  return new vscode.Range(start, end);
}

function formatter(document) {
  const languageId = document.languageId;
  let content = document.getText();
  const range = initDocumentRange(document);
  try {
    content = sortCssBlock(content);
  } catch (error) {
    throw error;
  }
  content = prettier({ text: content, filePath: document.fileName });
  return [new vscode.TextEdit(range, content)];
}
const formattingProvider = {
  provideDocumentFormattingEdits(document) {
    return formatter(document);
  },
};
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
  const range = initDocumentRange(document);
  const sfc = compiler.parseComponent(document.getText());
  let vueFile = "";
  try {
    vueFile += createVueBlock(sfc.template, "template");
    vueFile += createVueBlock(sfc.script, "script");
    sfc.styles.map((ele) => {
      ele.content = sortCssBlock(ele.content.normalize());
      vueFile += createVueBlock(ele, "style");
    });
  } catch (error) {
    console.log(error);
  }
  vueFile = prettier({ text: vueFile, filePath: document.fileName });
  return [new vscode.TextEdit(range, vueFile)];
}
const vueFormattingProvider = {
  provideDocumentFormattingEdits(document) {
    return vueFormatter(document);
  },
};

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "less",
      formattingProvider
    )
  );
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "vue",
      vueFormattingProvider
    )
  );
}
// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
