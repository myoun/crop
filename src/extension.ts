import * as vscode from 'vscode';
import * as fs from "fs";
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

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
                    }
                ],
            },
        }
        if (vscode.workspace.workspaceFolders !== undefined) {
            let loc = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath,".vscode","settings.json")
            console.log(loc)
            if (!fs.existsSync(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath,".vscode"))) {
                fs.mkdirSync(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath,".vscode"))
            }
            fs.writeFileSync(loc, JSON.stringify(rule))
            vscode.window.showInformationMessage('Hello World from Crop!');
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
