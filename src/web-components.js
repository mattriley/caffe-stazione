const compose = require('./compose');

const { modules } = compose();
const { webComponents } = modules;

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Shadows+Into+Light';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);

customElements.define('stazione-header', webComponents.StazioneHeader);
