// function Todo({todo}) {
//   return (
//     <div className=" todo ">
//       <span>
//         <input type="checkbox" id="todo" />
//         <label htmlFor="todo">{todo}</label><br />
//       </span>

//       <span>
//         <div className=" edit-todo ">
//           <i className="fas fa-edit" />
//         </div>

//         <div onClick = {deleteJob}  className=" delete-todo ">
//           <i className="fas fa-times" />
//         </div>

//       </span>
//     </div>
//   )
// }
// function WorkDone( {workDone} ) {
//   return (
//     <div className=" work-done ">
//       <span>
//         <input type="checkbox" id="work-done" />
//         <label htmlFor="work-done">{workDone}</label><br />
//       </span>

//       <span>
//         <div className=" edit-work-done ">
//           <i className="fas fa-edit" />
//         </div>

//         <div className=" delete-work-done ">
//           <i className="fas fa-times" />
//         </div>
//       </span>

//     </div>
//   )
// }

function TodoListComponent() {
  const TODOLIST = [
    'Read the book',
    'Buy dog food',
]

  const WORKDONE = [
    'Eead the book',
    'Bought dog food',
    'Go to the super market',
];


  const [stateInputValue, setInputValue] = React.useState("");
  const [stateTodoList, setTodoList] = React.useState([...TODOLIST]);
  const [stateWorkDone, setWorkDone] = React.useState([...WORKDONE]);
  const [statefeedback, setFeedback] = React.useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    // console.log('stateInputValue', stateInputValue)
    setFeedback("");
  }
  // Thêm mới công việc
  function addJob() {
    if (stateInputValue) {
      // const newTodoList = [...stateTodoList];
      // newTodoList.push(stateInputValue);
      // setTodoList(newTodoList); 
      setTodoList( [...stateTodoList, stateInputValue] )
      setInputValue("");
      console.log('Thêm công việc stateTodoList', stateTodoList)
    } else {
      setFeedback(<p className="input-feedback">Vui lòng nhập công việc cần làm!</p>);
    }
  }
  // -- Xóa việc cần làm
  function deleteTodo(index) {
    console.log('Xóa công việc cần làm', index)
    let deleteTodoList = stateTodoList.slice( index, 1)
    // if (deleteTodoList == 1) {
    //   stateTodoList.slice( 0 )
    // } else {
    //   stateTodoList.slice( -1 )
    // }
    setTodoList(deleteTodoList);
  }

  // -- Xóa công việc đã hoàn thành
  function deleteWorkDone(index) {
  console.log('Xóa công việc đã hoàn thành ', index)  
  let deleteWorkDone = stateWorkDone.slice( index, 1)
    setWorkDone(deleteWorkDone)
  }

  // -- Chuyền việc đã hoàn thành về todo list
  // function removeWorkDone() {
  //   let newDoneList = stateWorkDone.filter((todo, index) => index !== todoIndex);
  //   setWorkDone(newDoneList);
  // }



  // Tích việc cần làm => đã xong

  // function markTodoList(event, todoIndex) {
  //   event.preventDefault();
  //   let newDoneList = doneList.filter((todo, index) => index !== todoIndex);
  //   let newTodoList = doneList.filter((todo, index) => index === todoIndex);
  //   setWorkDone(newDoneList);
  //   setTodoList(stateTodoList.concat(newTodoList));
  // }

    // function markDoneList(event, todoIndex) {
  //   event.preventDefault();
  //   let newTodoList = stateTodoList.filter((todo, index) => index !== todoIndex);
  //   let newDoneList = stateTodoList.filter((todo, index) => index === todoIndex);
  //   setTodoList(newTodoList);
  //   setWorkDone(doneList.concat(newDoneList));
  // }


  const todoListElement = stateTodoList.map( ( todo, index ) => 
    // <Todo key = {index} todo={todo}> {todo} </Todo>

    <div  key = {index} className=" todo ">
      <span>
        <input onClick={(event) => markTodo(event, index)} type="checkbox" />

        <label >{todo}</label><br />
      </span>      

      <span>
        <div className=" edit-todo ">
          <i className="fas fa-edit" />
        </div> <span/>

        <div onClick = {() => deleteTodo(index) }
          className=" delete-todo ">
          <i className="fas fa-times" />
        </div>

      </span>
    </div>

    )

  const workDoneElement = stateWorkDone.map( ( workDone, index ) => 
    // <WorkDone key = {index} workDone={workDone} > {workDone} </WorkDone> 
    <div key = {index} className=" work-done ">
      <span>
        <input onClick={(event) => markDoneList(event, index)} 
        defaultChecked  type="checkbox" id="work-done" />

        <label htmlFor="work-done">{workDone}</label><br />
      </span>

      <span>
        <div className=" edit-work-done ">
          <i className="fas fa-edit" />
        </div> <span/>
        
        <div onClick = {() => deleteWorkDone(index)} 
          className=" delete-work-done ">
          <i className="fas fa-times" />
        </div>
      </span>

    </div>
    )

  return (
   
<main className=" container-fluid ">
        <section className=" todo-list-container ">    
          <div className=" todo-list-form   container ">
            
            <h1>TO DO LIST</h1> {stateInputValue}
             {/* Nhập vào công việc cần làm */}
            <span className=" add-todo ">           
              <input onChange={handleChange} type="text"  value={stateInputValue} placeholder="Thêm công việc" />

              <div onClick={addJob} className=" add-todo-btn-add ">Thêm</div>
            </span>
            {statefeedback}

            <div className=" things-todo-list ">
              <input type="checkbox" id="things-todo-list-check-all" />&nbsp;
              <label className=" things-todo-list-title " htmlFor="things-todo-list-check-all">
                Những việc <u>cần</u> thực hiện
              </label>
              
                {/* <div className="  things-todo "> {todoListElement} </div> */}

              <div className=" things-todo "> 
                { stateTodoList.length > 0 ? 
                (todoListElement) : (
                  <li className="list-feedback">Không còn công việc nào trong danh sách!</li>
                )}
              </div>

              {/* Nút xóa các checked */}
              <div className=" del-all-checked ">
                <span>Remove to done list</span>
              </div>

            </div>
            {/* things-todo-list */}


            <div className=" works-done-list ">
              <input type="checkbox"/>

              <label className=" works-done-list-title " htmlFor="work-done-check-all">
                Những việc <u>đã</u> hoàn thành</label>
              {/* <div className="  works-dones "> {workDoneElement} </div> */}

              <div className=" works-dones "> 
                { stateWorkDone.length > 0 ? 
                (workDoneElement) : (
                  <li className="list-feedback">Không còn công việc nào đã hoàn thành!</li>
                )}
              </div>

              {/* Nút xóa các checked */}
              <div className=" del-all-checked " onClick={() => removeDoneToTodoList(index)}>
                <span>Remove todo list</span>
              </div>
            </div>
            {/* works-done-list */}


            <div className=" process ">
              <div className=" progress ">20%</div>
            </div>

          </div>

        </section>
      </main>


  
  );
}

ReactDOM.render(<TodoListComponent />, document.getElementById("root"));
