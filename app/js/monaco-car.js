setTimeout(() => {
    lax.addElements(".monaco-car", {
      scrollY: {
        'translateX': [
          ["elInY", "elOutY"],
          {
            320: [0, 320],
            540: [0, 450],
            1200: [0, 900],
            1201: [0, 1000],
          },
        ],
      },
    });
}, 200);
  