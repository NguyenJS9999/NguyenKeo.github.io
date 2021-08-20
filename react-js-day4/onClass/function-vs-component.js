function Hello({name}) {
  return <h1>{name}</h1>
}

function hello(name) {
  return name;
}

function App() {
  return (
    <div>
      <Hello name="Tèo" />

      <h1>{hello("Tèo")}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
