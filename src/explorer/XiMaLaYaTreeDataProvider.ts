import * as vscode from "vscode";
import { XiMaLaYaNode } from "./XiMaLaYaNode";

export class XiMaLaYaTreeDataProvider implements vscode.TreeDataProvider<XiMaLaYaNode> {

    public readonly onDidChangeTreeData?: vscode.Event<void | XiMaLaYaNode | null | undefined> | undefined;

    public getTreeItem(element: XiMaLaYaNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        throw new Error("[getTreeItem] Method not implemented.");
    }
    public getChildren(element?: XiMaLaYaNode | undefined): vscode.ProviderResult<XiMaLaYaNode[]> {
        // TODO 查询数据列表
        throw new Error("[getChildren] Method not implemented.");
    }

}

export const xiMaLaYaTreeDataProvider: XiMaLaYaTreeDataProvider = new XiMaLaYaTreeDataProvider();