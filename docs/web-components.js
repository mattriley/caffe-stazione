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

        const header = document.createElement('header');
        const img = document.createElement('img');
        img.src = 'https://caffestazione.com.au/logo-white-on-blue.jpg';
        img.alt = 'Caffe Stazione';
        header.appendChild(img);
        shadow.appendChild(header);
    }
}

customElements.define('stazione-header', StazioneHeader);
