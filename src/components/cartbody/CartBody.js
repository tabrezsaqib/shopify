import React, { useEffect, useState } from "react";
import "./CartBody.css";
import { useStateValue } from "../../redux/StateProvider";
import { NavLink } from "react-router-dom";

function CartBody() {
  const [{ WishlistArray, apiData, cartArray }, dispatch] = useStateValue();

  const [temp, setTemp] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  function refresh() {
    let temp = [];
    let total = 0;

    apiData &&
      apiData.map((element) => {
        cartArray &&
          cartArray.map((elem) => {
            if (element?.itemID === elem) {
              if (element?.stock) {
                temp.push(element);
                total = total + element?.price;
              }
            }
          });
      });
    setTemp(temp);
    setTotalPrice(total);
  }

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    refresh();
  }, [cartArray]);

  function removeItem(id) {
    let result =
      cartArray &&
      cartArray.filter((element) => {
        return element !== id;
      });

    dispatch({
      type: "CARTLIST",
      value: result,
    });

    refresh();
  }

  function addToCart(id) {
    if (WishlistArray.includes(id)) {
      //do nothing
    } else {
      let temp = WishlistArray;
      temp.push(id);

      dispatch({
        type: "WISHLIST",
        value: temp,
      });
    }
  }

  return (
    <div className="CartBody">
      {temp.length > 0 ? (
        <>
          <div className="CartBodyContainer">
            {temp &&
              temp.map((element) => {
                return (
                  <div className="itemContainer">
                    <div className="itemImg">
                      {element && element?.categoryId === 1001 ? (
                        <img
                          src={require(`../../assets/images/men/${element?.img}`)}
                        />
                      ) : element && element?.categoryId === 1002 ? (
                        <img
                          src={require(`../../assets/images/women/${element?.img}`)}
                        />
                      ) : element && element?.categoryId === 1003 ? (
                        <img
                          src={require(`../../assets/images/kids/${element?.img}`)}
                        />
                      ) : element && element?.categoryId === 1004 ? (
                        <img
                          src={require(`../../assets/images/beauty/${element?.img}`)}
                        />
                      ) : (
                        <img
                          src={require(`../../assets/images/home&living/${element?.img}`)}
                        />
                      )}
                    </div>
                    <div className="itemContent">
                      <p>{element?.brand}</p>

                      <p>$ {element?.price}</p>

                      {element?.stock === true ? (
                        <p className="InStock">In Stock</p>
                      ) : (
                        <p className="outOfStock">Out of Stock</p>
                      )}

                      <div>
                        <button
                          onClick={() => removeItem(element?.itemID)}
                          className="wishlistPageRemoveBtn"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => addToCart(element?.itemID)}
                          className="wishlistPageCartBtn"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="cartTotal">
            <h1>Total Amount : $ {totalPrice}</h1>
            <NavLink to="/checkout">
              <button>Checkout</button>
            </NavLink>
          </div>
        </>
      ) : (
        <h1 className="noItemFound">Sorry your cart is empty!</h1>
      )}
    </div>
  );
}

export default CartBody;