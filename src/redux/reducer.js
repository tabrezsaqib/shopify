export const initialState = {
    apiData: [],
    WishlistArray: [],
    cartArray: [],
    name: "Tabs",
    age: 26
  };

  export const actionTypes = {
    APIDATA: "APIDATA",
    NAME: "NAME",
    AGE: "AGE",
    WISHLIST: "WISHLIST",
    CARTLIST: "CARTLIST"
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case "APIDATA":
        return { ...state, apiData: action.value };
      
      case "WISHLIST":
          return {
            ...state,
            WishlistArray: action.value,
          };
    
      case "CARTLIST":
          return {
            ...state,
            cartArray: action.value,
          };
    }

    
  };