import { Store } from '../store';
export class RlsbbController {
  webview1: HTMLElement;
  webview2: HTMLElement;
  webview3: HTMLElement;
  webview4: HTMLElement;

  webviews: HTMLElement[];
  store: Store;

  constructor() {
    this.store = new Store({
      configName: 'user-preferences',
      defaults: {}
    });
    const profiles = this.store.get('profiles');
    this.webview1 = document.getElementById('webview1');
    this.webview2 = document.getElementById('webview2');
    this.webview3 = document.getElementById('webview3');
    this.webview4 = document.getElementById('webview4');
  }
}