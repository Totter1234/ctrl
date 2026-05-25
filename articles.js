export const articles = [
  {
    featured: true,
    category: "Cover Story",
    title: "The Man Who Controls the Room",
    meta: "Interview · 8 min read",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    body: "Lucas isn't your typical success story. At 28, he's built a brand, a following, and a lifestyle that most men his age are still drafting on napkins. We caught up with him in his Aarhus apartment — the kind of place where a vintage Eames chair sits three feet from a custom-built PC rig worth more than most people's first car. 'People ask me how I balance it. I don't. Balance is a myth. Control is real. You decide what gets your attention, and everything else can wait.'"
  },
  {
    featured: false,
    category: "Style",
    title: "Two Worlds, One Outfit",
    meta: "Style · 5 min read",
    img: "https://images.unsplash.com/photo-1617952236317-0bd127407984?w=600&q=80",
    body: "We took three looks from this season's most interesting menswear brands and shot them in two settings: in front of a high-end gaming setup, and out on the street. The results prove what we've always believed — great style has no context. It works everywhere."
  },
  {
    featured: false,
    category: "Tech",
    title: "The Setup That Turns Heads",
    meta: "Tech · 4 min read",
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
    body: "A great setup isn't just functional — it's a statement. We've rounded up the gear that earns a second look: monitors with edges so thin they look like concept renders, keyboards with the satisfying click of a Swiss watch, chairs that cost as much as a flight to Tokyo."
  },
  {
    featured: false,
    category: "Gaming",
    title: "Playing Like You Mean It",
    meta: "Gaming · 6 min read",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    body: "There's a difference between playing games and being a gamer. One is a hobby. The other is a lens through which you see the world — problems as puzzles, setbacks as respawns, competition as a form of respect."
  }
];

export function renderArticles(gridEl, onArticleClick) {
  if (!gridEl) return;

  gridEl.innerHTML = articles
    .map((article, index) => {
      const featuredClass = article.featured ? " article-card--featured" : "";
      return `
        <article
          class="article-card${featuredClass} fade-up"
          data-index="${index}"
          tabindex="0"
          role="button"
          aria-label="Read: ${article.title}"
        >
          <div class="article-card__media">
            <img src="${article.img}" alt="" loading="lazy">
            <div class="article-card__overlay"></div>
            <span class="article-card__arrow" aria-hidden="true">→</span>
          </div>
          <div class="article-card__content">
            <span class="article-card__category">${article.category}</span>
            <h3 class="article-card__title">${article.title}</h3>
            <p class="article-card__meta">${article.meta}</p>
          </div>
        </article>
      `;
    })
    .join("");

  gridEl.querySelectorAll(".article-card").forEach((card) => {
    const index = Number(card.dataset.index);
    const open = () => onArticleClick(articles[index]);

    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}
