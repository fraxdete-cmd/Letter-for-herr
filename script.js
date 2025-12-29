const readBtn = document.getElementById("readBtn");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");

readBtn.addEventListener("click", () => {
  intro.style.display = "none";
  letter.style.display = "block";
});
