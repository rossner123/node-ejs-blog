// TITLE
const inputTitle = document.querySelector("#title") || document.querySelector("#newTitle");
const contadorTitle = document.querySelector("#contadorTitle")

if (inputTitle && contadorTitle) {
  inputTitle.addEventListener("input", () => {
    contadorTitle.textContent = `${inputTitle.value.length}/20`;
  });
}

// CONTENT
const inputContent = document.querySelector("#content") || document.querySelector("#newContent");
const contadorContent = document.querySelector("#contadorContent");

if (inputContent && contadorContent) {
  inputContent.addEventListener("input", () => {
    contadorContent.textContent = `${inputContent.value.length}/50`;
  });
}

// CANCEL BUTTONS
const cancelBtn = document.querySelector("#cancel-btn");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    location.href = "/";
  });
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener("click", () => {
    location.href = "/";
  });
}
