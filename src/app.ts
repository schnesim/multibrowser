import * as os from 'os';
import { shell } from 'electron';
import { Greeter } from './controller/greeter';
import { RlsbbController } from './controller/rlsbbController';
import { UiController } from './controller/ui-Controller';

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
  
  // const controller = new RlsbbController();
  // const menuElement = new MenuElement();
  // document.getElementsByTagName('body')[0].appendChild(menuElement.getDomNode());

  // const webview1: any = document.getElementById('webview1');
  // const webview2: any = document.getElementById('webview2');
  // const webview3: any = document.getElementById('webview3');
  // const webview4: any = document.getElementById('webview4');
  // const webview5: any = document.getElementById('webview5');

  // webview1.addEventListener('will-navigate', (e) => {
  //   const protocol = require('url').parse(e.url).protocol
  //   if (protocol === 'http:' || protocol === 'https:') {
  //     shell.openExternal(e.url);
  //   }
  // });
  // webview2.addEventListener('will-navigate', (e) => {
  //   const protocol = require('url').parse(e.url).protocol
  //   if (protocol === 'http:' || protocol === 'https:') {
  //     shell.openExternal(e.url)
  //   }
  // });
  // webview3.addEventListener('will-navigate', (e) => {
  //   const protocol = require('url').parse(e.url).protocol
  //   if (protocol === 'http:' || protocol === 'https:') {
  //     shell.openExternal(e.url)
  //   }
  // });
  // webview4.addEventListener('will-navigate', (e) => {
  //   const protocol = require('url').parse(e.url).protocol
  //   if (protocol === 'http:' || protocol === 'https:') {
  //     shell.openExternal(e.url)
  //   }
  // });
  // webview5.addEventListener('will-navigate', (e) => {
  //   const protocol = require('url').parse(e.url).protocol
  //   if (protocol === 'http:' || protocol === 'https:') {
  //     shell.openExternal(e.url)
  //   }
  // });

  // const urls = ['http://rlsbb.ru', 'http://rlsbb.ru/page/2/', 'http://rlsbb.ru/page/3/', 'http://rlsbb.ru/page/4/', 'http://rlsbb.ru/page/5/'];
  // const urls = ['http://www.google.de', 'http://www.google.de', 'http://www.google.de', 'http://www.google.de'];
  // loadNext(webview1, urls[0])
  //   .then((e) => {
  //     console.log(e)
  //     loadNext(webview2, urls[1])
  //   })
  //   .then((e) => {
  //     console.log(e)
  //     loadNext(webview3, urls[2])
  //   })
  //   .then((e) => {
  //     console.log(e)
  //     loadNext(webview4, urls[3])
  //   })
  //   .then((e) => {
  //     console.log(e)
  //     loadNext(webview5, urls[4])
  //   })
  //   .then(() => {
  //     webview1.setZoomFactor(0.5);
  //     webview2.setZoomFactor(0.5);
  //     webview3.setZoomFactor(0.5);
  //     webview4.setZoomFactor(0.5);
  //     webview5.setZoomFactor(0.5);
  //   })
});
