import React, { useEffect, useState } from "react";
import "./CartBody.css";
import { useStateValue } from "../../redux/StateProvider";
import { NavLink } from "react-router-dom";

function CartBody() {
  const [{ WishlistArray, apiData, cartArray }, dispatch] = useStateValue();

  const [temp, setTemp] = useState([]);

  function refresh() {
    let temp = [];

    apiData &&
      apiData.map((element) => {
        cartArray &&
          cartArray.map((elem) => {
            if (element?.itemID === elem) {
              temp.push(element);
            }
          });
      });
    setTemp(temp);
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
    <div className="WishlistCart">
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

                <p>Rs. {element?.price}</p>

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

                  <NavLink to="/checkout/" state={{ data: 10001 }}>
                    <button
                      onClick={() => alert(element?.itemID)}
                      className="wishlistPageBuyBtn"
                    >
                      Buy Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CartBody;