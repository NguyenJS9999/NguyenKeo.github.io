function Product(props) {
  console.log(props.price);
  // sử lý chuỗi số thành hiện thị dạng tiền tệ
  const productPrice = `${props.price} đ`;

  return (
    <div className=" product ">
      <a href="./index.html">
        <div className=" product-img ">
          <img src={props.image} alt="wine" />
        </div>
      </a>

      <div className=" product-description ">
        <div className=" product-name ">{props.name}</div>
        <div className=" product-price ">{productPrice}</div>
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
      price: "350,000",
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/05/xRPC_08-300x300.png.pagespeed.ic.UCY9UxbQJ5.webp",
    },

    {
      id: 2,
      name: "SINGLE MALT WHISKY AULTMORE 18",
      price: "1,900,000",
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2019/11/xRM_184-300x300.png.pagespeed.ic.EYEaAjopd1.webp",
    },

    {
      id: 3,
      name: "TALISKER 10 NĂM",
      price: "1,150,000",
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/07/xRM_113-300x300.png.pagespeed.ic.qDpg1ta2IT.webp",
    },

    {
      id: 4,
      name: "WHISKY LAGAVULIN 16 NĂM",
      price: "1,800,000",
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2019/11/xRM_110-300x300.png.pagespeed.ic.dBmUOD319N.webp",
    },

    {
      id: 5,
      name: "WHISKY SINGLE MALT SEXTON",
      price: "820,000",
      image:
        "https://ruouthuonghieu.com/wp-content/uploads/2020/05/xRM_03-300x300.png.pagespeed.ic.C9G0BOWg8T.webp",
    },
  ];

  // Hàm map tạo vòng lặp vẽ sp theo index của data
  const productsElement = products.map((product) => (
    <Product
      name={products.name}
      price={products.price}
      image={products.image}
    />
  ));
  // const productsElement
 
  // for ( let i = 0; i < products.length; i++) {
  //   console.log('i', i)
  //   productsElement = i
  // }

  console.log(productsElement)

  return (
    <div className=" products-container container ">
      {/* Sản phẩm được lặp */}

      {productsElement}
      
      <Product
      name={products[0].name}
      price={products[0].price}
      image={products[0].image}
    />
  

      
    </div>
  );
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
