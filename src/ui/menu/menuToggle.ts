export class MenuToggle {
    private _domNode: HTMLElement;
    private _arrow: HTMLElement;
    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.id = 'menuToggle';
        this._domNode.classList.add('arrow-container');
        this._arrow = document.createElement('div');
        this._arrow.classList.add('arrow-left');
        this._arrow.classList.add('menu-toggle');
        this._domNode.appendChild(this._arrow);
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }

    public toggle() {
        this._arrow.classList.toggle('arrow-left')
        this._arrow.classList.toggle('arrow-down')
        this._arrow.classList.toggle('arrow-down2')
    }
}