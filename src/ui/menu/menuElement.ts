import { MenuItemContainer } from './menuItemContainer';
import { MenuToggle } from './menuToggle';

export class MenuElement {
    private _menuVisible: boolean;
    private _domNode: HTMLElement;
    private _menuToggle: MenuToggle;
    private _menuItemsContainer: MenuItemContainer;
    constructor() {
        this._domNode = document.createElement('div');
        this._domNode.id = 'menuElement';
        this._domNode.classList.add('menu-closed');
        this._domNode.addEventListener('click', this.toggleMenu.bind(this));
        this._domNode.addEventListener('mouseenter', this.highlightClosedMenu.bind(this));
        this._domNode.addEventListener('mouseleave', this.unhighlightClosedMenu.bind(this));

        this._menuToggle = new MenuToggle();

        this._menuItemsContainer = new MenuItemContainer();
        
        this._domNode.appendChild(this._menuToggle.getDomNode());
        this._domNode.appendChild(this._menuItemsContainer.getDomNode());
    }

    public getDomNode(): HTMLElement {
        return this._domNode;
    }

    private highlightClosedMenu() {
        if (!this._menuVisible) {
            this._domNode.classList.add('menu-highlight');
        }
    }
    
    private unhighlightClosedMenu() {
        if (!this._menuVisible) {
            this._domNode.classList.remove('menu-highlight');
        }
    }
    
    /**
     * 
     * @param {MouseEvent} e
     */
    private toggleMenu(e) {
        if (this._menuVisible && e.srcElement.id === this._menuToggle.getDomNode().id) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    private openMenu() {
        this._domNode.classList.add('menu-open');
        this._domNode.classList.remove('menu-closed');
        this._domNode.classList.remove('menu-highlight');
        this._menuToggle.toggle();
        this._menuItemsContainer.show();
        // this._menuItemsContainer.toggle();
        this._menuVisible = true;
    }

    private closeMenu() {
        this._domNode.classList.add('menu-closed');
        this._domNode.classList.remove('menu-open');
        this._menuToggle.toggle();
        this._menuItemsContainer.hide();
        // this._menuItemsContainer.toggle();
        this._menuVisible = false;
    }
}