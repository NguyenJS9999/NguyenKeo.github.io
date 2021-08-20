function Product() {
  return <div>thẻ con</div>;
}

function ProductList() {
  return (
    <>
      <div>
        thẻ cha
        <Product />
      </div>
    </>
  );
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
