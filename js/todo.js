const toDoForm = document.getElementById("todo-form")
const toDOInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []  //로컬 스토리지에 들어할 배열의 빈 공간 생성

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))  //데이터를 배열 형태로 만들어 주기 위해 JSON.stringify() 를 사용(string으로 바꿈)
}

function deleteToDo(event) {
  const li = event.target.parentElement 	                   //클릭한 button 의 부모 요소인 li 선택
  li.remove()                                                //선택한 li태그 삭제
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))  // 입력되는 값의 id 와 li 의 id가 다른 것만 남긴다. 같으면 배열에서 제외한다.
  saveToDos()                                                // 지우고 남은 배열을 로컬스토리지에 담아준다.
}

function paintToDo(newTodo) {
  const li = document.createElement("li")           //li태그를 생성한다
  li.id = newTodo.id                                //li 에 입력값에 붙는 Id 숫자 값을 넣어준다.
  const span = document.createElement("span")       //span태그를 생성한다
  span.innerText = newTodo.text                     //span 태그 안에 input 값 넣기
  const button = document.createElement("button")   //button 태그 생성
  button.innerText = "❌"                          //위에서 생성한 button태그 안에 ❌이모지 넣기
  button.addEventListener("click", deleteToDo)      //❌를 클릭시 삭제됨 (함수 실행)
  li.appendChild(span)                              //li태그의 자식으로 span 태그 넣기
  li.appendChild(button)
  toDoList.appendChild(li)  //ul 태그에 위에서 만든 li 넣어주기  
}

function handleToDoSubmit(event) {
  event.preventDefault()          //브라우저의 기본적인 js 기능을 멈춤
  const newTodo = toDOInput.value //input에 입력된 값을 변수에 할당한다
  toDOInput.value = ""            //input을 비운다
  const newTodoObj = {            // 객체를 선언하고 할당한다.
    text: newTodo,                // 객체 안의 newTodo의 값을 받고
    id: Date.now()                //id의 value로 랜덤 번호를 받는다.
  }
  toDos.push(newTodoObj)          //위에서 받은 객체를 배열에 담는다.
  paintToDo(newTodoObj)           //객체를 그리는 함수로 전달한다.
  saveToDos()                     //배열로 전달된 객체를 로컬스토리지에 담는다.
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY) 
if (savedToDos !== null){                     // 비어있지 않다면,  
  const parsedToDos = JSON.parse(savedToDos)  //해당 변수에 배열 형태로 값 추가
  toDos = parsedToDos                         //기존에 작성된 값을 배열에 추가
  parsedToDos.forEach(paintToDo)              // 배열의 각 아이템들이 돌면서 함수 실행  
}
