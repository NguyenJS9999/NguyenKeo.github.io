// import { nanoid } from 'nanoid/non-secure'
// nanoid()
// import React from "react";
// import "./styles.css";

// export default App;
let auto_ID = 5;
const TODOS = [
  {
    id: 1,
    content: "Learn English"
  },
  {
    id: 2,
    content: "Make a new video"
  },
  {
    id: 3,
    content: "Write a blog"
  }
];

const DONE = [
  {
    id: 4,
    content: "Build an app"
  },
  {
    id: 5,
    content: "Read books"
  }
];

function App() {
  const [todoList, setTodoList] = React.useState([...TODOS]);
  const [doneList, setDoneList] = React.useState([...DONE]);
  const [addInputValue, setAddInputValue] = React.useState("");
  
  const [feedback, setFeedback] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);

  const [editInputValue, setEditInputValue] = React.useState("");
  const [editId, setEditId] = React.useState("");

  function getAddInputValue(event) {
    setAddInputValue(event.target.value);
    setFeedback("");
  }

  //   Add new todo

  function addTodo() {
    if (addInputValue.trim()) {
      auto_ID ++;
      let newTodo = {
        id: auto_ID,
        content: addInputValue,
        completed: false
      };
      setTodoList([...todoList, newTodo]);
      setAddInputValue("");
    } else {
      setFeedback(<p className="input-feedback">Vui lòng nhập công việc!</p>);
    }
  }

  function enterAddTodo(event) {
    if (event.keyCode === 13) {
      addTodo();
    }
  }

  //   Remove Todo/Done

  function removeTodo(todoId) {
    let newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
    setFeedback("");
  }

  function removeDone(todoId) {
    let newDoneList = doneList.filter((todo) => todo.id !== todoId);
    setDoneList(newDoneList);
    setFeedback("");
  }

  //   Mark as todo/done

  function markDone(todoId) {
    let newTodoList = todoList.filter((todo) => todo.id !== todoId);
    let newDoneList = todoList.filter((todo) => todo.id === todoId);
    setTodoList(newTodoList);
    setDoneList(doneList.concat(newDoneList));
    setFeedback("");
  }

  function markTodo(todoId) {
    let newDoneList = doneList.filter((todo) => todo.id !== todoId);
    let newTodoList = doneList.filter((todo) => todo.id === todoId);
    setDoneList(newDoneList);
    setTodoList(todoList.concat(newTodoList));
    setFeedback("");
  }

  //   Edit todo/done
  //   Press Enter or click accept button to end edit

  function allowEdit(todo) {
    setEditId(todo.id);
    setEditInputValue(todo.content);
    setIsEditing(true);
    setFeedback("");
  }

  function handleTodoEdit(todo, index) {
    if (editInputValue.trim()) {
      let editedTodo = { ...todo };
      editedTodo.content = editInputValue.trim();
      let newTodoList = [...todoList];
      newTodoList[index] = editedTodo;
      setTodoList(newTodoList);
    } else {
      setEditInputValue(todo.content);
    }
  }

  function handleDoneEdit(done, index) {
    console.log('done', done)

    // if (editInputValue.trim()) {
      let editedDone = { ...done };
      
      editedDone.content = editInputValue.trim();
      let newDoneList = [...doneList];
      newDoneList[index] = editedDone;
      setDoneList(newDoneList);
    // } else {
    //   setEditInputValue(done.content);
    // }
  }

  //   Get edit input value when editing
  function getEditInputValue(event) {
    setEditInputValue(event.target.value);
  }

  return (
    <div className="container">
      <div className="todo-container">
        <h1 className="todo-header">Todo List</h1>
        <div className="add-container">
          <div className="input-container">
            <input
              className="todo-input"
              type="text"
              value={addInputValue}
              onChange={getAddInputValue}
              onKeyDown={(e) => enterAddTodo(e)}
              placeholder="Nhập công việc"
              autoComplete="off"
            />
            <button className="btn-add" onClick={addTodo}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          {feedback}
        </div>

        <ul className="todo-list">
          {todoList.length > 0 ? (
            todoList.map((todo, index) => (
              <li className="todo-item list-item" key={todo.id}>
                <div className="todo-item">
                  <input
                    className="check-input"
                    type="checkbox"
                    name="todo-list"
                    onClick={() => markDone(todo.id)}
                  />

                  {isEditing && editId === todo.id ? (
                    <input
                      type="text"
                      className="edit-input"
                      autoFocus
                      value={editInputValue}
                      onChange={getEditInputValue}
                      onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                          setIsEditing(false);
                          handleTodoEdit(todo, index);
                        }
                      }}
                      name="edit-input"
                      autoComplete="off"
                    />
                  ) : (
                    <span className="todo-content">{todo.content}</span>
                  )}
                </div>

                <div className="btn-group">
                  {isEditing && editId === todo.id ? (
                    <button
                      className="btn btn-accept"
                      onClick={() => {
                        setIsEditing(false);
                        handleTodoEdit(todo, index);
                      }}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  ) : (
                    <button
                      className="btn btn-edit"
                      onClick={() => allowEdit(todo)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  )}

                  <button
                    className="btn btn-remove"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-feedback">
              Không có công việc nào trong danh sách!
            </li>
          )}
        </ul>
      </div>

      <div className="done-container">
        <h1 className="todo-header">Done List</h1>
        <ul className="done-list">
          {doneList.length > 0 ? (
            doneList.map((done, index) => (
              <li className="done-item list-item" key={done.id}>
                <div className="todo-item">
                 
                  <input
                    className="checked-input"
                    type="checkbox"
                    name="done-list"
                    defaultChecked
                    onClick={() => markTodo(done.id)}
                  />

                  {isEditing && editId === done.id ? (
                    
                    <input
                      type="text"
                      className="edit-input"
                      autoFocus
                      value={editInputValue}
                      onChange={getEditInputValue}
                      onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                          setIsEditing(false);
                          handleDoneEdit(done, index);
                        }
                      }}
                      name="edit-input"
                      autoComplete="off"
                    />
                  ) : (
                    <span className="todo-content">{done.content}</span>
                  )}

                </div>
                <div className="btn-group">
                  {isEditing && editId === done.id ? (
                    <button
                      className="btn btn-accept"
                      onClick={() => {
                        setIsEditing(false);
                        handleDoneEdit(done, index);
                      }}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  ) : (
                    <button
                      className="btn btn-edit"
                      onClick={() => allowEdit(done)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  )}

                  <button
                    className="btn btn-remove"
                    onClick={() => removeDone(done.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-feedback">
              Không có công việc nào đã hoàn thành!
            </li>
          )}
        </ul>
      </div>
    </div>
 
  );

}

ReactDOM.render(<App />, document.getElementById("root"));
