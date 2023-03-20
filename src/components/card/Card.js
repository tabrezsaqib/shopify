import React from 'react';
import './Card.css';
import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import { useStateValue } from "../../redux/StateProvider";

function Card(props) {

  const [{ WishlistArray, cartArray }, dispatch] = useStateValue();

  function checkWishList(id) {
    if (WishlistArray.includes(id)) {
    } else {
      dispatch({
        type: "WISHLIST",
        value: id,
      });
    }
  }

  function checkCartList(id) {
    if (cartArray.includes(id)) {
    } else {
      dispatch({
        type: "CARTLIST",
        value: id,
      });
    }
  }

  return (
    <div>
        <div className="card">
      <div className="cardImg">
          {props.data && props?.data?.categoryId === 1001 ? (
              <img
                src={require(`../../assets/images/men/${
                  props.data && props?.data?.img
                }`)}
              />
            ) : props.data && props?.data?.categoryId === 1002 ? (
              <img
                src={require(`../../assets/images/women/${
                  props.data && props?.data?.img
                }`)}
              />
            ) : props.data && props?.data?.categoryId === 1003 ? (
              <img
                src={require(`../../assets/images/kids/${
                  props.data && props?.data?.img
                }`)}
              />
            ): props.data && props?.data?.categoryId === 1004 ? (
              <img
                src={require(`../../assets/images/beauty/${
                  props.data && props?.data?.img
                }`)}
              />
            ):
            (
              <img
                src={require(`../../assets/images/home&living/${
                  props.data && props?.data?.img
                }`)}
              />
            )
          }
      </div>
      <div className="cardDesc">
        <p>{props.data && props?.data?.brand}</p>
      </div>
      <div className="cardBtnDiv">
        <button className="cardBtn"
        onClick={() => checkWishList(props.data && props?.data?.itemID)}
        >
          <img src={wishlist} />
        </button>
        <button className="cardBtn"
        onClick={() => checkCartList(props.data && props?.data?.itemID)}
        >
          <img src={cart} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card