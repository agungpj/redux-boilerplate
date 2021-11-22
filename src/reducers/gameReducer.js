const initState = {
  loading: false,
  errorMsg: "",
  popular: [],
  searched: [],
};
const getPopularGamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POPULAR_GAMES_LOAD":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "ADD_POPULAR_GAMES_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get anime",
      };
    case "ADD_POPULAR_GAMES_SUCCESS":
      return {
        ...state,
        loading: false,
        popular: action.payload,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return state;
  }
};

export default getPopularGamesReducer;
