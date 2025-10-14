import { showToast } from "./wc-toast-message.js";

/**
 * Template for the <wc-button> web component.
 * @type {HTMLTemplateElement}
 */
const template = document.createElement("template");

template.innerHTML = /* html */ `<style>
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
      transition: all 0.4s;
    }
    button:hover {
      border: 2px solid var(--color-mint);
      background-color: 1px solid var(--color-indigo);
      color: var(--color-mint);
    }
  </style>
  <button>
    <slot name="content"></slot>
  </button> `;

/**
 *  Custom web component that extends HTMLElement
 * @extends {HTMLElement}
 */
class WcButton extends HTMLElement {
  /**
   * Creates a new instance of WcButton and attaches a shadow root.
   * @constructor
   */
  constructor() {
    super();

    /** @type {ShadowRoot} */
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    /** @type {HTMLButtonElement | null} */
    this.btnEl = null;
  }

  /**
   * Lifecycle method called when the component is added to the DOM.
   * Sets up the click event listener.
   * @returns {void}
   */
  connectedCallback() {
    const btnEl = this.shadowRoot.querySelector("button");
    btnEl.addEventListener("click", this.handleClick);
  }

  /**
   * Handles button click events.
   * @param {MouseEvent} e - The click event.
   * @returns {void}
   */
  handleClick(e) {
    showToast("Saved successfully!", "success");
  }

  /**
   * Lifecycle method called when the component is removed from the DOM.
   * Cleans up event listeners.
   * @returns {void}
   */
  disconnectedCallback() {
    if (this.btnEl) {
      this.btnEl.removeEventListener("click", this.handleClick);
    }
  }
}

customElements.define("wc-button", WcButton);
