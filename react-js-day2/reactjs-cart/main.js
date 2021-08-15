

function CartTitle() {
    return (
        <div className="cart-title">
        <span> <input type="checkbox" defaultValue /> </span>
        <span> SẢN PHẨM&nbsp;<span className="cart-title-number-items"><small>(3)</small></span> </span>
        <span> TÊN SẢN PHẨM</span>
        <span>ĐƠN GIÁ</span>
        <span>SỐ LƯỢNG</span>
        <span>THÀNH TIỀN</span>
        {/* nhầm */}
        <span style={{display: 'none'}}> <i className="fas fa-trash-alt" /> </span>
      </div>
    ) 
}

function Item1() {
    return (
        <div className="cart-item">
        {/* Chọn sản phẩm đó */}
        <span> <input type="checkbox" defaultValue /> </span>
        {/* Ảnh sản phẩm */}
        <span className=" cart-item-product-image ">
          <img src="https://www.4-acoustic.com/assets/images/d/PCS-318NB-01-867d001e.png" alt="cart-image" />
        </span>
        {/* Tên sản phẩm */}
        <span>PCS 318NB</span>
        {/* Đơn giá */}
        <span>65.200.000đ</span>
        {/* Chỉnh số lượng sp */}
        <span className="custom-number">
          <i className="fas fa-minus" />
          <input className="custom-number-input" type="text" defaultValue={1} />
          <i className="fas fa-plus" /> 
        </span>
        {/* Thành tiền */}
        <span>65.200.000đ</span>
        {/* icon thùng rác xóa đơn */}
        <span className=" delete-one " type="button" > <i className="fas fa-trash-alt " /> </span>
      </div>
    )
}

function Item2() {
    return (
        <div className="cart-item">
        {/* Chọn sản phẩm đó */}
        <span> <input type="checkbox" defaultValue /> </span>
        {/* Ảnh sản phẩm */}
        <span className=" cart-item-product-image ">
          <img src="https://www.4-acoustic.com/assets/images/d/PCS-318NB-01-867d001e.png" alt="cart-image" />
        </span>
        {/* Tên sản phẩm */}
        <span>PCS 218NB</span>
        {/* Đơn giá */}
        <span>33.000.000đ</span>
        {/* Chỉnh số lượng sp */}
        <span className="custom-number">
          <i className="fas fa-minus" />
          <input className="custom-number-input" type="text" defaultValue={2} />
          <i className="fas fa-plus" />
        </span>
        {/* Thành tiền */}
        <span>66.000.000đ</span>
        {/* icon thùng rác xóa đơn */}
        <span className=" delete-one " type="button" > <i className="fas fa-trash-alt " /> </span>
      </div>
    )
}

function Item3() {
    return (
        <div className="cart-item">
        {/* Chọn sản phẩm đó */}
        <span> <input type="checkbox" defaultValue /> </span>
        {/* Ảnh sản phẩm */}
        <span className=" cart-item-product-image ">
          <img src="https://www.4-acoustic.com/assets/images/d/PCS-318NB-01-867d001e.png" alt="cart-image" />
        </span>
        {/* Tên sản phẩm */}
        <span>PCS 118NB</span>
        {/* Đơn giá */}
        <span>22.500.000đ</span>
        {/* Chỉnh số lượng sp */}
        <span className="custom-number">
          <i className="fas fa-minus" />
          <input className="custom-number-input" type="text" defaultValue={3} />
          <i className="fas fa-plus" />
        </span>
        {/* Thành tiền */}
        <span>67.500.000đ</span>
        {/* icon thùng rác xóa đơn */}
        <span className=" delete-one " type="button" > <i className="fas fa-trash-alt " /> </span>
      </div> 
    )
}

function CartItem() {
    return (
     
        <div className="cart-items">
          {/* 1 */}
          {<Item1 />}
          {/* cart-item */}

          {/* 2 */}
          {<Item2 />}
          {/* cart-item */}

          {/* 3 */}
          {<Item3 />}
          {/* cart-item */}

        </div>
       
    )
}

function CartButton() {
    return (
        <div className=" cart-button-buy-delete-all ">
        <a href="./product.html"> <span className="button-buy" type="button"> TIẾP TỤC MUA HÀNG </span> </a>
        <span className="button-delete-all" type="button" > XÓA TOÀN BỘ </span>
      </div>
    )
}
function Cart() {
    return (
        <section className=" cart-container   container ">
            <div className="cart-container-page-title-container   container-fluid ">
            Giỏ hàng của bạn
            </div>

            {<CartTitle />}

            {<CartItem />}
            
            {<CartButton/>}
        
      </section>
        
    )
}

ReactDOM.render(<Cart />, document.getElementById("root"));