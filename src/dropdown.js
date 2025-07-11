export default function initMenu() {
  document.querySelectorAll(".menu").forEach((menu) => {
    const triggerEl = menu.querySelector(".trigger");
    triggerEl.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
}
