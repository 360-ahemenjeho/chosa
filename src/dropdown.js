export default function init() {
  document.querySelectorAll(".menu").forEach((menu) => {
    const triggerEl = menu.querySelector(".trigger");
    triggerEl.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
}
