const featureTemplate = document.createElement("template");
featureTemplate.innerHTML = /*html*/ `
<style>
    :host {
        background-color: purple;
        
        h2 {
            color: red;
        }
    }
    article {
        text-align: center;
    }
    div {
        background-color: green;
    }
</style>
<article>
    <slot></slot>
</article>
`;

class WcFeature extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(featureTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("wc-feature connected");
  }
}

customElements.define("wc-feature", WcFeature);
