const compose = require('./compose');

const composition = compose({});
const { webComponents } = composition.modules;
customElements.define('stazione-header', webComponents.StazioneHeader);

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);
