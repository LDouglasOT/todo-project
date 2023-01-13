/* eslint-disable */
class Books {
  constructor(id, book, author) {
    this.id = id;
    this.todo = book;
    this.author = author;
  }
}
const boook = new Books(1, "hbjbjs", "author");
const removebook = () => {
  document.querySelectorAll(".removetodo").forEach((Element) => {
    Element.addEventListener("click", (e) => {
      e.preventDefault();
      const id = Element.getAttribute("data-id");
      let Storagedata = JSON.parse(localStorage.getItem("todo")) || [];
      Storagedata = Storagedata.filter((todo) => todo.id !== parseInt(id));
      localStorage.setItem("todo", JSON.stringify(Storagedata));
      addmarkup();
    });
  });
};
const maincontainer = document.querySelector(".awesomebooks");
const addmarkup = () => {
  maincontainer.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("todo")) || [];
  const ul = document.createElement("ul");
  data.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo.todo}</span><button class='removetodo' data-id='${todo.id}'>Remove todo</button>`;
    ul.append(li);
  });
  maincontainer.appendChild(ul);
  removebook();
};
addmarkup();
const addbook = () => {
  document.querySelector(".todosbmit").addEventListener("submit", (e) => {
    e.preventDefault();
    const Storagedata = JSON.parse(localStorage.getItem("todo")) || [];
    let book = new Books(
      Storagedata.length + 1,
      document.querySelector(".todoinput").value,
      document.querySelector(".author").value
    );
    const newdata = [...Storagedata, book];
    localStorage.setItem("todo", JSON.stringify(newdata));
    addmarkup();
  });
};
addbook();
