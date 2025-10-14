class WcToastMessage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["message", "type", "duration"];
  }

  connectedCallback() {
    this.render();
    this.show();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const message = this.getAttribute("message") || "";
    const type = this.getAttribute("type") || "";
    const styles = /* html */ `<style>  
    :host {
        position: fixed;
        top: 0;
        left: 1em;
        right: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${
          type === "success" ? "#4caf50" : type === "error" ? "#f44336" : "#333"
        };
       color: white;
       height: 2em;
       padding-inline: 2em;
       border-radius: 6px;
       font-family: sans-serif;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.3s, transform 0.3s;
      }
      :host(.visible) {
        opacity: 1;
        transform: translateY(0);
      }
    </style>`;

    this.shadowRoot.innerHTML = /* html */ `
      ${styles}
      <div>${message}</div>
    `;
  }

  show() {
    // Animate in
    requestAnimationFrame(() => {
      this.classList.add("visible");
    });

    const duration = parseInt(this.getAttribute("duration")) || 3000;
    setTimeout(() => this.hide(), duration);
  }

  hide() {
    this.classList.remove("visible");
    setTimeout(() => this.remove(), 300);
  }
}

customElements.define("wc-toast-message", WcToastMessage);

export function showToast(message = "", type = "info", duration = "3000") {
  const toast = document.createElement("wc-toast-message");
  toast.setAttribute("message", message);
  toast.setAttribute("type", type);
  toast.setAttribute("duration", duration);
  document.body.appendChild(toast);
}
