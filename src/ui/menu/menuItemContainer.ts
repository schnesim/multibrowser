import { ComboBox } from '../elements/combobox';

export class MenuItemContainer {

    private _domNode: HTMLDivElement;
    private _comboBox: ComboBox;
    private _comboContainer: HTMLDivElement;
    private _profileNameContainer: HTMLDivElement;
    private _profileName: HTMLInputElement;
    private _profilesGroup1: HTMLDivElement;
    private _profilesGroup2: HTMLDivElement;
    private _btnAdd: HTMLButtonElement;
    private _btnRemove: HTMLButtonElement;

    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.id = 'MenuItemContainer';
        this._domNode.classList.add('menu-items-container');

        this._profilesGroup1 = document.createElement('div');
        this._profilesGroup1.id = 'profilesGroup';
        this._profilesGroup1.classList.add('profile-group');
        this._domNode.appendChild(this._profilesGroup1);

        this._profilesGroup2 = document.createElement('div');
        this._profilesGroup2.id = 'profilesGroup';
        this._profilesGroup2.classList.add('profile-group');
        this._domNode.appendChild(this._profilesGroup2);

        this._btnAdd = document.createElement('button');
        this._btnAdd.innerText = '+';
        this._btnAdd.className = 'btn-add';
        this._btnRemove = document.createElement('button');
        this._btnRemove.innerText = '-';
        this._btnRemove.className = 'btn-add';

        this._comboBox = new ComboBox();
        this._comboContainer = document.createElement('div');
        this._comboContainer.appendChild(this._comboBox.getDomNode());
        this._comboContainer.appendChild(this._btnAdd);
        this._comboContainer.appendChild(this._btnRemove);
        this._profilesGroup1.appendChild(this._comboContainer);

        this._profileName = document.createElement('input');
        this._profileNameContainer = document.createElement('div');
        this._profileNameContainer.appendChild(this._profileName);
        
        this._profilesGroup2.appendChild(this._profileName);
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