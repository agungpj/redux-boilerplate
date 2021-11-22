import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularGames } from "../actions/gameAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularGames());
  });
  return (
    <div>
      <h1>Already Load Data</h1>
    </div>
  );
};

export default Home;
