import React from "react";
// import logo from './logo.svg';
// import { nanoid } from "nanoid";
import './App.css';
let AUTO_ID;
function App() {
  let AUTO_ID = 10;

function TodoListComponent() {
  const TODOLIST = [
    {
      id: 1,
      content: "1 Đọc sách",
    },{
      id: 2,
      content: "2 Mua thịt",
    },{
      id: 3,
      content: "3 Nấu ăn",
    },{
      id: 4,
      content: "4 Ngủ",
    },{
      id: 5,
      content: "5 Đi chợ",
    }, {
      id: 6,
      content: "6 Đạp xe",
    },
  ];
  const WORKDONE = [
    {
      id: 7,
      content: "Eead the book",
    },
    {
      id: 8,
      content: "Bought dog food",
    },
    {
      id: 9,
      content: "Go to the super market",
    },
    {
      id: 10,
      content: "Watch TV",
    },
  ];

  const [stateInputValue, setInputValue] = React.useState("");
  const [stateEditInputValue, setEditInputValue] = React.useState('')

  const [stateTodoList, setTodoList] = React.useState([...TODOLIST]);
  const [stateWorkDone, setWorkDone] = React.useState([...WORKDONE]);
  const [statefeedback, setFeedback] = React.useState("");


  function getSearchInputValue(event) {
    setInputValue(event.target.value);
    setFeedback("");
  }
  function getEditInputValue(event) {
    setEditInputValue(event.target.value);
  }
  // Thêm mới công việc
  function addJob() {
    if (stateInputValue) {
      AUTO_ID ++;
      const newTodoList = [...stateTodoList];
      const newObject = { id : AUTO_ID, content : stateInputValue } 
      newTodoList.push(newObject);
      setTodoList(newTodoList);
      console.log("Thêm công việc stateTodoList", newTodoList.id, newTodoList);
    } else {
      setFeedback(
        <p className="input-feedback">Vui lòng nhập công việc cần làm! 😠</p>
      );
      // setFeedback(
      //   <p className="edit-popup">Vui lòng nhập công việc cần làm! 😠</p>
      // );
    }
  } // -- Xóa công việc cần làm
  function deleteTodo(todoID) {
    console.log("Xóa công việc cần làm id:", todoID);
    // let deleteTodoList = [...stateTodoList];
    // console.log('deleteTodoList.id', deleteTodoList.id) 
    // deleteTodoList.splice( id - 1 , 1 );
    // console.log('deleteTodoList ', deleteTodoList )
    let newTodoList = stateTodoList.filter( (todo) => todo.id!== todoID )
    setTodoList(newTodoList);
  } 
  // -- Xóa công việc đã hoàn thành
  function deleteWorkDone(workDoneID) {
    console.log("Xóa công việc đã hoàn thành id:", workDoneID);
    let newTodoList = stateWorkDone.filter( (workDone) => workDone.id !== workDoneID)
    setWorkDone(newTodoList);
  }
  // -- Edit công việc cần làm - todo
  function editTodo(todoId) {
    console.log('Edit công việc cần làm id: ', todoId )
    let editTodo = stateTodoList.filter( (todo) => todo.id === todoId )
    // Truyền giá trị nội dung của object vào state ô edit
    console.log('editTodo. : ', editTodo[0].content )
    setEditInputValue( editTodo[0].content )

  }
    // -- Edit công việc đã xong - work done
  function editWorkDone(workDoneId) {
    console.log('Edit công việc đã làm id: ', workDoneId )
  }
  // Tiến hành Sửa - Ấn nút Edits
  function getEdit() {
    console.log('Sửa nội dung công việc')
    if (stateInputValue) {
      const newTodoList = [...stateTodoList];
      const newObject = { id : AUTO_ID, content : stateInputValue } 
      newTodoList.push(newObject);
      setTodoList(newTodoList);
      console.log("Thêm công việc stateTodoList", newTodoList.id, newTodoList);
    } else {
      setFeedback(
        <p className="input-feedback">Vui lòng nhập công việc cần làm! 😠</p>
      );
      // setFeedback(
      //   <p className="edit-popup">Vui lòng nhập công việc cần làm! 😠</p>
      // );
    }
  }


 // -- Xong việc Tích todo list chuyển sang done list
  function markDone(todoId) {
    console.log('Chuyển done => TODO id= ', todoId )
     // Cắt lấy todo có trạng thái dấu tích(dc bỏ) khác
    let newTodoList = stateTodoList.filter((todo) => todo.id !== todoId);
    
    // Chuyển sang state work done
    let newDoneList = stateTodoList.filter((todo) => todo.id === todoId);
    setTodoList(newTodoList);
    setWorkDone(stateWorkDone.concat( newDoneList) );
    setFeedback("");
  }

  // --  Bỏ Tích done list chuyển sang - việc cần làm 
  function markTodo(workDoneId) {
    console.log('Chuyển todo => DONE id= ', workDoneId )
    let newDoneList = stateWorkDone.filter((todo) => todo.id !== workDoneId);
 
    let newTodoList = stateWorkDone.filter((todo) => todo.id === workDoneId);
    setWorkDone(newDoneList);
    setTodoList(stateTodoList.concat(newTodoList));
    setFeedback("");
  }

  const todoListElement = stateTodoList.map((todo) => (
    // <Todo key = {index} todo={todo}> {todo} </Todo>
    <div key={todo.id} className=" todo ">

      <span>
        <input onClick={() => markTodo(todo.id)} type="checkbox" />

        <label>{todo.content}</label><br />
      </span>
      
      <span>
        <div onClick = { () => editTodo ( todo.id ) } className=" edit-todo ">
          <i className="fas fa-edit" />
        </div>   <span />
    
        <div onClick = { () => deleteTodo( todo.id ) } className=" delete-todo ">
          <i className="fas fa-times" />
        </div>
      </span>

    </div>
  ));

  const workDoneElement = stateWorkDone.map((workDone) => (
    // <WorkDone key = {id} content={workDone.content} > {workDone} </WorkDone>
    <div key={workDone.id}  className=" work-done ">
      <span>

        <input onClick={() => markDone( workDone.id )}
          defaultChecked type="checkbox" id="work-done" />

        <label htmlFor="work-done">{workDone.content}</label> <br />    

      </span>

      <span>
        <div onClick = {() => editWorkDone ( workDone.id ) } className=" edit-work-done ">
          <i className="fas fa-edit" />
        </div> <span />
    
        <div onClick={() => deleteWorkDone(workDone.id)} className=" delete-work-done ">
          <i className="fas fa-times" />
        </div>

      </span>

    </div>
  ));


  return (
      
   <>Nguyen</>
    
  );
}

export default App;

