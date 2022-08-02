const compose = require('./compose');

const composition = compose();
const { webComponents } = composition.modules;
if (!window.apps) window.apps = {};
window.apps.caffestazioneWebcomponents = composition;

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Shadows+Into+Light';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);

customElements.define('stazione-header', webComponents.StazioneHeader);
