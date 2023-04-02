import React, { useEffect, useState } from "react";
import "./WishlistBody.css";
import { useStateValue } from "../../redux/StateProvider";
import { NavLink, useNavigate } from "react-router-dom";

function WishlistBody() {
    const [{ WishlistArray, apiData, cartArray }, dispatch] = useStateValue();

    const [temp, setTemp] = useState([]);

    const Navigate = useNavigate();

    function refresh() {
      let temp = [];
  
      apiData &&
        apiData.map((element) => {
          WishlistArray &&
            WishlistArray.map((elem) => {
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
    }, [WishlistArray]);

    function removeItem(id) {
      let result =
        WishlistArray &&
        WishlistArray.filter((element, index, array) => {
          return element !== id;
        });
  
      dispatch({
        type: "WISHLIST",
        value: result,
      });
  
      // console.log(result);
      // console.log(WishlistArray);
  
      refresh();
    }

    function addtoCart(id){
      if(cartArray.includes(id)){
        //do nothing
      }
      else{
        let temp = cartArray;
        temp.push(id);

        dispatch({
          type: "CARTLIST",
          value: temp,
        });
      }
      Navigate("/cart");
    }
    function handleCart(id) {
      if (cartArray.includes(id)) {
        //do nothing
      } else {
        let temp = cartArray;
        temp.push(id);
  
        dispatch({
          type: "CARTLIST",
          value: temp,
        });
      }
  
      Navigate("/cart");
    }
  return (
  <div className="WishListBodyParent">
    {temp.length > 0 ? (
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

                  <p>$ {element?.price}</p>
                  {element?.stock === true ? (
                    <p className="InStock">In Stock</p>
                  ) : (
                    <p className="outOfStock">Out of Stock</p>
                  )}
                  <div>
                    <button
                      onClick={() => removeItem(element?.itemID)}
                      // onClick={() => alert(element?.itemID)}
                      className="wishlistPageRemoveBtn"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => addtoCart(element?.itemID)}
                      className="wishlistPageCartBtn"
                      disabled={element?.stock ? false : true}
                    >
                      Cart
                    </button>
                      <button
                        onClick={() => handleCart(element?.itemID)}
                        disabled={element?.stock ? false : true}
                        className="wishlistPageBuyBtn"
                      >
                        Buy Now
                      </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    ) : (
      <h1 className="noItemFoundWishList">
        Your wishlist is empty!
      </h1>
    )}
  </div>
  );
}

export default WishlistBody