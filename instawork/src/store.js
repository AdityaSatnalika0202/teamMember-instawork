const initialState = {
    screen: "list",
    user_list: [],
    user: {},
    loaded: false,
}


function reducer(state = initialState, action) {
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
                user: action.user
            };
        case "USER_LIST":
            return {
                ...state,
                user_list: action.user_list
            };
        case "LOADER":
            return {
                ...state,
                loaded: action.loaded
            };
        default:
            return state;
    }
}

export default reducer;