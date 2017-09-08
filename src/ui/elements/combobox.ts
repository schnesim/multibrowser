export class ComboBox {

    private _domNode: HTMLElement;
    private _dropBtn: HTMLElement;
    private _myDropDown: HTMLElement;
    private _entries: Array<HTMLElement>;

    constructor() {
        this._entries = [];
        
        this._domNode = document.createElement('div');
        this._domNode.classList.add('dropdown');

        this._myDropDown = document.createElement('div');
        this._myDropDown.classList.add('dropdown-content');
        this._myDropDown.id = 'myDropdown';

        this._dropBtn = document.createElement('button');
        this._dropBtn.classList.add('dropbtn');
        this._dropBtn.innerText = 'Dropdown';
        this._domNode.addEventListener('click', this.myFunction);


        this._domNode.appendChild(this._dropBtn);
        this._domNode.appendChild(this._myDropDown);

        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        this.addEntry('one')
        this.addEntry('two')
        this.addEntry('three')
    }

    public addEntry(entry: string) {
        const a = document.createElement('a');
        a.textContent = entry;
        this._entries.push(a);
        this._myDropDown.appendChild(a);
    }

    public myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }
}