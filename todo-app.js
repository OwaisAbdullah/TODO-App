
/*-----------Create Element---------------*/ 

var todoList = document.getElementById("todo-list");

function listing(){
    var input = document.getElementById("input")

    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.setAttribute("class","liDesign")

    li.appendChild(liText);

    /*-------Create Delete Option--------*/ 
    var deleteIcon = document.createElement("i")
    var deleteBtn = document.createElement("button");
    var deleteBTnText = document.createTextNode("Delete");

    // deleteIcon.setAttribute("class","fa fa-trash")
    deleteBtn.setAttribute("class","deleteBtn");
    deleteBtn.setAttribute("onclick","deleteItem(this)");

    li.appendChild(deleteIcon);
    deleteBtn.appendChild(deleteBTnText);
    li.appendChild(deleteBtn);

    
    /*-------Create Edit Option--------*/     
    var editIcon = document.createElement("i")
    var editBtn = document.createElement("button");
    var editBTnText = document.createTextNode("Edit");

    // editIcon.setAttribute("class","fa fa-pencil-square-o")
    editBtn.setAttribute("class","editBtn");
    editBtn.setAttribute("onclick","editItem(this)");

    // li.appendChild(editIcon)
    editBtn.appendChild(editBTnText);
    li.appendChild(editBtn);


    todoList.appendChild(li);   
    input.value = "" 
}

function editItem(e){
    var getVal = e.parentNode.firstChild.nodeValue;
    var newVal = prompt("Enter Your New Task", getVal);
    e.parentNode.firstChild.nodeValue = newVal
}

function deleteItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    todoList.innerHTML = ""
}