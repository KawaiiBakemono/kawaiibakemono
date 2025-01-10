var template = document.createElement('template');

function loadTemplate(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {return html;})
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

template.innerHTML = loadTemplate("/html/template-header.html")

class Header extends HTMLElement {        
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
    
        shadowRoot.appendChild(template.content);
    }
}

customElements.define('header-component', Header)

