// import React from "react";
// import ReactDOM from "react-dom";

function Product({ image, name, price }) {
  console.log(price);
  // sử lý chuỗi số thành hiện thị dạng tiền tệ
  const productPrice = price;
  const productPriceConvertMoney = productPrice.toLocaleString("vi-VN") + " đ";

  return (
    <div className=" product ">
      <a href="./index.html">
        <div className=" product-img ">
          <img src={image} alt="wine" />
        </div>
      </a>

      <div className=" product-description ">
        <div className=" product-name ">{name}</div>
        <div className=" product-price ">{productPriceConvertMoney}</div>
        <div className=" product-see-detail " type="button">
          Chi tiết
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  const products = [
    {
      id: 1,
      name: "GIN BEEFEATER",
      price: 3500000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/05/xRPC_08-300x300.png.pagespeed.ic.UCY9UxbQJ5.webp",
    },

    {
      id: 2,
      name: "SINGLE MALT WHISKY AULTMORE 18",
      price: 1900000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2019/11/xRM_184-300x300.png.pagespeed.ic.EYEaAjopd1.webp",
    },

    {
      id: 3,
      name: "TALISKER 10 NĂM",
      price: 1150000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/07/xRM_113-300x300.png.pagespeed.ic.qDpg1ta2IT.webp",
    },

    {
      id: 4,
      name: "WHISKY LAGAVULIN 16 NĂM",
      price: 1800000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2019/11/xRM_110-300x300.png.pagespeed.ic.dBmUOD319N.webp",
    },

    {
      id: 5,
      name: "WHISKY SINGLE MALT SEXTON",
      price: 820000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/05/xRM_03-300x300.png.pagespeed.ic.C9G0BOWg8T.webp",
    },
  ];
  // Hàm map tạo vòng lặp vẽ sp theo index của data
  const productsElement = products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));
  // Tìm kiếm sản phẩm theo tên

  const [inputValue, setInputValue] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([...products]);

  
  // Lấy dữ liệu ô input ép kiểu chữ ko thể viết hoa
  function handleChange(event) {
    setInputValue(event.target.value.toLowerCase().trim() );
  }
  // In giá trị của ô input - tìm kiếm theo giá trị ô input
  function searchProduct() {
    console.log("Giá trị ô input: ", inputValue);
  }

  // React.useEffect(() => {
  //   let results = products.filter( (product) => 
  //       product.name.includes(inputValue) ||
  //       product.price.includes(inputValue)
  //   );
  //   setSearchResults(results);
  // }, [inputValue]);

  return (
    <>
      <div className=" container " >{inputValue}</div>  

      <div className=" search-product-input container ">
        <form>
          <i onClick={searchProduct} className="fas fa-search   search-btn "> </i>
          <input value={inputValue} onChange={handleChange} placeholder="Tìm sản phẩm"  type="text"></input>
        </form>
      </div>


      <div className=" products-container container ">
        {/* Sản phẩm được lặp */}
        {productsElement}
      </div>
    </>
  );
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
