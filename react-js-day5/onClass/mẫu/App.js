function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(["job1", "job2", "job3"]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function addJob() {
    const newTodoList = [...todoList];
    newTodoList.push(inputValue);
    setTodoList(newTodoList);
  }
  const todoListElement = todoList.map((todo, index) => (
    <li key={index}>
      <input type="checkbox" />
      {todo} <button>Remove</button>
    </li>
  ))
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={addJob}>Add job</button>
      <h1>Todo List</h1>

   

      <ul> {todoListElement} </ul>

      <h2>Done List</h2>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
