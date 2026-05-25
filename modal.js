let overlayEl = null;
let closeBtnEl = null;

export function initModal() {
  overlayEl = document.getElementById("modal-overlay");
  closeBtnEl = document.getElementById("modal-close");

  if (!overlayEl) return;

  closeBtnEl?.addEventListener("click", closeModal);
  overlayEl.addEventListener("click", (e) => {
    if (e.target === overlayEl) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlayEl?.classList.contains("is-open")) {
      closeModal();
    }
  });
}

export function openModal(article) {
  if (!overlayEl || !article) return;

  const categoryEl = document.getElementById("modal-category");
  const titleEl = document.getElementById("modal-title");
  const metaEl = document.getElementById("modal-meta");
  const bodyEl = document.getElementById("modal-body");

  if (categoryEl) categoryEl.textContent = article.category;
  if (titleEl) titleEl.textContent = article.title;
  if (metaEl) metaEl.textContent = article.meta;
  if (bodyEl) bodyEl.textContent = article.body;

  overlayEl.classList.add("is-open");
  overlayEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeBtnEl?.focus();
}

export function closeModal() {
  if (!overlayEl) return;

  overlayEl.classList.remove("is-open");
  overlayEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
