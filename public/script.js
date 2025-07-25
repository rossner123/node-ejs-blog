const inputTitle = document.querySelector("#title");
const contadorTitle = document.querySelector("#contadorTitle");

inputTitle.addEventListener("input", () => {
  contadorTitle.textContent = `${inputTitle.value.length}/20`;
});

const inputContent = document.querySelector("#content");
const contadorContent = document.querySelector("#contadorContent");

inputContent.addEventListener("input", () => {
  contadorContent.textContent = `${inputContent.value.length}/50`;
});

const cancelBtn = document.querySelector("#cancel-btn")

cancelBtn.addEventListener("click", () => {
    location.href = "/"
})


