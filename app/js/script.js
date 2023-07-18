const socialNets = [
  {
    entity: "Page",
    platformName: "facebook",
    username: "@nathanf",
    subscribers: "1987",
    label: "followers",
    change: 12,
    comparaison: "up",
    today: {
      views: 87,
      changeViews: 3,
      likes: 52,
      changeLikes: 2,
    },
  },
  {
    entity: "Page",
    platformName: "twitter",
    username: "@nathanf",
    subscribers: "1044",
    label: "followers",
    change: 99,
    comparaison: "up",
    engagementType: "Retweets",
    today: {
      views: 117,
      changeViews: 303,
      likes: 507,
      changeLikes: 553,
    },
  },
  {
    entity: "Profile",
    platformName: "instagram",
    username: "@realnathanf",
    subscribers: "11k",
    label: "followers",
    change: 1099,
    comparaison: "up",
    engagementType: "Likes",
    today: {
      views: 5462,
      changeViews: 2257,
      likes: "52K",
      changeLikes: 1375,
    },
  },
  {
    entity: "Total",
    platformName: "youtube",
    username: "Nathan F.",
    subscribers: "8239",
    label: "subscribers",
    change: 144,
    comparaison: "down",
    engagementType: "Likes",
    today: {
      views: 107,
      changeViews: 19,
      likes: 1407,
      changeLikes: 12,
    },
  },
];

const cardContainer = document.getElementById("container");
const overviewContainer = document.querySelector("#container2 .cards");
const radiosButtons = document.querySelectorAll(".toggle__wrapper input");

function generateCardSection(parentEl, el) {
  let childEl = document.createElement("div");
  childEl.classList.add("card");
  childEl.classList.add(`card--${el.platformName}`);
  childEl.innerHTML = `
          <div class="card__platform">
            <img
              class="card__icon"
              src="./images/icon-${el.platformName}.svg"
              alt="${el.platformName}"
            />
            <div class="card__username">${el.username}</div>
          </div>
          <div class="card__followers">
            <div class="card__count card__count--big">${el.subscribers}</div>
            <div class="card__label">${el.label}</div>
          </div>
          <div class="card__change card__change--${el.comparaison}">
            <img src="images/icon-${el.comparaison}.svg" alt="${el.comparaison} arrow" />
            <div class="card__number">${el.change} Today</div>
          </div>
  `;
  parentEl.appendChild(childEl);
}

function generateOverviewSection(parentEl, el) {
  let viewEl = document.createElement("div");
  let engageEl = document.createElement("div");
  viewEl.classList.add("card", "card-grid");
  engageEl.classList.add("card", "card-grid");
  viewEl.innerHTML = `
            <div class="card__subtitle">${el.entity} Views</div>
            <img
              class="card__icon"
              src="images/icon-${el.platformName}.svg"
              alt="${el.platformName} icon"
            />
            <div class="card__count card__count--small">${el.today.views}</div>
            <div class="card__change card__change--${el.comparaison}">
              <img src="images/icon-${el.comparaison}.svg" alt="${el.comparaison} arrow" />
              <div class="card__number">${el.today.changeViews}%</div>
            </div>
    `;

  engageEl.innerHTML = `
            <div class="card__subtitle">${el.entity} Views</div>
            <img
              class="card__icon"
              src="images/icon-${el.platformName}.svg"
              alt="${el.platformName} icon"
            />
            <div class="card__count card__count--small">${el.today.likes}</div>
            <div class="card__change card__change--${el.comparaison}">
              <img src="images/icon-${el.comparaison}.svg" alt="${el.comparaison} arrow" />
              <div class="card__number">${el.today.changeLikes}%</div>
            </div>
    `;

  parentEl.appendChild(viewEl);
  parentEl.appendChild(engageEl);
}

function handleClick(radiosButtons) {
  radiosButtons.forEach((btn) => {
    if (btn.checked) document.body.classList = btn.id;
    btn.addEventListener("change", (e) => {
      document.body.classList = e.target.id;
      localStorage.setItem("theme", e.target.id);
    });
  });
}

function sysTheme() {
  if (window.matchMedia("(prefers-color-scheme : light)").matches) {
    document.getElementById("light").checked = true;
    document.body.className = "light";
    return "light";
  } else {
    document.getElementById("dark").checked = true;
    document.body.className = "dark";
    return "dark";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.className = localStorage.getItem("theme") || "dark";
  document.getElementById(document.body.className).checked = true;
  handleClick(radiosButtons);
  socialNets.forEach((elt) => {
    generateCardSection(cardContainer, elt);
    generateOverviewSection(overviewContainer, elt);
  });

  /* ---------- Sync the page theme with the systeme new theme config --------- */
  window
    .matchMedia("(prefers-color-scheme : dark)")
    .addEventListener("change", sysTheme);
});
