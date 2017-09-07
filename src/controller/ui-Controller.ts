import { Content } from '../ui/content'

export class UiController {

    private uiElements: object;
    private _htmlElements: Array<Object>;
    private _body: HTMLElement;

    constructor() {
        this.uiElements = {};
        this.referenceUiElements();
        const content = new Content();
        this._htmlElements = [];
        this._htmlElements.push(content);
        this._body.appendChild(content.getDomNode());
        //this.attachEventListeners();
    }

    private referenceUiElements() {
        this._body = document.getElementsByTagName('body')[0];
    }

    private attachEventListeners() {
        this.uiElements['menuToggle'].addEventListener('onclick', this.toggleMenu.bind(this));
    }

    private toggleMenu() {
        if (this.isMenuVisible()) {

        }
    }

    private isMenuVisible(): boolean {
        return false;
    }
}