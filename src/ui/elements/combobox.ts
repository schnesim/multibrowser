export class ComboBox {

    private _domNode: HTMLElement;
    private _dropBtn: HTMLElement;
    private _myDropDown: HTMLElement;
    private _entries: Array<HTMLElement>;
    private _callback: Function;

    constructor() {
        this._entries = [];
        
        this._domNode = document.createElement('div');
        this._domNode.classList.add('dropdown');

        this._myDropDown = document.createElement('div');
        this._myDropDown.classList.add('dropdown-content');
        this._myDropDown.id = 'myDropdown';

        this._dropBtn = document.createElement('button');
        this._dropBtn.classList.add('dropbtn');
        this._dropBtn.innerText = 'Profiles';
        this._domNode.addEventListener('click', this.myFunction);


        this._domNode.appendChild(this._dropBtn);
        this._domNode.appendChild(this._myDropDown);

        window.onclick = function (event: MouseEvent) {
            if (!event.target.matches('.dropbtn')) {
                var dropdown = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdown.length; i++) {
                    var openDropdown = dropdown[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        // this.addEntry('one')
        // this.addEntry('two')
        // this.addEntry('three')
    }

    public addEntry(entry: string) {
        const a = document.createElement('a');
        a.textContent = entry;
        a.addEventListener('click', this.entryOnClick.bind(this, this._entries.length));
        this._entries.push(a);
        this._myDropDown.appendChild(a);
    }

    private entryOnClick(index: number, e: MouseEvent) {
        console.log(index);
        this._callback(index);
    }

    public myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }

    set callback(value: Function) {
        this._callback = value;
    }
}