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

const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

//LOAD MORE
let shown = 12
const loadMore = document.querySelector("#load-more")
const posts = document.querySelectorAll(".post-container")

loadMore.addEventListener("click", () => {
  for (let i = shown; i < shown + 6 && i < posts.length; i++) {
    posts[i].style.display = "block"
  }

  shown += 6

  if (shown >= posts.length) {
    loadMore.style.display = "none"
  }
})