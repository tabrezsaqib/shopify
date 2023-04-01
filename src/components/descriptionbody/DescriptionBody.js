import React, {useEffect} from "react";
import "./DescriptionBody.css";
import { useStateValue } from "../../redux/StateProvider";
import { NavLink, useNavigate } from "react-router-dom";

function DescriptionBody(props) {
  const [{ cartArray }, dispatch] = useStateValue();

  const Navigate = useNavigate();
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
    <div className="DescriptionBody">
      {props.data &&
        props.data.map((element) => {
          return (
            <>
              <div className="DescriptionImg">
                <div className="DescriptionImgContainer">
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
              </div>
              <div className="DescriptionContent">
                <p className="DescriptionContentBrandName">{element?.brand}</p>
                <p className="DescriptionContentPrice">
                  {" "}
                  <span>MRP : $</span> {element?.price}
                </p>

                <p className="DescriptionContentDescription">
                  <span className="DescriptionContentDescriptionSpan">
                    Description :{" "}
                  </span>
                  {element?.description}
                </p>
                <p className="DescriptionContentOffer">
                  <span className="DescriptionContentOfferSpan">Offer : </span>
                  {element?.offer}
                </p>

                {element?.size && (
                  <select>
                    <option disabled selected>
                      Size
                    </option>
                    {element?.size &&
                      element?.size.map((element) => {
                        return <option>{element}</option>;
                      })}
                  </select>
                )}

                <p>{element?.stock}</p>

                <details>
                  <summary className="DescriptionContentSellerHeader">
                    Seller
                  </summary>
                  <p className="DescriptionContentSeller">{element?.seller}</p>
                </details>
                <div className="DescriptionBtn">
                  <button onClick={() => handleCart(element?.itemID)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default DescriptionBody;