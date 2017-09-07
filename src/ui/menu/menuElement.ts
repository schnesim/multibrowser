export class MenuElement {
    private _menuVisible: boolean;
    private _domNode: HTMLElement;
    private _menuToggle: HTMLElement;
    private _menuItemsContainer: HTMLElement;
    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.classList.add('menu-closed');
        this._domNode.addEventListener('click', this.toggleMenu.bind(this));
        this._domNode.addEventListener('mouseenter', this.highlightClosedMenu.bind(this));
        this._domNode.addEventListener('mouseleave', this.unhighlightClosedMenu.bind(this));
        
        this._menuToggle = document.createElement('div');
        this._menuToggle.classList.add('arrow-left');
        this._menuToggle.classList.add('menu-toggle');
        
        this._menuItemsContainer = document.createElement('div');
        this._menuItemsContainer.classList.add('menu-items-container');
        this._menuItemsContainer.style.visibility = 'hidden';
        
        this._domNode.appendChild(this._menuToggle);
        this._domNode.appendChild(this._menuItemsContainer);
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }

    private highlightClosedMenu() {
        this._domNode.classList.add('menu-highlight');
    }
    
    private unhighlightClosedMenu() {
        this._domNode.classList.remove('menu-highlight');

    }

    private toggleMenu() {
        if (this._menuVisible) {
            this._menuToggle.classList.remove('arrow-down');
            this._menuToggle.classList.add('arrow-left');
            this._menuToggle.classList.remove('arrow-down2');

            this._domNode.classList.add('menu-closed');
            this._domNode.classList.remove('menu-open');

            this._menuItemsContainer.style.visibility = 'hidden';
            this._menuVisible = false;
        } else {
            this._domNode.classList.add('menu-open');
            this._domNode.classList.remove('menu-closed');
            this._menuToggle.classList.remove('arrow-left');
            this._menuToggle.classList.add('arrow-down');
            this._menuToggle.classList.add('arrow-down2');
            this._menuItemsContainer.style.visibility = 'visible';
            this._menuVisible = true;
        }
    }
}