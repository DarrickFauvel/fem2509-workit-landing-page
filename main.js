document.addEventListener("DOMContentLoaded", () => {
  animateObservedElements();
});

function animateObservedElements() {
  const observedElements = document.querySelectorAll(".observed-element");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.75,
    }
  );

  observedElements.forEach((element) => {
    observer.observe(element);
  });
}
