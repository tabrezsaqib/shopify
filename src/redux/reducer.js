export const initialState = {
    apiData: [],
    WishlistArray: [],
    cartArray: [],
    searchContext: [],
  };

  export const actionTypes = {
    APIDATA: "APIDATA",
    NAME: "NAME",
    AGE: "AGE",
    WISHLIST: "WISHLIST",
    CARTLIST: "CARTLIST",
    SEARCH_CONTENT: "SEARCH_CONTENT"
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

      case "SEARCH_CONTENT":
        return {
          ...state,
          searchContext: [...state.searchContext, action.value],
        };      
    }
  };