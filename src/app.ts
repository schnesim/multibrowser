import * as os from 'os';
import { shell } from 'electron';
import { UiController } from './controller/ui-Controller';
import { Store } from './store';

const loadNext = function (webview, url) {
  return new Promise((resolve, reject) => {
    webview.setAttribute('src', url)
    webview.addEventListener('did-stop-loading', (e) => {
      resolve(e);
    })
  })
}

// This event is the electron/javascript equivalent to the "main" method of a C/Java application.
document.addEventListener('DOMContentLoaded', function () {
  const uiController = new UiController();
  
});
