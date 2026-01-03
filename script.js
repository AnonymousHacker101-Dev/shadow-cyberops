const form = document.getElementById("contactForm");
const success = document.getElementById("success");
const waPopup = document.getElementById("waPopup");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    form.style.display = "none";
    success.style.display = "block";
  }, 800);
});

function closeWAPopup() {
  waPopup.style.display = "none";
  localStorage.setItem("waJoined", "true");
}

window.addEventListener("load", () => {
  if (!localStorage.getItem("waJoined")) {
    setTimeout(() => {
      waPopup.style.display = "flex";
    }, 1500);
  }
});
