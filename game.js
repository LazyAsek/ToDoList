
const list = document.querySelector(".list")

function createTask(){
    let nextline = document.createElement("br")
    createCheckbox() 
    createText()
    list.appendChild(nextline)
}

function createCheckbox(){
    let box = document.createElement("input")
    box.setAttribute("type","checkbox")
    box.setAttribute("class","box")
    list.appendChild(box)
}

function createText(){
    const text = document.createElement("input")
    text.setAttribute("type","text")
    text.setAttribute("class","text")
    list.appendChild(text) 
}

