lax.addDriver(
  "scrollY",
  function () {
    return window.scrollY;
  },
  { inertiaEnabled: true }
);

lax.addElements(".cloud__left", {
  scrollY: {
    translateX: [
      ["elInY", "elCenterY+200"],
      {
        320: [-470, -650],
        540: [-230, -650],
        1200: [-30, -650],
        1201: [-30, -450],
      },
    ],
    // opacity: [["elCenterY", "elOutY"], [1, 0]],
  },
});

lax.addElements(".cloud__right", {
  scrollY: {
    translateX: [
      ["elInY", "elCenterY+200"],
      {
        320: [290, 550],
        540: [230, 550],
        991: [130, 550],
        1200: [30, 550],
        1201: [30, 350],
      },
    ],

    // opacity: [["elCenterY", "elOutY"], [1, 0]],
  },
});

lax.addElements(".cloud__center__star", {
  scrollY: {
    opacity: [
      ["elInY", "elCenterY+200"],
      [0, 1],
    ],
    rotate: [
      ["elInY", "elOutY*4"],
      [0, 720],
    ],
  },
});

lax.addElements(".cloud__center__mcLogo", {
  scrollY: {
    opacity: [
      ["elInY", "elCenterY+200"],
      [0, 1],
    ],
  },
});

lax.addElements(".cloud__center__circle", {
  scrollY: {
    opacity: [
      ["elInY", "elCenterY+200"],
      [0, 1],
    ],
    // scale: [["elInY", "elCenterY"], [0.25, 2.004]],
    scale: [
      ["elInY", "elCenterY"],
      [0.25, 4],
    ],
  },
});

lax.init();