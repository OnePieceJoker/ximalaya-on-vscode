// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DepNodeProvider } from './nodeDependencies';
import { Uri, workspace } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let workSpaceFloder: any = vscode.workspace.getWorkspaceFolder(vscode.Uri.parse("scheme:with/path"));
	let rootPath = workSpaceFloder.name;
	const nodeDependenciesProvider = new DepNodeProvider(rootPath);
	vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
