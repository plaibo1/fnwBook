setTimeout(() => {
  lax.addElements(".handsmash__wrap__leftHand", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        [-350, -30],
      ],
      opacity: [
        ["elCenterY", "elOutY"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".handsmash__wrap__rightHand", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        [350, 30],
      ],
      opacity: [
        ["elCenterY", "elOutY"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".handsmash-circleWrap__circle", {
    scrollY: {
      scale: [
        ["elCenterY-100", "elOutY"],
        [0.25, 10],
      ],
      opacity: [
        ["elCenterY", "elCenterY", "elOutY"],
        [0, 1, 0],
      ],
    },
  });
}, 300);

window.addEventListener("load", () => {
  const handsmash = document.querySelector(".handsmash");
  const handsmash__wrap = document.querySelector(".handsmash__wrap");
  const screenHeight = document.documentElement.clientHeight;

  window.addEventListener("scroll", () => {
    if (handsmash.getBoundingClientRect().top <= screenHeight / 3) {
      handsmash__wrap.classList.add("fixed");
    } else {
      handsmash__wrap.classList.remove("fixed");
    }
  });
});
