const template = document.createElement("template");
template.innerHTML = /*html*/ `<style>
    :host {
      display: block;
    }
    button {
      border: 2px solid var(--color-mint);
      background-color: var(--color-mint);
      padding-inline: calc((32 / 16) * 1em);
      padding-block: calc((12 / 16) * 1em);
      font-size: calc((16 / 16) * 1rem);
      line-height: 180%;
      font-weight: var(--font-weight-bold);
      cursor: pointer;
      transition: all .4s;
    }
    button:hover {
      border: 2px solid var(--color-mint);
      background-color: 1px solid var(--color-indigo);
      color: var(--color-mint);
    }
  </style>
  <button>
    <slot name="content"></slot>
  </button>
`;

class WcButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const btnEl = this.shadowRoot.querySelector("button");
    btnEl.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    console.log("button clicked");
  }
}

customElements.define("wc-button", WcButton);
