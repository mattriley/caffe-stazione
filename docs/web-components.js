class StazioneHeader extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', 'https://caffestazione.com.au/web-components.css');
        shadow.appendChild(styles);

        const stazioneHeader = document.createElement('header');
        const img = document.createElement('img');
        img.src = 'https://caffestazione.com.au/logo-white-on-blue.jpg';
        img.alt = 'Caffe Stazione';

        shadow.appendChild(stazioneHeader);
    }
}

customElements.define('stazione-header', StazioneHeader);
