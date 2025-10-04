const style = /*html*/ ``;

class WcFeatureItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const children = this.innerHTML;

    // Only insert template if not already rendered
    if (!this.querySelector("template")) {
      this.innerHTML = /*html*/ `
        <template>
          <style>
            wc-feature-item {
              display: block;
 
              article {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: calc((24 / 16) * 1em);
                
                .number {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-family: var(--font-family-display); 
                  font-weight: var(--font-weight-semibold);
                  font-size: calc((20 / 16) * 1rem);
                  line-height: calc((40 / 16) * 1rem);
                  border: 1px solid;
                  border-radius: 50%;
                  width: 2.75em;
                  aspect-ratio: 1 / 1;
                }

                p {
                  text-align: center;
                  line-height: 180%;
                }
              }
            }
            
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          </style>
          <article class="observed-element">
            ${children}
          </article>
        </template>`;
    }

    // Grab the template inside the element itself
    const template = this.querySelector("template");
    const clone = template.content.cloneNode(true);

    // Clear and append
    this.innerHTML = "";
    this.appendChild(clone);
  }
}

customElements.define("wc-feature-item", WcFeatureItem);
