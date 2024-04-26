const footerTemplate = document.createElement('template');



footerTemplate.innerHTML = `
  <link rel="stylesheet" href="css/style.css">
  <footer>
  <hr>
  <div class="contact-me">
    <h2>Get In Touch</h2>
    <h3>If you would like to get in touch with me.</h3>

    <a class="btn" href="mailto:jlamuk@yahoo.co.uk">Contact me</a>
  </div>

    <div class="bottom-container">
      <a class="footer-link" href="https://www.linkedin.com/in/john-douglas-lamont-uk" target="_blank"><img class="social-media-icon" src="images/linkedin.png" alt="linkedin icon"></a>
      <a class="footer-link" href="https://github.com/jlamont82" target="_blank"><img class="social-media-icon" src="images/github.png" alt="github icon"></a>
      <p class="footer-reference">Icons made by <a class="footer-reference" href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> and
        <a class="footer-reference" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        <br>
      </p>
      
      <p class="copyright">&copy; <script>document.write(/\d{4}/.exec(Date())[0])</script> John Lamont 2024. </p> 
    </div>
  </footer>
`;


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
