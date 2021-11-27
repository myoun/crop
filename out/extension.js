"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
function activate(context) {
    console.log('Congratulations, your extension "crop" is now active!');
    let disposable = vscode.commands.registerCommand('crop.initializeProject', () => {
        let rule = {
            "editor.tokenColorCustomizations": {
                "textMateRules": [
                    {
                        "scope": [
                            "comment.line.double-slash.todo",
                        ],
                        "settings": {
                            "foreground": "#faff40",
                            "fontStyle": "italic"
                        },
                    },
                    {
                        "scope": [
                            "keyword.function.crop",
                        ],
                        "settings": {
                            "foreground": "#C792EA"
                        }
                    },
                    {
                        "scope": [
                            "keyword.asm.crop",
                        ],
                        "settings": {
                            "foreground": "#C792EA"
                        }
                    }
                ],
            },
        };
        if (vscode.workspace.workspaceFolders !== undefined) {
            let loc = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, ".vscode", "settings.json");
            console.log(loc);
            if (!fs.existsSync(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, ".vscode"))) {
                fs.mkdirSync(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, ".vscode"));
            }
            fs.writeFileSync(loc, JSON.stringify(rule));
            vscode.window.showInformationMessage('Hello World from Crop!');
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map