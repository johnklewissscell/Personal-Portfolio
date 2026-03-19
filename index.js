const projects = document.querySelectorAll(".project-square");
const programs = document.querySelectorAll(".program-card");
const grid = document.getElementById("program-grid");
const descBox = document.getElementById("program-desc");
const programTitle = document.getElementById("program-title");
const programText = document.getElementById("program-text");

let active = null;

programs.forEach((card) => {
  card.addEventListener("click", () => {
    if (active === card) {
      active = null;
      grid.classList.remove("active");
      programs.forEach((c) => c.classList.remove("active"));
      descBox.classList.remove("show");
      return;
    }

    active = card;

    grid.classList.add("active");

    programs.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    programTitle.textContent = card.dataset.name;
    programText.textContent = card.dataset.desc;
    descBox.classList.add("show");
  });
});

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const link = project.dataset.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
});
