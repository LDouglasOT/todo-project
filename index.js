const maincontainer=document.querySelector(".awesomembooks")
const addmarkup = ()=>{
maincontainer.innerHTML=""
let data=JSON.parse(localStorage.getItem("todo")) || []
const ul=document.createElement("ul")
data.forEach(todo => {
    const li=document.createElement("li")
    li.innerHTML=`<span>${todo.todo}</span><button class="removetodo" data-id="${todo.id}">Remove todo</button>`
    ul.append(li)
});

maincontainer.appendChild(ul)
    document.querySelectorAll(".removetodo").forEach(Element=>{
    Element.addEventListener("click",(e)=>{
    e.preventDefault()
    const id=Element.getAttribute("data-id")
    let Storagedata=JSON.parse(localStorage.getItem("todo")) || []
    console.log(Storagedata)
    Storagedata=Storagedata.filter(todo=>todo.id !== parseInt(id))
    localStorage.setItem("todo",JSON.stringify(Storagedata))
    addmarkup()
})})

}
addmarkup()


document.querySelector(".todosbmit").addEventListener("submit",(e)=>{
    e.preventDefault()
    let Storagedata=JSON.parse(localStorage.getItem("todo")) || []
    const data={
        "todo":document.querySelector(".todoinput").value,
        "id":Storagedata.length+1
    }
    const newdata=[...Storagedata,data]
    localStorage.setItem("todo",JSON.stringify(newdata))
    addmarkup()
})
    
