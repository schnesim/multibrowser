import { ComboBox } from '../elements/combobox';

export class MenuItemContainer {

    private _domNode: HTMLElement;
    private _comboBox: ComboBox;

    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.id = 'MenuItemContainer';
        this._domNode.classList.add('menu-items-container');
        this._domNode.classList.add('menu-items-container-show');
        // this._domNode.style.visibility = 'hidden';

        this._comboBox = new ComboBox();
        this._domNode.appendChild(this._comboBox.getDomNode());
    }

    public show() {
        this._domNode.style.visibility = 'visible';
    }

    public hide() {
        this._domNode.style.visibility = 'hidden';
    }

    public toggle() {
        this._domNode.classList.toggle('menu-items-container-show');
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }

}