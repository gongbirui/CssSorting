const vscode = require("vscode");
const prettier = require("prettier-eslint");
const outputChannel = require("./lib/outputChannel");
const css = require("./lib/css");
class CssFormatter {
  formatter(document) {
    const languageId = document.languageId;
    let content = document.getText();
    const range = this.documentRange(document);
    let ast = css.parse(content);
    content = prettier({ text: content, filePath: document.fileName });
    return [new vscode.TextEdit(range, content)];
  }
  documentRange(document) {
    const lastLine = document.lineCount - 1;
    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(
      lastLine,
      document.lineAt(lastLine).text.length
    );
    return new vscode.Range(start, end);
  }
  provideDocumentFormattingEdits(document) {
    return this.formatter(document);
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "less",
      new CssFormatter()
    )
  );
}
// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
