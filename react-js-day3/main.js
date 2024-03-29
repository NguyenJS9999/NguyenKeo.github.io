// import React from "react";
// import ReactDOM from "react-dom";

function Product({ image, name, price }) {
  // console.log(price);
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
  // Dữ liệu mảng các đối tượng
  const PRODUCTS = [
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
      name: "TALISKER 10 YEARS",
      price: 1150000,
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/07/xRM_113-300x300.png.pagespeed.ic.qDpg1ta2IT.webp",
    },

    {
      id: 4,
      name: "WHISKY LAGAVULIN SMOKE 16 ",
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

    {
      id: 6,
      name: "F NegroAmaro",
      price: 1200000,
      image:
        "https://sanhruou.com/media/4058/catalog/F-NegroAmaro.jpg",
    },

    {
      id: 7,
      name: "IRONSTONE PETITE SIRAH",
      price: 498000,
      image:
        "https://sanhruou.com/media/1140/catalog/ironstone-petite-sirah.jpg",
    },

  ];
  // State/SetState, Mảng được clone lọc bị duỗi [...PRODUCTS]
  const [stateInputValue, setStateInputValue] = React.useState("");
  // const [stateSortValue, setStateSortvalue] = React.useState("default");
  const [stateProduct, setStateProducts] = React.useState(PRODUCTS);

  // Lấy dữ liệu ô input ép kiểu chữ ko thể viết hoa
  function handleChange(event) {
    setStateInputValue(event.target.value);
  }
  // Hàm Search - Tìm kiếm sản phẩm theo tên
  function findProduct() {
    // Cách 1: For i
    // let productSearch;
    // for (let i = 0; i < PRODUCTS.length; i++) {
    //   if (
    //     PRODUCTS[i].name.toLowerCase().trim() ==
    //     stateInputValue.toLowerCase().trim()
    //   ) {
    //     console.log("Tìm thấy sản phẩm bạn cần", [PRODUCTS[i]]);
    //     stateProduct = PRODUCTS[i];
    //     // return productSearch;
    //   } else {
    //     break;
    //   }
    // }
    // setStateProducts(stateProduct);

    // Cách 2; Filter - includes
    let productSearch = [...PRODUCTS].filter((nameProduct) =>
      nameProduct.name.toLowerCase().includes(stateInputValue.toLowerCase().trim())
    );
    // setStateProduct sp cập nhập giá trị vào biến được lọc theo stateProduct rồi
    console.log("productSearch", productSearch);
    setStateProducts(productSearch);
  }


  // Hàm MAP là vòng lặp qua mảng vẽ sp theo State của mảng giới hạn(Search) mới PRODUCTS
  const productsElement = stateProduct.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <>
      <div className="filters-search-container  container ">

        <div className=" search-product-input ">
          {/* <i onClick={searchProduct} className="fas fa-search   search-btn "> </i> */}
          <i onClick={findProduct} className="fas fa-search   search-btn ">
            {" "}
          </i>

          <input
            onChange={handleChange}
            placeholder="Tìm sản phẩm"
            type="text"
          ></input>
        </div>

      </div>

      <div className=" products-container container ">
        {/* Sản phẩm được lặp */}
        {/* Thông báo lỗi không tìm thấy sản phẩm theo search */}
        {stateProduct.length > 0 ? (
          productsElement
        ) : (
          <p className="search-feedback">Không tìm thấy sản phẩm phù hợp!</p>
        )}
      </div>
    </>
  );
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
