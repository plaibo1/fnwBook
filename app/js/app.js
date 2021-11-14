"use strict";

function enableLax() {
  const pixelVal = (val) => `${val}px 0`;
  lax.init();

  lax.addDriver("scrollY", () => window.scrollY, { inertiaEnabled: true });

  lax.addElements(".stop-line", {
    scrollY: {
      "background-position": [
        ["elInY", "elOutY"],
        [0, 400],
        { cssFn: pixelVal },
      ],
    },
  });
  lax.addElements(".stop-line-left", {
    scrollY: {
      "background-position": [
        ["elInY", "elOutY"],
        [0, -400],
        { cssFn: pixelVal },
      ],
    },
  });
  lax.addElements(".green-danger__right", {
    scrollY: {
      "background-position": [
        ["elInY", "elOutY"],
        [0, 400],
        { cssFn: pixelVal },
      ],
    },
  });
  lax.addElements(".green-danger__left", {
    scrollY: {
      "background-position": [
        ["elInY", "elOutY"],
        [0, -400],
        { cssFn: pixelVal },
      ],
    },
  });
  lax.addElements(".starz-bg__prej__lax", {
    scrollY: {
      opacity: [
        ["elCenterY", "elOutY*1.1"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".starz-bg__kostya__lax", {
    scrollY: {
      opacity: [
        ["elCenterY", "elOutY*1.1"],
        [1, 0],
      ],
    },
  });
}

function enableFullScreenForImages() {
  
  const fullScreenEnabled = new Set([
    "img/example.png",
  ]);

  const images = Array.from(document.querySelectorAll("img"));

  for (const image of images) {
    if (fullScreenEnabled.has(image.getAttribute('src'))) {
        image.classList.add("openInFullScreen");
      }
  }

  const openImage = (imageSource) => {
    const fullScreenImgWrapper = document.createElement("div");
    fullScreenImgWrapper.classList.add("openFullScreenImg");

    const img = document.createElement("img");
    img.src = imageSource;
    img.style.maxHeight = window.innerHeight - 50 + "px";

    fullScreenImgWrapper.append(img);
    document.querySelector(".main").append(fullScreenImgWrapper);

    fullScreenImgWrapper.addEventListener("click", (e) => {
      if (!(e.target == img)) {
        fullScreenImgWrapper.style.opacity = 0;
        setTimeout(() => fullScreenImgWrapper.remove(), 300);
      }
    });
  };

  document.addEventListener("click", ({ target }) => {
    if (
      target.classList.contains("openInFullScreen") &&
      typeof target.getAttribute("src") === "string"
    ) {
      openImage(target.getAttribute("src"));
    }
  });
}

function normalizeLineBreaksFor(selectors) {
  const nbsp = "&nbsp;";

  const normalize = (text) =>
    text.split(" ").reduce((acc, word) => {
      const normalized = word.length <= 2 && word !== "-" ? word + nbsp : word + " ";

      return acc + normalized;
    }, "");

  const elements = selectors.reduce((acc, selector) => {
    document.querySelectorAll(selector).forEach((el) => acc.push(el));

    return acc;
  }, []);

  for (const element of elements) {
    if (!element.classList.contains("no-format")) {
      const originalText = element.innerText;

      element.innerHTML = normalize(originalText);
    }
  }
}

function enableMenu() {
  const menu = renderMenu();
  const nav = document.querySelector("nav");
  const burger = document.querySelector("#burger");

  function onMenuTogglersClick(evt) {
    const togglePressed = evt.composedPath().some(
      el => el.id === 'burger' || el.classList.contains('menu__header__close')
    );

    if (togglePressed) {
      menu.classList.toggle("closed");
      if (matchMedia("(max-width: 589px)").matches) {
        document.body.classList.toggle("no-scroll");
      }
    }
  }

  function onMenuOutsideClick({ target }) {
    if (!menu.contains(target) && !burger.contains(target)) {
      menu.classList.add("closed");
    }
  }

  let prevScrollPos = window.pageYOffset;
  function stickyHeader() {
    let currentScrollPos = window.pageYOffset;

    nav.style.top = prevScrollPos > currentScrollPos ? "0" : "-130px";

    prevScrollPos = currentScrollPos;
  }

  nav.appendChild(menu);
  nav.addEventListener("click", onMenuTogglersClick);

  window.addEventListener("scroll", throttle(stickyHeader));
  window.addEventListener("click", onMenuOutsideClick);
}

window.addEventListener("load", (e) => {
  enableLax();
  enableMenu();
  enableFullScreenForImages();
  normalizeLineBreaksFor([
    "p",
    ".box__text",
    ".message__box",
    ".dialog__message__text",
  ]);

  window.addEventListener("onwheel", (e) => e.preventDefault());

  window.addEventListener("scroll", createPreloader(), {
    passive: true,
    capture: false,
  });

  if ('AOS' in window && AOS.init) {
    AOS.init();
  }
});

// ============= menu ========== //

const MENU_ITEMS = [
  {
    image: "img/countries/RUS.svg",
    links: [
      { href: "/moscow.html", text: "Москва" },
      { href: "/moscow-minsk.html", text: "Москва-Минск" },
    ],
  },
  {
    image: "img/countries/BLR.svg",
    links: [
      { href: "/minsk.html", text: "Минск" },
      { href: "/minsk-warsawa.html", text: "Минск-Варшава" },
    ],
  },
  {
    image: "img/countries/POL.svg",
    links: [
      { href: "/warsawa.html", text: "Варшава" },
      { href: "/warsawa-berlin.html", text: "Варшава-Берлин" },
    ],
  },
  {
    image: "img/countries/DEO-white.png",
    links: [
      { href: "/berlin.html", text: "Берлин" },
      { href: "/berlin-hanover.html", text: "Берлин-Ганновер" },
    ],
  },
  {
    image: "img/countries/DEO-white.png",
    links: [{ href: "/hanover.html", text: "Ганновер" }],
  },
  {
    image: "img/countries/NLD.svg",
    links: [
      { href: "/amsterdam-01.html", text: "Амстердам #1" },
      { href: "/amsterdam-02.html", text: "Амстердам #2" },
      { href: "/amsterdam-03.html", text: "Амстердам #3" },
      { href: "/amsterdam-brussels.html", text: "Амстердам-Брюссель" },
    ],
  },
  {
    image: "img/countries/BEL-no.svg",
    links: [
      { href: "/brussels.html", text: "Брюссель" },
      { href: "/brussels-paris.html", text: "Брюссель-Париж" },
    ],
  },
  {
    image: "img/countries/FRA-no.svg",
    links: [
      { href: "/paris-01.html", text: "Париж #1" },
      { href: "/paris-02.html", text: "Париж #2" },
    ],
  },
  {
    image: "img/countries/FRA-no.svg",
    links: [
      { href: "/lyon-01.html", text: "Лион #1" },
      { href: "/lyon-02.html", text: "Лион #2" },
      { href: "/lyon-grenoble.html", text: "Лион-Гренобль" },
      { href: "/grenoble-marseilles.html", text: "Гренобль-Марсель" },
      { href: "/marseilles.html", text: "Марсель" },
      { href: "/marseilles-nice.html", text: "Марсель-Ницца" },
      { href: "/nice-sanremo.html", text: "Ницца - Сан-Ремо" },
      { href: "/sanremo.html", text: "Сан-Ремо" },
      { href: "/sanremo-monaco-cannes.html", text: "Сан-Ремо - Монако - Канны" },
      { href: "/cannes-nimes.html", text: "Канны - Ним" },
    ],
  },
];

function renderMenu() {
  const header = `<div class="menu__header">
    <img src="img/logo.svg"	alt="logo" class="menu__header__logo">
    <div class="menu__header__close">
      <span></span><span></span>
    </div>
  </div>`;

  const links = MENU_ITEMS.map((item) =>
    `
    <div class="menu__countries__item">
      <img src="${item.image}" alt="img" class="menu__countries__item__img">
      <div class="menu__countries__item__links">
        ${item.links
          .map(({ href, text }) =>
            href === window.location.pathname
              ? `<a href='${href}' class="menu__countries__item active">${text}</a>`
              : `<a href='${href}' class="menu__countries__item">${text}</a>`
          )
          .join("")}
      </div>
    </div>`.trim()
  ).join("");

  const authors = `
    <div class="menu__authors">
      <div class="menu__authors__title">Авторы:</div>

      <div class="menu__authors__box">
        <div class="menu__authors__box__face">
          <img src="img/perj-yellow.png" alt="Преж">
        </div>
        <div class="menu__authors__box__name">Преж</div>
        <div class="menu__authors__box__socialmedia">
          <a href='https://instagram.com' target='_blank' class="menu__authors__box__socialmedia__icon">
            <img src="img/instagram.svg" alt="img">
          </a>
          <a href='https://vk.com/prezh9' target='_blank' class="menu__authors__box__socialmedia__icon">
            <img src="img/vk.svg" alt="img">
          </a>
        </div>
      </div>

      <div class="menu__authors__box">
        <div class="menu__authors__box__face">
          <img src="img/kostya-purple.png" alt="img">
        </div>
        <div class="menu__authors__box__name">Костэн</div>
        <div class="menu__authors__box__socialmedia">
          <a href='https://instagram.com' target='_blank' class="menu__authors__box__socialmedia__icon purple">
            <img src="img/instagram.svg" alt="img">
          </a>
          <a href='https://vk.com/kostanlikesbars' target='_blank' class="menu__authors__box__socialmedia__icon purple">
            <img src="img/vk.svg" alt="img">
          </a>
        </div>
      </div>
    </div>
  `;

  const menu = document.createElement("div");
  menu.classList.add("menu", "closed");
  menu.innerHTML = `
    <div class="menu-main">
      ${header}
      <div class="menu__countries">
        <a href='/' class="menu__countries__title">
          Оглавление
        </a>
        <a href='./preface.html' class="menu__countries__title">
          Предисловие
        </a>
        ${links}
      </div>
    </div>
    ${authors} 
  `;

  return menu;
}

function createPreloader() {
  // const event = new Event('exec next');
  const head = document.querySelector("head");
  /**
   * @type Array<{text: string, href: string}>
   */
  const ARTICLES = MENU_ITEMS.reduce((acc, { links }) => acc.concat(links), []);
  const parser = new DOMParser();



  // flags
  let nextLoaded = false;
  let hintRendered = false;

  // closure data
  let prev = scrollY;
  /** @type DocumentFragment */
  let nextPage;
  let nextStyles = [];
  let nextScripts = [];

  const loadedStyles = selectAll('link[rel="stylesheet"]').map(({href}) => href);
  const loadedScripts = selectAll("script").map(({src}) => src);

  // funcs
  const showHint = () => {
    const scrollHint = document.createElement("div");

    scrollHint.classList.add("scroll-icon__container");
    scrollHint.innerHTML = `<span class="scroll-icon"><span class="scroll-icon__dot"></span></span>`;

    last("footer .map").appendChild(scrollHint);
  };

  const preloadNext = async (next) => {
    try {
      const { href } = ARTICLES[next];

      const page = await fetch(href)
        .then((res) => res.text())
        .then((txt) => parser.parseFromString(txt, "text/html"));

      nextPage = new DocumentFragment();

      selectAll("body > div", page)
        .forEach((e) => nextPage.appendChild(e))

      nextScripts = selectAll('script', page)
        .map(({src}) => src)
        .filter(s => !loadedScripts.includes(s));

      nextStyles = selectAll('link[rel="stylesheet"]', page)
        .map(({href}) => href)
        .filter(s => !loadedStyles.includes(s));

    } catch {
      nextLoaded = false;
    }
  };

  const autoPlay = () => {
    document.querySelectorAll('video[autoplay]').forEach(video => video.play());
  };

  const updateActiveLink = (href) => {
    const current = document.querySelector(".menu__countries__item.active");
    const next = document.querySelector(`a[href='${href}']`);

    current && current.classList.remove('active');
    next && next.classList.add('active');
  };

  const event = new Event('pageUpdate');

  const update = (next) => {
    const { text, href } = ARTICLES[next];

    window.dispatchEvent(event);

    if (nextPage) {
      document.body.appendChild(nextPage);
      updateActiveLink(href);
      window.history.pushState(next, text, href);
    }

    nextStyles.forEach(href => {
      const el = document.createElement("link");

      el.setAttribute("rel", "stylesheet");
      el.setAttribute("href", href);
      head.appendChild(el);
      loadedStyles.push(href);
    });

    nextScripts.forEach((url) => {
      const el = document.createElement("script");
      el.setAttribute('src', url);

      head.appendChild(el);
      loadedScripts.push(url)
    });

    nextPage = undefined;
    nextLoaded = false;
    nextStyles = [];
    nextScripts = [];
    hintRendered = false;
    remove(".scroll-icon__container");
    autoPlay();
    enableLax();
    if (AOS && AOS.init) {
      AOS.init();
    }
  };

  // handler
  return () => {
    const direction = prev >= scrollY ? "top" : "bottom";

    prev = scrollY;
    if (direction === "top") {
      const progressBar = last("footer .map__border__solid");
      progressBar.style.width = "10%";
      return;
    }

    const distanceToEndOfPage =
      document.body.clientHeight - innerHeight - scrollY;

    const articleIndx = ARTICLES.findIndex(
      ({ href }) => href === window.location.pathname
    );

    if (articleIndx === -1 || articleIndx === ARTICLES.length - 1) {
      // we do not have info about current article or we rich last
      return;
    }
    if (!nextLoaded) {
      // preload next page while user read current article
      nextLoaded = true;
      preloadNext(articleIndx + 1);
    }
    if (distanceToEndOfPage > 100) {
      // to early to show hint or animation
      return;
    }
    if (
      10 <= distanceToEndOfPage &&
      distanceToEndOfPage <= 100 &&
      !hintRendered
    ) {
      hintRendered = true;
      return showHint();
    }
    if (distanceToEndOfPage <= 1) {
      const progressBar = last("footer .map__border__solid");

      const progressBarAnimation = (progress) => {
        progressBar.style.width = `${Math.round(progress * 100)}%`;
        if (progress === 1) {
          update(articleIndx + 1);
        }
      };

      animate((t) => t, progressBarAnimation, 800);
    }
  };
}

// utils

/**
 * @template {Function} F
 * @param {F} func
 * @param {number} ms
 * @returns F
 */
function throttle(func, ms = 200) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

/**
 * @param {Element} el
 * @returns boolean
 */
function visible(el) {
  const { top, bottom, right, left } = el.getBoundingClientRect();

  return bottom >= 0 && top <= innerHeight && right >= 0 && left <= innerWidth;
}

/**
 * @param {string} selector
 * @returns {HTMLElement | null}
 */
function last(selector) {
  const res = document.querySelectorAll(selector);

  // @ts-ignore
  return Array.from(res).pop() || null;
}
/**
 * @param {string} selector
 * @returns {void}
 */
function remove(selector) {
  const el = document.querySelector(selector);

  el && el.remove();
}

/**
 * @param {(s: number) => number} timing
 * @param {(s: number) => void} draw
 * @param {number} duration
 * @returns {void}
 */
function animate(timing, draw, duration) {
  let start = performance.now();

  requestAnimationFrame(function animation(time) {
    // from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // must be from 0 to 1
    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animation);
    }
  });
}

function selectAll(selector, source = document) {
  return Array.from(source.querySelectorAll(selector));
}
