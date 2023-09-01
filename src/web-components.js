const compose = require('./compose');

const { webComponents } = compose();
customElements.define('stazione-header', webComponents.StazioneHeader);

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);
