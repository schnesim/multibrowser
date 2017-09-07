export class WebviewContainer {

    private _domNode: HTMLElement;
    
    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.classList.add('container');
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }
}