import axios from "axios";
import { popularGames } from "../api";

export const getPopularGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGames());
  try {
    dispatch({
      type: "ADD_POPULAR_GAMES_LOAD",
    });

    dispatch({
      type: "ADD_POPULAR_GAMES_SUCCESS",
      payload: {
        popular: popularData,
        // get from reducer initstate
      },
    });
  } catch (e) {
    dispatch({
      type: "ADD_POPULAR_GAMES_FAIL",
    });
  }
};
