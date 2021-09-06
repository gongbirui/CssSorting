const vscode = require("vscode");

function formatter(document) {
  return [new vscode.TextEdit(initDocumentRange(document), document.getText())];
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
