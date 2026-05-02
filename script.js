const root = document.documentElement;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const phoneToggles = [...document.querySelectorAll(".phone-toggle")];
const phonePopovers = [...document.querySelectorAll(".phone-popover")];
const emailToggles = [...document.querySelectorAll(".email-toggle")];
const emailPopovers = [...document.querySelectorAll(".email-popover")];
const emailCopyButtons = [...document.querySelectorAll("[data-copy-email]")];
const revealItems = document.querySelectorAll(".reveal");
const tabs = [...document.querySelectorAll(".tab")];
const panels = [...document.querySelectorAll(".tab-panel")];
const productVisuals = {
  "Passionsfrucht Aperitif Essig": ["shape-slice", "#6f245f", "#ffd84e", "#271026", "rgba(255, 216, 78, 0.24)", "passion"],
  "Cranberry Crema Essig": ["shape-cluster", "#b0173d", "#ef5b74", "#68142d", "rgba(239, 91, 116, 0.2)", "cranberry"],
  "Granatapfel Crema Essig": ["shape-slice", "#b51b35", "#ef3350", "#5d1023", "rgba(239, 51, 80, 0.2)", "pomegranate"],
  "Blaubeer Crema Essig": ["shape-cluster", "#293f9b", "#6579d9", "#161f62", "rgba(101, 121, 217, 0.18)", "blueberry"],
  "Feigen-Dattel Crema Essig": ["shape-pod", "#7b2f55", "#9a6a36", "#3e1d26", "rgba(154, 106, 54, 0.18)", "fig-date"],
  "Dattel Essig": ["shape-pod", "#7b441f", "#c18442", "#3a2417", "rgba(193, 132, 66, 0.18)", "date"],
  "Feigen Essig": ["shape-pod", "#6f2d56", "#b56e81", "#321724", "rgba(181, 110, 129, 0.18)", "fig"],
  "Himbeer Aperitif Essig": ["shape-cluster", "#c91f52", "#ff708c", "#741734", "rgba(255, 112, 140, 0.18)", "raspberry"],
  "Himbeer Balsam Essig": ["shape-cluster", "#a5133f", "#d94d72", "#5d102b", "rgba(217, 77, 114, 0.18)", "raspberry"],
  "Cassis-Orangen Aperitif Essig": ["shape-cluster", "#3e255f", "#f2832f", "#21142f", "rgba(242, 131, 47, 0.2)", "cassis-orange"],
  "Apfel-Orangen Aperitif Essig": ["shape-round", "#d8482c", "#f7a531", "#7b271c", "rgba(247, 165, 49, 0.18)", "apple-orange"],
  "Apfel Crema Essig": ["shape-round", "#c3362d", "#83b64b", "#6c1f18", "rgba(131, 182, 75, 0.18)", "apple"],
  "Mango Crema Essig": ["shape-round", "#f0a529", "#ffd15a", "#bd6816", "rgba(240, 165, 41, 0.2)", "mango"],
  "Blutorangen Crema Essig": ["shape-slice", "#cf2f24", "#ff7a35", "#751713", "rgba(255, 122, 53, 0.2)", "blood-orange"],
  "Haselnuss Crema Essig": ["shape-pod", "#9b642f", "#d5a15a", "#523018", "rgba(213, 161, 90, 0.18)", "hazelnut"],
  "Balsam Crema Essig": ["shape-splash", "#402018", "#8a4934", "#20100d", "rgba(138, 73, 52, 0.16)", "balsam"],
  "Weintrauben-Vanille Aperitif Essig": ["shape-cluster", "#6c3d8f", "#e7c76a", "#3b2050", "rgba(231, 199, 106, 0.18)", "grape-vanilla"],
  "Tomaten Crema Essig": ["shape-round", "#c83228", "#f36f45", "#781d18", "rgba(243, 111, 69, 0.18)", "tomato"],
  "Williams Christ Crema Essig": ["shape-round", "#c9a739", "#f3dc74", "#80691d", "rgba(243, 220, 116, 0.2)", "pear"],
  "Salate & warme Küche": ["shape-leaf", "#2f7a46", "#8fbd53", "#183d25", "rgba(143, 189, 83, 0.17)"],
  "Soßen & Suppen": ["shape-splash", "#b04b22", "#e48c4b", "#633015", "rgba(228, 140, 75, 0.17)"],
  "Albaöl": ["shape-bottle", "#d0a23a", "#ffe493", "#7d5a19", "rgba(255, 228, 147, 0.18)", "oil-bottle"],
  "Kräuteröl Mediterran": ["shape-leaf", "#2f6d42", "#9bb65d", "#173723", "rgba(155, 182, 93, 0.18)", "herbs"],
  "Olivenöl aus Sitia, Kreta": ["shape-leaf", "#6f7b2d", "#c6bb4d", "#373f18", "rgba(198, 187, 77, 0.18)", "olive"],
  "Walnussöl Premium": ["shape-pod", "#8a5b34", "#c69558", "#4b2f1b", "rgba(198, 149, 88, 0.17)", "walnut"],
  "Kürbiskernöl": ["shape-splash", "#1f5a34", "#6d9f45", "#112f1d", "rgba(109, 159, 69, 0.18)", "pumpkin"],
  "Roter Weinbergpfirsich Likör": ["shape-round", "#d75a38", "#ffc168", "#81321f", "rgba(255, 193, 104, 0.18)", "peach"],
  "Pfirsich-Maracuja-Rum Likör": ["shape-slice", "#e67b2f", "#ffd35c", "#81411d", "rgba(255, 211, 92, 0.2)", "peach-passion"],
  "Himbeer Likör": ["shape-cluster", "#c91f52", "#ff708c", "#741734", "rgba(255, 112, 140, 0.18)", "raspberry"],
  "Heidelbeer Likör": ["shape-cluster", "#293f9b", "#6579d9", "#161f62", "rgba(101, 121, 217, 0.18)", "blueberry"],
  "Schwarzer Johannisbeer Likör": ["shape-cluster", "#351a55", "#6f3f9a", "#1d102f", "rgba(111, 63, 154, 0.18)", "cassis"],
  "Elixier d'Amour": ["shape-splash", "#b3214b", "#d9a051", "#631229", "rgba(217, 160, 81, 0.18)", "cherry-almond"],
  "Cappuccino Likör": ["shape-splash", "#7b4b2d", "#d2a36b", "#3e2517", "rgba(210, 163, 107, 0.18)", "coffee"],
  "Café Royal Likör": ["shape-splash", "#4a2818", "#9c653d", "#24120b", "rgba(156, 101, 61, 0.18)", "coffee"],
  "Karamell Sahne Likör mit Fleur de Sel": ["shape-splash", "#a5672c", "#efbd73", "#5b3516", "rgba(239, 189, 115, 0.18)", "caramel"],
  "Klosterfeuerlikör": ["shape-cluster", "#8f1534", "#c45538", "#4a0d1c", "rgba(196, 85, 56, 0.18)", "cherry-herb"],
  "Kasseler Kümmel ®": ["shape-bottle", "#557043", "#b0a653", "#2e3d25", "rgba(176, 166, 83, 0.17)", "cumin"],
  "Alter Williams": ["shape-round", "#c9a739", "#f3dc74", "#80691d", "rgba(243, 220, 116, 0.19)", "pear"],
  "Williams Spirituose": ["shape-round", "#c9a739", "#f3dc74", "#80691d", "rgba(243, 220, 116, 0.19)", "pear"],
  "Mirabellen Brand": ["shape-round", "#d5aa29", "#ffe474", "#8a681a", "rgba(255, 228, 116, 0.19)", "mirabelle"],
  "Alter Haselnuss": ["shape-pod", "#9b642f", "#d5a15a", "#523018", "rgba(213, 161, 90, 0.18)", "hazelnut"],
  "Haselnuss Spirituose": ["shape-pod", "#9b642f", "#d5a15a", "#523018", "rgba(213, 161, 90, 0.18)", "hazelnut"],
  "Alter Whisky Torf": ["shape-bottle", "#8e572a", "#d2944a", "#4b2a14", "rgba(210, 148, 74, 0.18)", "whisky"],
  "Girvan Lowlands Single Grain Whisky": ["shape-bottle", "#b77a2c", "#ebb85d", "#5d3714", "rgba(235, 184, 93, 0.18)", "whisky"],
  "Gin": ["shape-leaf", "#4a7467", "#b9d5cd", "#213d36", "rgba(185, 213, 205, 0.18)", "gin"]
};

const updateProgress = () => {
  const max = document.body.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  root.style.setProperty("--scroll", `${value}%`);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Menü öffnen");
};

const closePhonePopover = () => {
  phonePopovers.forEach((popover) => popover.setAttribute("hidden", ""));
  phoneToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
};

const closeEmailPopover = () => {
  emailPopovers.forEach((popover) => popover.setAttribute("hidden", ""));
  emailToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
};

const juiceSplash = (color) => `
  <path d="M45 115c26-42 66-54 101-36 24 12 43 6 65-22-10 41-32 64-67 62-31-1-50 11-74 43 4-20-3-34-25-47z" fill="${color}" opacity=".34"/>
  <path d="M79 73c-16-19-31-24-55-17 21 10 31 25 31 44 8-10 15-18 24-27z" fill="${color}" opacity=".24"/>
  <circle cx="31" cy="46" r="4" fill="${color}" opacity=".55"/>
  <circle cx="55" cy="28" r="7" fill="${color}" opacity=".5"/>
  <circle cx="216" cy="41" r="6" fill="${color}" opacity=".55"/>
  <circle cx="236" cy="79" r="3" fill="${color}" opacity=".45"/>
  <circle cx="30" cy="150" r="5" fill="${color}" opacity=".42"/>
  <circle cx="205" cy="158" r="8" fill="${color}" opacity=".42"/>
  <circle cx="229" cy="137" r="3" fill="${color}" opacity=".48"/>
`;

const leafSvg = (x = 120, y = 43, rotate = -20, scale = 1) => `
  <g transform="translate(${x} ${y}) rotate(${rotate}) scale(${scale})">
    <path d="M0 20C10-8 39-13 58 2 39 8 28 25 0 20z" fill="#5f9b43"/>
    <path d="M4 18c16-3 31-8 47-14" fill="none" stroke="#d4efbd" stroke-width="2" stroke-linecap="round" opacity=".75"/>
  </g>
`;

const berry = (x, y, r, color, dark, calyx = false) => `
  <g>
    <circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>
    <circle cx="${x - r * 0.28}" cy="${y - r * 0.34}" r="${Math.max(3, r * 0.25)}" fill="#fff" opacity=".45"/>
    <path d="M${x + r * 0.12} ${y + r * 0.08}c${r * 0.26}-${r * 0.35} ${r * 0.58}-${r * 0.02} ${r * 0.18} ${r * 0.24}-${r * 0.24} ${r * 0.16}-${r * 0.44} ${r * 0.04}-${r * 0.18}-${r * 0.24}z" fill="${dark}" opacity=".55"/>
    ${calyx ? `<path d="M${x - 6} ${y + 1}l6-7 5 7-6-2-5 2z" fill="${dark}" opacity=".75"/>` : ""}
  </g>
`;

const fruitCluster = (a, b, c, calyx = false) => `
  ${juiceSplash(b)}
  ${leafSvg(120, 36, -22, .82)}
  ${berry(92, 96, 28, a, c, calyx)}
  ${berry(127, 73, 24, b, c, calyx)}
  ${berry(153, 105, 30, a, c, calyx)}
  ${berry(116, 124, 23, b, c, calyx)}
  ${berry(180, 71, 20, a, c, calyx)}
  ${berry(65, 135, 18, b, c, calyx)}
  ${berry(196, 135, 22, a, c, calyx)}
`;

const citrusSlice = (a, b, c, blood = false) => `
  ${juiceSplash(b)}
  <g transform="translate(129 104)">
    <circle r="58" fill="${a}"/>
    <circle r="48" fill="#fff" opacity=".58"/>
    <circle r="41" fill="${blood ? c : b}" opacity=".92"/>
    <g stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".72">
      <path d="M0 0L0-39"/><path d="M0 0L34-20"/><path d="M0 0L34 20"/><path d="M0 0L0 39"/><path d="M0 0L-34 20"/><path d="M0 0L-34-20"/>
    </g>
    <circle r="11" fill="#fff" opacity=".35"/>
  </g>
`;

const roundFruit = (a, b, c, leaf = true) => `
  ${juiceSplash(b)}
  ${leaf ? leafSvg(116, 37, -24, .78) : ""}
  <g transform="translate(130 104)">
    <path d="M-54-2c0-41 33-65 67-51 38 16 50 63 25 96-22 30-78 23-92-14-4-10-4-20 0-31z" fill="${a}"/>
    <path d="M-12-53c22 9 36 24 39 46 4 31-17 56-47 59 33 8 67-16 70-52 3-35-24-60-62-53z" fill="${c}" opacity=".22"/>
    <ellipse cx="-22" cy="-27" rx="16" ry="10" fill="#fff" opacity=".35"/>
  </g>
`;

const passionFruit = (a, b, c) => `
  ${juiceSplash(a)}
  <g transform="translate(128 103)">
    <circle r="62" fill="${a}"/>
    <circle r="48" fill="${b}"/>
    <circle r="36" fill="#f7b93c" opacity=".85"/>
    ${[[-15,-11],[0,-22],[16,-8],[-5,7],[18,16],[-24,18],[8,29]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}" opacity=".8"/><circle cx="${x-1}" cy="${y-1}" r="1.6" fill="#fff" opacity=".6"/>`).join("")}
  </g>
`;

const pomegranateFruit = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(130 104)">
    <path d="M-45-45c23-22 66-18 84 12 20 32 1 78-35 88-36 11-76-13-79-50-2-20 10-39 30-50z" fill="${a}"/>
    <path d="M-13-55l12-18 9 18 18-6-8 17" fill="${c}"/>
    <path d="M-24-20c18-17 51-16 69 1-8 27-29 43-58 40-11-9-15-22-11-41z" fill="#f8b7a9" opacity=".72"/>
    ${[[-10,-9],[8,-14],[24,-4],[-20,8],[3,11],[20,16]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="6" fill="${b}"/>`).join("")}
  </g>
`;

const podFruit = (a, b, c, mixed = false) => `
  ${juiceSplash(b)}
  ${mixed ? leafSvg(108, 35, -18, .72) : ""}
  <g transform="translate(116 102) rotate(-18)">
    <path d="M-18-57c34 7 58 39 52 75-6 30-34 47-61 37-28-10-37-41-20-69 7-13 17-26 29-43z" fill="${a}"/>
    <path d="M-12-35c22 9 33 30 26 53-5 17-21 25-37 19-17-6-22-24-12-40 5-9 12-19 23-32z" fill="${b}" opacity=".72"/>
    <path d="M-9-25c5 18 3 35-5 51" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/>
  </g>
  ${mixed ? `<g transform="translate(177 112) rotate(22)"><ellipse rx="18" ry="42" fill="#7b441f"/><ellipse cx="-4" cy="-10" rx="7" ry="18" fill="#c18442" opacity=".45"/></g>` : ""}
`;

const nutFruit = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(112 111) rotate(-16)"><ellipse rx="38" ry="48" fill="${a}"/><ellipse cx="-8" cy="-14" rx="13" ry="17" fill="${b}" opacity=".58"/></g>
  <g transform="translate(167 91) rotate(22)"><ellipse rx="30" ry="40" fill="${c}"/><ellipse cx="-7" cy="-11" rx="10" ry="14" fill="${b}" opacity=".55"/></g>
`;

const balsamFruit = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(133 102)">
    <path d="M-55 29c20-60 78-74 112-17-15 34-59 57-95 40-8-4-14-12-17-23z" fill="${a}" opacity=".88"/>
    <path d="M-31 9c21-21 57-24 81-2" fill="none" stroke="${b}" stroke-width="13" stroke-linecap="round" opacity=".74"/>
    <circle cx="-43" cy="-27" r="16" fill="${c}" opacity=".9"/>
    <circle cx="48" cy="-35" r="20" fill="${b}" opacity=".75"/>
  </g>
`;

const bottleScene = (a, b, c, accent = "") => `
  ${juiceSplash(b)}
  <g transform="translate(138 103) rotate(7)">
    <rect x="-21" y="-80" width="42" height="34" rx="10" fill="${c}" opacity=".82"/>
    <rect x="-38" y="-50" width="76" height="112" rx="25" fill="${a}"/>
    <path d="M-23-43h46v44h-46z" fill="#fff" opacity=".28"/>
    <path d="M-16-75h32" stroke="#fff" stroke-width="5" opacity=".42"/>
    <path d="M-20-42c16 6 34 6 48 0v100c-17 11-43 10-60-1V-39c4-3 8-3 12-3z" fill="${b}" opacity=".64"/>
  </g>
  ${accent}
`;

const herbsScene = (a, b, c) => `
  ${bottleScene(a, b, c, `
    <g transform="translate(73 77) rotate(-28)">
      ${leafSvg(0, 0, 0, .78)}
      ${leafSvg(18, 25, 28, .65)}
      ${leafSvg(37, 4, -38, .58)}
      <path d="M42 78c14-18 23-33 28-55" stroke="#6d9f45" stroke-width="5" stroke-linecap="round"/>
      <path d="M57 83c10-17 16-31 19-48" stroke="#b02f28" stroke-width="7" stroke-linecap="round"/>
    </g>
  `)}
`;

const oliveScene = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(124 103) rotate(-18)">
    <path d="M-44 28c43-45 83-74 126-94" stroke="#667326" stroke-width="8" stroke-linecap="round"/>
    ${[[-24,15],[6,-6],[36,-25],[65,-44]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="27" fill="${a}"/><ellipse cx="${x-6}" cy="${y-8}" rx="5" ry="8" fill="#fff" opacity=".38"/>`).join("")}
    ${[[-4,34],[24,13],[53,-6]].map(([x,y]) => `<path d="M${x} ${y}c19-25 43-26 58-9-18 4-35 15-58 9z" fill="${b}" opacity=".86"/>`).join("")}
  </g>
`;

const pumpkinScene = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(135 102)">
    <path d="M-62 7c12-49 91-52 117-9 24 39-11 82-61 79-46-2-69-34-56-70z" fill="${a}"/>
    <path d="M-32-30c20 20 22 75 0 101M0-39c14 24 15 78 0 115M33-28c-18 23-22 76-2 101" stroke="${c}" stroke-width="4" opacity=".28" fill="none"/>
    <path d="M-44 63c22-18 50-22 82-9" stroke="${b}" stroke-width="14" stroke-linecap="round" opacity=".74"/>
    ${[[-59,-31],[-35,-49],[42,-43],[66,-17]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="19" fill="#e7d5a2" transform="rotate(${x} ${x} ${y})"/>`).join("")}
  </g>
`;

const coffeeScene = (a, b, c) => `
  ${juiceSplash(b)}
  ${[[-3,0],[42,-18],[74,22],[15,50],[-44,35]].map(([x,y]) => `
    <g transform="translate(${128 + x} ${101 + y}) rotate(${x + y})">
      <ellipse rx="19" ry="28" fill="${a}"/>
      <path d="M0-23c-10 16-10 31 0 47" stroke="${b}" stroke-width="4" opacity=".7" fill="none"/>
      <ellipse cx="-7" cy="-8" rx="5" ry="8" fill="#fff" opacity=".22"/>
    </g>
  `).join("")}
`;

const caramelScene = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(132 105)">
    <path d="M-59-3c25-39 83-45 116-7 21 25 9 67-30 77-45 12-91-8-99-42-2-11 3-21 13-28z" fill="${a}"/>
    <path d="M-45 4c35 20 74 18 111-7" stroke="${b}" stroke-width="18" stroke-linecap="round" opacity=".74"/>
    <path d="M-30 43c27 9 55 7 82-5" stroke="#f7dfb7" stroke-width="7" stroke-linecap="round" opacity=".75"/>
    <circle cx="55" cy="-47" r="10" fill="#fff" opacity=".62"/>
    <circle cx="75" cy="-31" r="5" fill="#fff" opacity=".72"/>
  </g>
`;

const cherryScene = (a, b, c, herbs = false) => `
  ${juiceSplash(b)}
  <g transform="translate(128 103)">
    <path d="M-30-15c11-30 27-45 53-55M28-19c-3-29 9-45 31-60" stroke="#5f713b" stroke-width="5" stroke-linecap="round" fill="none"/>
    ${berry(-34, 18, 32, a, c)}
    ${berry(28, 22, 36, b, c)}
    ${herbs ? leafSvg(30, -72, -20, .68) : `<ellipse cx="20" cy="-54" rx="9" ry="20" fill="#d9a051" transform="rotate(34 20 -54)"/>`}
  </g>
`;

const cuminScene = (a, b, c) => `
  ${juiceSplash(b)}
  <g transform="translate(132 101)">
    ${Array.from({ length: 14 }, (_, index) => {
      const angle = index * 25;
      const x = Math.cos(angle) * (24 + (index % 4) * 9);
      const y = Math.sin(angle) * (20 + (index % 5) * 7);
      return `<g transform="translate(${x} ${y}) rotate(${angle})"><ellipse rx="7" ry="23" fill="${index % 2 ? a : b}"/><path d="M0-18v36" stroke="${c}" stroke-width="1.5" opacity=".35"/></g>`;
    }).join("")}
  </g>
`;

const whiskyScene = (a, b, c) => `
  ${bottleScene(a, b, c, `
    <g transform="translate(76 126)">
      <path d="M0 26h83" stroke="#7a481f" stroke-width="9" stroke-linecap="round"/>
      <path d="M8 12c18-9 39-12 65-7" stroke="#d2944a" stroke-width="8" stroke-linecap="round" opacity=".8"/>
      <circle cx="27" cy="-15" r="11" fill="#fff" opacity=".24"/>
      <circle cx="58" cy="-21" r="7" fill="#fff" opacity=".18"/>
    </g>
  `)}
`;

const ginScene = (a, b, c) => `
  ${bottleScene(a, b, c, `
    <g transform="translate(74 82)">
      ${leafSvg(0, 22, -22, .62)}
      ${leafSvg(36, 6, 28, .56)}
      ${leafSvg(62, 40, -40, .52)}
      ${berry(42, 78, 15, "#4f6b60", "#213d36")}
      ${berry(69, 94, 10, "#6f8d80", "#213d36")}
    </g>
  `)}
`;

const fruitArt = (kind, a, b, c) => {
  const scenes = {
    passion: passionFruit(a, b, c),
    cranberry: fruitCluster(a, b, c),
    pomegranate: pomegranateFruit(a, b, c),
    blueberry: fruitCluster(a, b, c, true),
    "fig-date": podFruit(a, b, c, true),
    date: podFruit(a, b, c),
    fig: podFruit(a, b, c),
    raspberry: fruitCluster(a, b, c),
    "cassis-orange": `${citrusSlice("#f2832f", "#ffbc58", c)}<g transform="translate(72 93) scale(.72)">${fruitCluster("#351a55", "#6f3f9a", "#1d102f", false)}</g>`,
    "apple-orange": `${citrusSlice("#e2732f", "#f7a531", c)}${roundFruit("#c3362d", "#83b64b", "#6c1f18")}`,
    apple: roundFruit(a, b, c),
    mango: roundFruit(a, b, c, false),
    "blood-orange": citrusSlice(a, b, c, true),
    hazelnut: nutFruit(a, b, c),
    balsam: balsamFruit(a, b, c),
    "grape-vanilla": `${fruitCluster(a, "#7d4dac", c)}<path d="M190 51c-10 33-17 67-20 104" stroke="#7b4b2d" stroke-width="8" stroke-linecap="round"/><path d="M202 54c-14 33-22 66-24 103" stroke="#c08a43" stroke-width="4" stroke-linecap="round"/>`,
    tomato: `${roundFruit(a, b, c)}<path d="M126 56l10-19 8 20 20-4-15 15 8 17-21-9-18 12 6-20-18-12z" fill="#3c8f3f"/>`,
    pear: `${juiceSplash(b)}${leafSvg(112, 35, -22, .75)}<path d="M118 58c9-35 47-32 49 4 22 8 37 31 31 59-7 36-45 56-82 44-35-11-52-49-35-79 8-15 20-24 37-28z" fill="${a}"/><ellipse cx="117" cy="79" rx="18" ry="12" fill="#fff" opacity=".33"/>`,
    "oil-bottle": bottleScene(a, b, c),
    herbs: herbsScene(a, b, c),
    olive: oliveScene(a, b, c),
    walnut: nutFruit(a, b, c),
    pumpkin: pumpkinScene(a, b, c),
    peach: roundFruit(a, b, c),
    "peach-passion": `${roundFruit("#d75a38", "#ffc168", "#81321f")}${passionFruit("#6f245f", "#ffd84e", "#271026")}`,
    cassis: fruitCluster(a, b, c, true),
    "cherry-almond": cherryScene(a, b, c),
    coffee: coffeeScene(a, b, c),
    caramel: caramelScene(a, b, c),
    "cherry-herb": cherryScene(a, b, c, true),
    cumin: cuminScene(a, b, c),
    mirabelle: roundFruit(a, b, c),
    whisky: whiskyScene(a, b, c),
    gin: ginScene(a, b, c)
  };

  return `
    <span class="fruit-scene" aria-hidden="true">
      <svg viewBox="0 0 260 200" focusable="false">
        ${scenes[kind] || fruitCluster(a, b, c)}
      </svg>
    </span>
  `;
};

document.querySelectorAll(".tab-panel > .product-grid article:not(.product-feature)").forEach((card) => {
  const title = card.querySelector("h3")?.textContent.trim();
  const visual = title ? productVisuals[title] : null;
  if (!visual) return;

  const [shape, fruitA, fruitB, fruitC, wash, fruitKind] = visual;
  card.classList.add("visual-card", "product-art-card", shape);
  card.style.setProperty("--fruit-a", fruitA);
  card.style.setProperty("--fruit-b", fruitB);
  card.style.setProperty("--fruit-c", fruitC);
  card.style.setProperty("--fruit-wash", wash);
  card.insertAdjacentHTML("beforeend", fruitArt(fruitKind, fruitA, fruitB, fruitC));
});

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  closePhonePopover();
  closeEmailPopover();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
    closePhonePopover();
    closeEmailPopover();
  });
});

phoneToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const popoverId = toggle.getAttribute("aria-controls");
    const popover = popoverId ? document.getElementById(popoverId) : null;
    closeMenu();
    closePhonePopover();
    closeEmailPopover();

    if (isOpen) return;

    popover?.removeAttribute("hidden");
    toggle.setAttribute("aria-expanded", "true");
  });
});

emailToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const popoverId = toggle.getAttribute("aria-controls");
    const popover = popoverId ? document.getElementById(popoverId) : null;
    closeMenu();
    closePhonePopover();
    closeEmailPopover();

    if (isOpen) return;

    popover?.removeAttribute("hidden");
    toggle.setAttribute("aria-expanded", "true");
  });
});

phonePopovers.forEach((popover) => {
  popover.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

emailPopovers.forEach((popover) => {
  popover.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

emailCopyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.getAttribute("data-copy-email");
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      button.textContent = "Kopiert";
      window.setTimeout(() => {
        button.textContent = "Adresse kopieren";
      }, 1600);
    } catch {
      button.textContent = email;
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sections = navLinks
  .map((link) => {
    const href = link.getAttribute("href");
    if (!href?.startsWith("#")) return null;
    return document.querySelector(href);
  })
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });

    panels.forEach((panel) => {
      const isTarget = panel.id === tab.getAttribute("aria-controls");
      panel.classList.toggle("is-active", isTarget);
      panel.hidden = !isTarget;
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closePhonePopover();
    closeEmailPopover();
  }
});

document.addEventListener("click", () => {
  closePhonePopover();
  closeEmailPopover();
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

header?.addEventListener("pointerleave", () => {
  if (window.innerWidth > 760) closeMenu();
});
