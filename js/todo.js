const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) { //todoList에 있는 모든 버튼들이 같은 event을 이용하게되는데, 어떤 todo를 삭제할지 알 수 없다. click타겟 체크할 수 있게 event인자를 넣어준다.
    console.log(event.target);

}

function paintToDo(newTodo) { //toDo를 그리는 역할, 그러나 이 function은 뭘 그려야할지 모름 ->so 함수안에 인자(newTodo)를 준다. => 아래 handleSubmit함수가 이 panitTodo 사용할것
    const li = document.createElement("li"); // li element만들기
    const span = document.createElement("span") //li 내부에 span만들기, li와 span 이 두 elemet를 만들었다.
    span.innerText = newTodo;  // text를 span안에 넣음. 이 텍스트는 사용자가 form에서 우리에게 준 newTodo 값.
    const button = document.createElement("button"); // li내부에 삭제버튼 만들기
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);     //span을 li내부에 넣자
    li.appendChild(button);
    toDoList.appendChild(li); //이 새로운 li를 toDOlIST에 추가한다.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //새로운 todo를 저장...
    toDoInput.value = ""; //입력창의 입력값 지움..
    paintToDo(newTodo); //handleToDoSubmit함수가 paintToDo함수를 사용하고, newTodo를 paintToDo함수로 보낸다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);