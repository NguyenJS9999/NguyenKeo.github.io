function App() {
  let [count, setCount] = React.useState(100);
  let [inputValue, setInputValue] = React.useState("");

  function increaseCount() {
    console.log(inputValue);
    setCount(count + 1);
  }

  function updateInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" onChange={updateInput} />
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
