import Vue from 'vue';
export interface ISlTreeNodeModel<TDataType> {
    title: string;
    isLeaf?: boolean;
    children?: ISlTreeNodeModel<TDataType>[];
    isExpanded?: boolean;
    isSelected?: boolean;
    data?: TDataType;
}
export interface ISlTreeNode<TDataType> extends ISlTreeNodeModel<TDataType> {
    isFirstChild: boolean;
    isLastChild: boolean;
    ind: number;
    path: number[];
    pathStr: string;
    children: ISlTreeNode<TDataType>[];
}
export interface ICursorPosition<TDataType> {
    node: ISlTreeNode<TDataType>;
    placement: 'before' | 'inside' | 'after';
}
export interface IVueData<TDataType> {
    rootCursorPosition: ICursorPosition<TDataType>;
    rootDraggingNode: ISlTreeNode<TDataType>;
}
export default class SlVueTree<TDataType> extends Vue {
    value: ISlTreeNodeModel<TDataType>[];
    edgeSize: number;
    allowMultiselect: boolean;
    showBranches: boolean;
    level: number;
    parentInd: number;
    private rootCursorPosition;
    private rootDraggingNode;
    cursorPosition: ICursorPosition<TDataType>;
    draggingNode: ISlTreeNode<TDataType>;
    readonly nodes: ISlTreeNode<TDataType>[];
    protected emitInput(newValue: ISlTreeNodeModel<TDataType>[]): void;
    protected emitSelect(selectedNode: ISlTreeNode<TDataType>, event: MouseEvent): void;
    protected emitDrop(targetNode: ISlTreeNode<TDataType>, position: ICursorPosition<TDataType>, event: DragEvent): void;
    protected emitToggle(toggledNode: ISlTreeNode<TDataType>, event: DragEvent): void;
    getNodes(nodeModels: ISlTreeNodeModel<TDataType>[], parentPath?: number[]): ISlTreeNode<TDataType>[];
    getNode(path: number[], nodeModel?: ISlTreeNodeModel<TDataType>, siblings?: ISlTreeNodeModel<TDataType>[]): ISlTreeNode<TDataType>;
    readonly gaps: number[];
    readonly isRoot: boolean;
    onNodeClickHandler(event: MouseEvent, clickedNode: ISlTreeNode<TDataType>): void;
    onNodeDragoverHandler(event: DragEvent, destNode: ISlTreeNode<TDataType>): void;
    onNodeDropHandler(event: DragEvent, targetNode: ISlTreeNode<TDataType>): void;
    onNodeDragstartHandler(event: DragEvent, node: ISlTreeNode<TDataType>): void;
    onNodeDragendHandler(): void;
    onToggleHandler(event: DragEvent, node: ISlTreeNode<TDataType>): void;
    getParent(): SlVueTree<TDataType>;
    getNodeSiblings(nodes: ISlTreeNodeModel<TDataType>[], path: number[]): ISlTreeNodeModel<TDataType>[];
    updateNode(nodeToUpdate: ISlTreeNode<TDataType>, patch: Partial<ISlTreeNodeModel<TDataType>>): void;
    getSelected(): ISlTreeNode<TDataType>[];
    traverse(cb: (node: ISlTreeNode<TDataType>, nodeModel: ISlTreeNodeModel<TDataType>, siblings: ISlTreeNodeModel<TDataType>[]) => boolean | void, nodeModels?: ISlTreeNodeModel<TDataType>[], parentPath?: number[]): ISlTreeNode<TDataType>[] | boolean;
    private checkNodeIsParent(sourceNode, destNode);
    private copy<T>(entity);
}