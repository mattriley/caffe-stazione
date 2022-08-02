module.exports = () => class StazioneHeader extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const styles = document.createElement('style');
        this.shadowRoot.appendChild(styles);

        styles.innerHTML = `
header {
    padding: 1rem;
    background-color: rgb(28, 52, 144);
}`;

        const header = document.createElement('header');
        const img = document.createElement('img');
        img.src = 'https://caffestazione.com.au/logo-white-on-blue.jpg';
        img.alt = 'Caffe Stazione';
        header.appendChild(img);
        this.shadowRoot.appendChild(header);
    }
};
