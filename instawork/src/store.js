function reducer(state = { screen: "list" }, action) {
    console.log("Red::",action)
    switch (action.type) {
      case "SCREEN":
        return {
          ...state,
          screen: action.screen
        };
      default:
        return state;
    }
  }
  
  export default reducer;