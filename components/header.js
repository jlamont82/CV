const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link rel="stylesheet" href="css/style.css">
  <header>
    <div class="top-container">

      <img class="top-cloud" src="images/cloud.png" alt="cloud-img">
      <h1>I'm John.</h1>
      <h2>Software Developer, Agriculturist & Environmentalist.</h2>

      <img class="bottom-cloud" src="images/cloud.png" alt="cloud-img">
      <img class="top-mountain" src="images/mountain.png" alt="mountain-img">
    </div>
  </header>
`;


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'closed'
    });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
