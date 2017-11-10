import { ComboBox } from '../elements/combobox';
import { Store } from '../../store';
import { Profile } from './profile';

export class MenuContainer {

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
    private _profiles: Array<Profile>;
    private _store: Store;

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
        this._urls.value = 'some text\nmoretext'
        this._rowUrls.appendChild(this._urls);

        this._btnAdd = document.createElement('button');
        this._btnAdd.innerText = '+';
        this._btnAdd.className = 'btn-add';
        this._btnAdd.addEventListener('click', this.addNewProfile.bind(this));
        this._btnRemove = document.createElement('button');
        this._btnRemove.innerText = '-';
        this._btnRemove.className = 'btn-add';

        this._comboBox = new ComboBox();
        this._comboBox.callback = this.dropdownCallback.bind(this);
        this._comboContainer = document.createElement('div');
        this._comboContainer.appendChild(this._comboBox.getDomNode());
        this._comboContainer.appendChild(this._btnAdd);
        this._comboContainer.appendChild(this._btnRemove);
        this._rowComboBox.appendChild(this._comboContainer);

        this._profileName = document.createElement('input');
        this._profileNameContainer = document.createElement('div');
        this._profileNameContainer.appendChild(this._profileName);

        this._rowProfileName.appendChild(this._profileName);

        this._store = new Store({ configName: 'profiles', defaults: {} });
        this._profiles = [];
        this.readProfiles();
    }

    private readProfiles() {
        const data = this._store.getAll();
        for (let profile in data) {
            this._comboBox.addEntry(profile);
            this._profiles.push(new Profile(profile, data[profile].urls));
        }
    }

    private addNewProfile(e: MouseEvent) {
        const urls = this._urls.value.split(',');
        console.log(urls);
        const profile = new Profile(this._profileName.value, urls);
        this._profiles.push(profile);
        this._store.set(profile.name, profile);
        this._comboBox.addEntry(profile.name);
    }

    private dropdownCallback(index: number) {
        this._profileName.value = this._profiles[index].name;
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