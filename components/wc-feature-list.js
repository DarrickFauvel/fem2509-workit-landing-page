import "./wc-feature-item.js";

const features = [
  {
    number: 1,
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    number: 2,
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    number: 3,
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];

class WcFeatureList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = /*html*/ `<style>
    wc-feature-list {
        display: flex;
        flex-direction: column;
        gap: calc((32 / 16) * 1em);
        padding-block: calc((64 / 16) * 1em);
    }
</style>`;
    const htmlContent = features
      .map(
        (feature) => `<wc-feature-item>
        <div class="number">${feature.number}</div>
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
      </wc-feature-item>`
      )
      .join("");
    this.innerHTML = `${style}
    ${htmlContent}`;
  }
}

customElements.define("wc-feature-list", WcFeatureList);
