export class ComboBox {
    private html: string = `<div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content">
        <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
        <a href="#about">About</a>
        <a href="#base">Base</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#custom">Custom</a>
        <a href="#support">Support</a>
        <a href="#tools">Tools</a>
      </div>
    </div>`;
    private _domNode: HTMLElement;
    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.innerHTML = this.html;
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }
}