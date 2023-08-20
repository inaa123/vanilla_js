const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo() { //toDo를 그리는 역할
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //새로운 todo를 저장...
    toDoInput.value = ""; //입력창의 입력값 지움..
}

toDoForm.addEventListener("submit", handleToDoSubmit);