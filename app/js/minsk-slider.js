const INITIAL_ACTIVE_SLIDE = 0;

function KostenSlider() {
  // DOM nodes
  const slider = Array.from(document.querySelectorAll(".kostya-slide"));
  const slide = document.querySelector(".slide");
  const prev = document.querySelector(".cstm-arrow-prev");
  const next = document.querySelector(".cstm-arrow-next");
  // State
  const state = {
    active: INITIAL_ACTIVE_SLIDE,
  };
  // Update
  function update(next) {
    slide.classList.remove(`slide__${state.active}`)
    slide.classList.add(`slide__${next}`);

    slider.forEach((el, index) =>
      index === next 
        ? el.classList.add("slick-current")
        : el.classList.remove("slick-current"));
      
    state.active = next;
  }
  // Initialization
  slider.forEach((el, index) =>
    el.addEventListener("click", () => update(index))
  );
  
  prev.addEventListener("click", () => update(Math.max(state.active - 1, 0)));
  next.addEventListener("click", () => update(Math.min(state.active + 1, 2)));

  update(INITIAL_ACTIVE_SLIDE);
}

KostenSlider();

window.addEventListener("pageUpdate", function () {
  if (window.location.pathname === "/minsk.html") {
    document.querySelector("img video").play();
  }
});
