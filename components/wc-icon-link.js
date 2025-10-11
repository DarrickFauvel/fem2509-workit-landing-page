/**
 * @extends {HTMLElement}
 */
class WcIconLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const children = this.innerHTML;
    const css = /* css */ `
      wc-icon-link {
        a > img {
          width: calc((20 / 16) * 1em);
        }
      }`;

    this.innerHTML = /* html */ `
      <style>
        ${css}
      </style>
      ${children}`;

    this.addEventListener("click", (e) => {
      e.preventDefault();
      const href = this.querySelector("a").getAttribute("href");
      console.log(`DEMO MESSAGE: Link to ${href} is disabled for this demo.`);
    });
  }
}

customElements.define("wc-icon-link", WcIconLink);
