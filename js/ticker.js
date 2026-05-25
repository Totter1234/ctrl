export function initTicker() {
  const track = document.querySelector(".ticker__track");
  if (!track) return;

  const contents = track.querySelectorAll(".ticker__content");
  if (contents.length < 2) return;

  const first = contents[0];
  const clone = first.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);
}
