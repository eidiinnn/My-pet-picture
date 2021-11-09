const modal = document.getElementById("modal");
const modalButton = document.getElementsByClassName("upload-button");
const modalClose = document.getElementsByClassName("modalClose");

modalButton[0].addEventListener("click", () => {
  modal.style.display = "flex";
});

modalClose[0].addEventListener("click", () => {
  modal.style.display = "none";
});
