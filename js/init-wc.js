/**
 * Waits for specific custom elements to be defined or for a timeout,
 * whichever comes first (max wait time: 2 seconds).
 *
 * Once ready (or timed out), removes the "reduce-fouce" class from <html>.
 */
(async function waitForWebComponents() {
  await Promise.race([
    Promise.allSettled([
      customElements.whenDefined("wc-button"),
      customElements.whenDefined("wc-feature-item"),
      customElements.whenDefined("wc-feature-list"),
      customElements.whenDefined("wc-icon-link"),
      customElements.whenDefined("wc-toast-message"),
    ]),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  document.documentElement.classList.remove("reduce-fouce");
})();
