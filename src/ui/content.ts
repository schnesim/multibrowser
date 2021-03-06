import { Menu } from './menu/menu';
import { WebviewContainer } from './WebviewContainer';

export class Content {

    private _domNode: HTMLElement;
    private _menuElement: Menu;
    private _container: WebviewContainer;

    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.classList.add('content');
        this._menuElement = new Menu();
        this._container = new WebviewContainer();
        this._domNode.appendChild(this._menuElement.getDomNode());
        this._domNode.appendChild(this._container.getDomNode());
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }
}