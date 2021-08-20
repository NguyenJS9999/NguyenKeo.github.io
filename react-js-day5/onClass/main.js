function App() {
  console.log("add new Job");
  const [stateInputValue, setStateInputValue] = React.useState("");
  const [stateTodoList, setStateTodoList] = React.useState([]);

  function addJob() {
    console.log("addJob");

    let toDoList = [...stateTodoList];
    toDoList.push(stateInputValue);

    console.log("toDoList", toDoList);

    setStateTodoList(toDoList);
  }
  function handleChange(event) {
    setStateInputValue(event.target.value);
  }
  let mapToDoList = stateTodoList.map((todo, index) => (
    <li key={index}>{todo}</li>
  ));

  return (
    <div>
      <h1>Todo List</h1>

      <ul> {mapToDoList} </ul>
      <input onChange={handleChange} type="text" placeholder="Tìm sản phẩm" />

      <button onClick={addJob}>Add job</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
