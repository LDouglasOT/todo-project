/* eslint-disable */
class Books{
  constructor(id,book,author){
    this.id=id
    this.todo=book
    this.author=author
  }
}
const removebook=()=>{
  document.querySelectorAll('.removetodo').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Element.getAttribute('data-id');
      let Storagedata = JSON.parse(localStorage.getItem('todo')) || [];
      Storagedata = Storagedata.filter((todo) => todo.id !== parseInt(id));
      localStorage.setItem('todo', JSON.stringify(Storagedata));
      addmarkup();
    });
  });
}

const maincontainer = document.querySelector('.awesomebooks');

const addmarkup = () => {
  maincontainer.innerHTML = '';
  const data = JSON.parse(localStorage.getItem('todo')) || [];
  const ul = document.createElement('ul');
  data.forEach((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todo.todo}</span><button class='removetodo' data-id='${todo.id}'>Remove todo</button>`;
    ul.append(li);
  });

  maincontainer.appendChild(ul);
  removebook()
};
addmarkup();

const addbook=()=>{
  document.querySelector('.todosbmit').addEventListener('submit', (e) => {
    e.preventDefault();
    const Storagedata = JSON.parse(localStorage.getItem('todo')) || [];
    let book=new Books(Storagedata.length + 1,document.querySelector('.todoinput').value,document.querySelector('.author').value)
    console.log(book)
    const newdata = [...Storagedata, book];
    localStorage.setItem('todo', JSON.stringify(newdata));
    addmarkup();
  });  
}
addbook()
let date=new Date()
document.querySelector(".dates").innerHTML=date


const add=document.querySelector(".add")
const list=document.querySelector(".list")
const contact=document.querySelector(".contact")
//This is where the different container selections start from
const formcontainer=document.querySelector(".formcontainer")
const bookscontainer=document.querySelector(".bookscontainer")
const contactcontainer=document.querySelector(".contactcontainer")

formcontainer.style.display="flex"
formcontainer.style.flexDirection="column"
bookscontainer.style.display="none"
contactcontainer.style.display="none"

add.addEventListener("click",()=>{
  formcontainer.style.display="flex"
  bookscontainer.style.display="none"
  contactcontainer.style.display="none"
})

list.addEventListener("click",()=>{
  formcontainer.style.display="none"
  bookscontainer.style.display="flex"
  contactcontainer.style.display="none"
})

contact.addEventListener("click",()=>{
  formcontainer.style.display="none"
  bookscontainer.style.display="none"
  contactcontainer.style.display="flex"
})

