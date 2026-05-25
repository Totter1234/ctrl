import { initCursor } from "./cursor.js";
import { initModal, openModal } from "./modal.js";
import { initTicker } from "./ticker.js";
import { renderArticles } from "./articles.js";

let fadeUpObserver = null;

function initFadeUp() {
  fadeUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          fadeUpObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  observeFadeUp();
}

function observeFadeUp(selector = ".fade-up") {
  if (!fadeUpObserver) return;
  document.querySelectorAll(selector).forEach((el) => {
    if (!el.classList.contains("is-visible")) {
      fadeUpObserver.observe(el);
    }
  });
}

function initSubscribePlans() {
  const options = document.querySelectorAll(".plan-option");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((o) => o.classList.remove("plan-option--active"));
      option.classList.add("plan-option--active");
    });
  });

  const form = document.querySelector(".subscribe__form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initModal();
  initTicker();
  initFadeUp();
  initSubscribePlans();
  initSmoothScroll();

  const grid = document.getElementById("articles-grid");
  renderArticles(grid, openModal);
  observeFadeUp("#articles-grid .fade-up");

  document.querySelectorAll("#articles-grid .fade-up").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});
