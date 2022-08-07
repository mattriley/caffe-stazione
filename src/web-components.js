const compose = require('./compose');

const compositionName = 'Caffe Stazione Web Components';
const composition = compose({ compositionName });
const { webComponents } = composition.modules;
customElements.define('stazione-header', webComponents.StazioneHeader);

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);
