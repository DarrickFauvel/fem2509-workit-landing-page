/**
 * Initializes animation for elements observed by the IntersectionObserver
 * once the DOM content is fully loaded.
 *
 * @event DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  animateObservedElements();
});

/**
 * Observes elements with the `.observed-element` class and adds the
 * `.visible` class when they are at least 75% visible in the viewport.
 *
 * @function animateObservedElements
 * @returns {void}
 */
function animateObservedElements() {
  /**
   * @type {NodeListOf<HTMLElement>}
   */
  const observedElements = document.querySelectorAll(".observed-element");

  /**
   * Callback function for IntersectionObserver entries.
   *
   * @callback IntersectionObserverCallback
   * @param {IntersectionObserverEntry[]} entries - List of observed element entries.
   * @param {IntersectionObserver} observer - The observer instance.
   */

  /**
   * @type {IntersectionObserverCallback}
   */
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  /**
   * The IntersectionObserver instance that triggers the animation when
   * elements are 75% visible.
   *
   * @type {IntersectionObserver}
   */
  const observer = new IntersectionObserver(callback, {
    threshold: 0.75,
  });

  observedElements.forEach((element) => {
    observer.observe(element);
  });
}
