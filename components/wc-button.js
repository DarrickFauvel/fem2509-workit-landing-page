const template = document.createElement("template");
template.innerHTML = /*html*/ `<style>
    button {
      border: none;
      background-color: var(--color-mint);
      padding-inline: calc((32 / 16) * 1em);
      padding-block: calc((12 / 16) * 1em);
      font-size: calc((16 / 16) * 1rem);
      line-height: 180%;
      font-weight: var(--font-weight-bold);
      cursor: pointer;
      transition: filter .3s, transform .3s;
    }
    button:hover {
     filter: brightness(0.8);
     transform: translateY(-3px);
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
