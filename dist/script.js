"use strict";
var socialNets = [
    {
      entity: "Page",
      platformName: "facebook",
      username: "@nathanf",
      subscribers: "1987",
      label: "followers",
      change: 12,
      comparaison: "up",
      today: { views: 87, changeViews: 3, likes: 52, changeLikes: 2 },
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
      today: { views: 117, changeViews: 303, likes: 507, changeLikes: 553 },
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
      today: { views: 107, changeViews: 19, likes: 1407, changeLikes: 12 },
    },
  ],
  cardContainer = document.getElementById("container"),
  overviewContainer = document.querySelector("#container2 .cards"),
  radiosButtons = document.querySelectorAll(".toggle__wrapper input");
function generateCardSection(a, e) {
  var c = document.createElement("div");
  c.classList.add("card"),
    c.classList.add("card--".concat(e.platformName)),
    (c.innerHTML =
      '\n          <div class="card__platform">\n            <img\n              class="card__icon"\n              src="./images/icon-'
        .concat(e.platformName, '.svg"\n              alt="')
        .concat(
          e.platformName,
          '"\n            />\n            <div class="card__username">'
        )
        .concat(
          e.username,
          '</div>\n          </div>\n          <div class="card__followers">\n            <div class="card__count card__count--big">'
        )
        .concat(e.subscribers, '</div>\n            <div class="card__label">')
        .concat(
          e.label,
          '</div>\n          </div>\n          <div class="card__change card__change--'
        )
        .concat(e.comparaison, '">\n            <img src="images/icon-')
        .concat(e.comparaison, '.svg" alt="')
        .concat(
          e.comparaison,
          ' arrow" />\n            <div class="card__number">'
        )
        .concat(e.change, " Today</div>\n          </div>\n  ")),
    a.appendChild(c);
}
function generateOverviewSection(a, e) {
  var c = document.createElement("div"),
    n = document.createElement("div");
  c.classList.add("card"),
    c.classList.add("card-grid"),
    n.classList.add("card"),
    n.classList.add("card-grid"),
    (c.innerHTML = '\n            <div class="card__subtitle">'
      .concat(
        e.entity,
        ' Views</div>\n            <img\n              class="card__icon"\n              src="images/icon-'
      )
      .concat(e.platformName, '.svg"\n              alt="')
      .concat(
        e.platformName,
        ' icon"\n            />\n            <div class="card__count card__count--small">'
      )
      .concat(
        e.today.views,
        '</div>\n            <div class="card__change card__change--'
      )
      .concat(e.comparaison, '">\n              <img src="images/icon-')
      .concat(e.comparaison, '.svg" alt="')
      .concat(
        e.comparaison,
        ' arrow" />\n              <div class="card__number">'
      )
      .concat(e.today.changeViews, "%</div>\n            </div>\n    ")),
    (n.innerHTML = '\n            <div class="card__subtitle">'
      .concat(
        e.entity,
        ' Views</div>\n            <img\n              class="card__icon"\n              src="images/icon-'
      )
      .concat(e.platformName, '.svg"\n              alt="')
      .concat(
        e.platformName,
        ' icon"\n            />\n            <div class="card__count card__count--small">'
      )
      .concat(
        e.today.likes,
        '</div>\n            <div class="card__change card__change--'
      )
      .concat(e.comparaison, '">\n              <img src="images/icon-')
      .concat(e.comparaison, '.svg" alt="')
      .concat(
        e.comparaison,
        ' arrow" />\n              <div class="card__number">'
      )
      .concat(e.today.changeLikes, "%</div>\n            </div>\n    ")),
    a.appendChild(c),
    a.appendChild(n);
}
function handleClick(a) {
  a.forEach(function (a) {
    document.body.className === a.id && (a.checked = !0),
      console.log(a),
      a.addEventListener("change", function (a) {
        (document.body.classList = a.target.id),
          localStorage.setItem("theme", a.target.id);
      });
  });
}
function sysTheme() {
  return window.matchMedia("(prefers-color-scheme : light)").matches
    ? ((document.getElementById("light").checked = !0),
      (document.body.classList = "light"),
      "light")
    : ((document.getElementById("dark").checked = !0),
      (document.body.classList = "dark"),
      "dark");
}
document.addEventListener("DOMContentLoaded", function () {
  (document.body.className = localStorage.getItem("theme") || "dark"),
    handleClick(radiosButtons),
    socialNets.forEach(function (a) {
      generateCardSection(cardContainer, a),
        generateOverviewSection(overviewContainer, a);
    }),
    window
      .matchMedia("(prefers-color-scheme : dark)")
      .addEventListener("change", function (a) {
        (document.body.className = sysTheme()), console.log(a.matches);
      });
});
//# sourceMappingURL=script.js.map
