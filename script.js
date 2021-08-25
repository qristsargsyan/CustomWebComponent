class Epam extends HTMLElement {

    constructor() {
        this.innerHTML = `<h3>${this.getAttribute('text1')}</h3>`;
        this.innerHTML = `<h3>${this.getAttribute('text2')}</h3>`
    }
}

window.customElements.define('epam', Epam)