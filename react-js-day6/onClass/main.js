// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
// import { nanoid } from  ' https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.1.25/index.browser.js '
// import { nanoid } from 'nanoid'
// model.id = nanoid()
// console.log( nanoid )


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
  // ID edit
  const [stateIdEditItem, setIdEditItem] = React.useState('')

  const [stateTodoList, setTodoList] = React.useState([...TODOLIST]);
  const [stateWorkDone, setWorkDone] = React.useState([...WORKDONE]);
  const [statefeedback, setFeedback] = React.useState("");
  // Trạng thái đang chỉnh sửa hoặc đã sửa
  const [state_Editting, set_Editting] = React.useState('fas fa-edit')
  // nguyen
  function getSearchInputValue(event) {
    setInputValue(event.target.value);
    setFeedback("");
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
        <p className="input-feedback">Vui lòng nhập công việc cần làm!</p>
      );
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
    // Lọc ra công việc cần sửa
    let editTodoNeed = stateTodoList.filter( (todo) => todo.id === todoId )
    console.log('editTodoNeed : ', editTodoNeed)
    // Cập nhập state Input-Edit của mảng đã lọc có 1 object
    setEditInputValue( editTodoNeed[0].content )
    // Lưu id của todo cần sửa đó in state riêng
    setIdEditItem(todoId)
    // Chuyển icon Bút sửa - thành V đã xong
    // set_Editting( 'fas fa-check' ) 
    // nguyen
  }
  // -- Edit công việc đã xong - work done
  function editWorkDone(workDoneId) {
    console.log('Edit công việc đã làm id: ', workDoneId )
  }
  function getEdit() {
    console.log('Sửa nội dung công việc stateIdEditItem', stateIdEditItem )
    if (stateEditInputValue) {    
      let updateTodo = stateTodoList.map( (edit) => {
        if (edit.id === stateIdEditItem) {
          edit.content = stateEditInputValue;
        }
        return edit;
      });
      console.log('updateTodo', updateTodo)
    // for (let i = 0; i < stateTodoList.length; i++ )

    setTodoList(updateTodo)
    setFeedback(<p className="edit-popup">Đã chỉnh sửa job {stateIdEditItem} thành công 😁</p>);
     
    } else {
      setFeedback(<p className="edit-popup">Chưa có nội dung thay đổi công việc 😁</p>);
    }
  }

  // Lấy giá trị ô nhập khi chỉnh sửa
  function getEditInputValue(event) {
    setEditInputValue(event.target.value);
  }

 // -- Xong việc Tích todo list chuyển sang done list
  function markToDone(event, todoId) { console.log('Chuyển done => TODO id= ', todoId )
    let newTodoList = stateTodoList.filter((todo) => todo.id !== todoId);
    let newDoneList = stateTodoList.filter((todo) => todo.id === todoId);
    setTodoList(newTodoList);
    setWorkDone(stateWorkDone.concat(newDoneList) );
    setFeedback("");
  }

  // --  Bỏ Tích done list chuyển sang - việc cần làm 
  function markToTodo(event, workDoneId) {console.log('Chuyển todo => DONE id= ', workDoneId )
    let newDoneList = stateWorkDone.filter((todo) => todo.id !== workDoneId);
    let newTodoList = stateWorkDone.filter((todo) => todo.id === workDoneId);
    setWorkDone(newDoneList);
    setTodoList(stateTodoList.concat(newTodoList));
    setFeedback("");
  }
  function removeDoneToTodoList() {
    console.log('Xoá các check todo-list')
  }
  function removeDoneToTodoList() {
    console.log('Xoá các check todo-list')
  }
  const todoListElement = stateTodoList.map((todo) => (
    // <Todo key = {index} todo={todo}> {todo} </Todo>
    <div key={todo.id} className=" todo ">

      <span>
        <input onClick={(event) => markToDone(event ,todo.id)} type="checkbox" />

        <label>{todo.content}</label><br />
      </span>
      
      <span>
        <div onClick = { () => editTodo ( todo.id ) } className=" edit-todo ">
            {/* Sửa */} <i className="fas fa-edit" />
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

        <input onClick={(event) => markToTodo(event, workDone.id )}
          defaultChecked type="checkbox" id="work-done" />

        <label htmlFor="work-done">{workDone.content}</label> <br />    

      </span>

      <span>
        <div onClick = {() => editWorkDone ( workDone.id ) } className=" edit-work-done ">
          {/* Sửa */} {/* <i className="fas fa-edit" /> */}
          <i className= { state_Editting } />
        </div> <span />
    
        <div onClick={() => deleteWorkDone(workDone.id)} className=" delete-work-done ">
          <i className="fas fa-times" />
        </div>

      </span>

    </div>
  ));

  return (
    <main className=" container-fluid ">
      <section className=" todo-list-container ">
        <div className=" todo-list-form   container ">
          <h1>TO DO LIST</h1>
          {/* Nhập vào công việc cần làm */}
          <span className=" add-todo ">
            <input onChange={getSearchInputValue} type="text" value={stateInputValue} placeholder="Thêm công việc"/>

            <div onClick={addJob} className=" add-todo-btn-add ">Thêm</div>

          </span>  

          <span className=" add-todo ">  
            <input onChange={getEditInputValue} 
              value={stateEditInputValue}  
              type="text"  placeholder="Sửa công việc" />

            <div onClick={getEdit} className=" add-todo-btn-add ">Sửa</div>

          </span>
          
          {statefeedback}

          <div className=" things-todo-list ">
            <input type="checkbox" id="things-todo-list-check-all" /> &nbsp;
            
            <label
              className=" things-todo-list-title "
              htmlFor="things-todo-list-check-all">
              Những việc <u>cần</u> thực hiện
            </label>
            
            {/* <div className="  things-todo "> {todoListElement} </div> */}
            <div className=" things-todo ">
              {stateTodoList.length > 0 ? (
                todoListElement
              ) : (
                <li className="list-feedback">
                  Không còn công việc nào trong danh sách!
                </li>
              )}
            </div>
            {/* Nút xóa các checked */}
            <div className=" del-all-checked ">
              <span>Remove to done list</span>
            </div>

          </div>

          {/* things-todo-list */}

          <div className=" works-done-list ">
            <input type="checkbox" />

            <label
              className=" works-done-list-title "
              htmlFor="work-done-check-all"
            >
              Những việc <u>đã</u> hoàn thành
            </label>
            {/* <div className="  works-dones "> {workDoneElement} </div> */}

            <div className=" works-dones ">
              {stateWorkDone.length > 0 ? (
                workDoneElement
              ) : (
                <li className="list-feedback">
                  Không còn công việc nào đã hoàn thành!
                </li>
              )}
            </div>

            {/* Nút xóa các checked */}
            <div className=" del-all-checked " >
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
