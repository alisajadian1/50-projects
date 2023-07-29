const panels = document.querySelectorAll(".panels");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    deactive(panel);
    panel.classList.add("active");
  });
});

const deactive = function (panel) {
  panels.forEach((panel) => panel.classList.remove("active"));
};
