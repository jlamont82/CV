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
      
      <p class="copyright">&copy; 2018 - <script>document.write(/\d{4}/.exec(Date())[0])</script> John Lamont. </p> 


     <p> <script>
      // create a function to update the date and time
      function updateDateTime() {
        // create a new `Date` object
        const now = new Date();

        // get the current date and time as a string
        const currentDateTime = now.toLocaleString();

        // update the `textContent` property of the `span` element with the `id` of `datetime`
        document.querySelector('#datetime').textContent = currentDateTime;
      }

      // call the `updateDateTime` function every second
      setInterval(updateDateTime, 1000);
    </script>
    </P>

   
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
