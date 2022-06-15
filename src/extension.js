const vscode = require("vscode");
const prettier = require("prettier-eslint");
const cssSorting = require("./lib/cssSorting");
const vueSortingProvider = require("./lib/vueSortingProvider");
/**
 * 普通css/scss排序
 * @param {vscode.TextDocument} document
 * @returns {String} 结果
 */
function normalCssSortingProvider(document) {
  return cssSorting(document.getText());
}
class CssFormatter {
  constructor(middleWare) {
    this.middleWare = middleWare;
  }
  /**
   * 格式化内容
   * @param {vscode.TextDocument} document
   * @returns {vscode.ProviderResult<vscode.TextEdit[]>} 结果
   */
  formatter(document) {
    let content = document.getText();
    const range = this.documentRange(document);
    try {
      content = prettier({ text: content, filePath: document.fileName });
    } catch (error) {
      vscode.window.showInformationMessage(error);
    }
    if (this.middleWare) {
      try {
        content = this.middleWare(document);
      } catch (error) {
        vscode.window.showInformationMessage(error);
      }
    }
    try {
      content = prettier({ text: content, filePath: document.fileName });
    } catch (error) {
      vscode.window.showInformationMessage(error);
    }
    return [new vscode.TextEdit(range, content)];
  }
  /**
   * 文档范围
   * @param {vscode.TextDocument} document
   * @returns {vscode.Range} vscode.Range
   */
  documentRange(document) {
    const lastLine = document.lineCount - 1;
    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(
      lastLine,
      document.lineAt(lastLine).text.length
    );
    return new vscode.Range(start, end);
  }
  /**
   * 格式华内容
   * @param {vscode.TextDocument} document 文档
   * @returns {vscode.ProviderResult<vscode.TextEdit[]>} 结果
   */
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
      "scss",
      new CssFormatter(normalCssSortingProvider)
    )
  );
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "css",
      new CssFormatter(normalCssSortingProvider)
    )
  );
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "vue",
      new CssFormatter(vueSortingProvider)
    )
  );
}
// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
