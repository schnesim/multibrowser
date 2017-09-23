import { ComboBox } from '../elements/combobox';

export class MenuItemContainer {

    private _domNode: HTMLDivElement;
    private _comboBox: ComboBox;
    private _comboContainer: HTMLDivElement;
    private _profileNameContainer: HTMLDivElement;
    private _profileName: HTMLInputElement;
    private _rowComboBox: HTMLDivElement;
    private _rowProfileName: HTMLDivElement;
    private _rowUrls: HTMLDivElement;
    private _urls: HTMLTextAreaElement;
    private _btnAdd: HTMLButtonElement;
    private _btnRemove: HTMLButtonElement;

    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.id = 'MenuItemContainer';
        this._domNode.classList.add('menu-items-container');

        this._rowComboBox = document.createElement('div');
        this._rowComboBox.id = 'profilesGroup';
        this._rowComboBox.classList.add('profile-group');
        this._domNode.appendChild(this._rowComboBox);

        this._rowProfileName = document.createElement('div');
        this._rowProfileName.id = 'profilesGroup';
        this._rowProfileName.classList.add('profile-group');
        this._domNode.appendChild(this._rowProfileName);

        this._rowUrls = document.createElement('div');
        this._rowUrls.classList.add('profile-group');
        this._rowUrls.classList.add('profile-group-urls');
        this._domNode.appendChild(this._rowUrls);

        this._urls = document.createElement('textarea');
        this._urls.classList.add('urls');
        this._urls.value = 'some text\r\nmoretext'
        this._rowUrls.appendChild(this._urls);

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
        this._rowComboBox.appendChild(this._comboContainer);

        this._profileName = document.createElement('input');
        this._profileNameContainer = document.createElement('div');
        this._profileNameContainer.appendChild(this._profileName);
        
        this._rowProfileName.appendChild(this._profileName);
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