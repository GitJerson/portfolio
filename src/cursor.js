  const cursor = document.querySelector(".game-cursor");
  const hoverTargets = document.querySelectorAll("a, button, .button");

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  window.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  window.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });