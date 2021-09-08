const prettier = require("prettier-eslint");
const vscode = require("vscode");
const sortCssBlock = require("./functions/sort-css-block");

function formatter(document) {
  const languageId = document.languageId;
  let content = document.getText();
  const range = initDocumentRange(document);
  const result = [];
  try {
    content = sortCssBlock(content);
  } catch (error) {
    throw error;
  }
  content = prettier({ text: content, filePath: document.fileName });
  result.push(new vscode.TextEdit(range, content));
  return result;
}
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
const formattingProvider = {
  provideDocumentFormattingEdits(document) {
    return formatter(document);
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
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
