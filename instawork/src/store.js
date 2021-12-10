function reducer(state = { screen: "list" }, action) {
    console.log("Red::",action)
    switch (action.type) {
      case "SCREEN":
        return {
          ...state,
          screen: action.screen
        };
      case "EDIT":
          return {
            ...state,
            screen: action.screen,
            user : action.user
          };
      default:
        return state;
    }
  }
  
  export default reducer;