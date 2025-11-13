document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const dropdown = button.nextElementSibling;
      const isOpen = dropdown.classList.contains("open");

      // Fermer tous les autres
      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== dropdown) {
          d.style.maxHeight = "0px";
          d.classList.remove("open");
          d.previousElementSibling.textContent = "+";
        }
      });

      // Basculer celui-ci
      if (isOpen) {
        dropdown.style.maxHeight = "0px";
        dropdown.classList.remove("open");
        button.textContent = "+";
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        dropdown.classList.add("open");
        button.textContent = "–";
      }
    });
  });
});