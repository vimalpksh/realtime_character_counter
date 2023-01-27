const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainEl = document.getElementById("remain-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

const updateCounter = function () {
  totalEl.innerText = textareaEl.value.length;
  remainEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
};

updateCounter();
