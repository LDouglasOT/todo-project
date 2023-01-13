/* eslint-disable */
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const contact = document.querySelector(".contact");
//This is where the different container selections start from
const formcontainer = document.querySelector(".formcontainer");
const bookscontainer = document.querySelector(".bookscontainer");
const contactcontainer = document.querySelector(".contactcontainer");

formcontainer.style.display = "flex";
formcontainer.style.flexDirection = "column";
bookscontainer.style.display = "none";
contactcontainer.style.display = "none";

add.addEventListener("click", () => {
  formcontainer.style.display = "flex";
  bookscontainer.style.display = "none";
  contactcontainer.style.display = "none";
});

list.addEventListener("click", () => {
  formcontainer.style.display = "none";
  bookscontainer.style.display = "flex";
  contactcontainer.style.display = "none";
});

contact.addEventListener("click", () => {
  formcontainer.style.display = "none";
  bookscontainer.style.display = "none";
  contactcontainer.style.display = "flex";
});
