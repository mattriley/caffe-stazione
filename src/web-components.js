const compose = require('./compose');

const composition = compose();
if (!window.apps) window.apps = [];
window.apps.push({ caffestazioneWebcomponents: composition });

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Shadows+Into+Light';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);

const { webComponents } = composition.modules;
customElements.define('stazione-header', webComponents.StazioneHeader);
