import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import WrapperPage from "../universal/WrapperPage/index";
import MoviesGenre from "./components/MoviesGenre/MoviesGenre";
import Layout from "../universal/Layout/index";

import { moviesAPI } from "../../API/api";
import { noPhoto } from "../../constants/constants";
import { selectMovies, setMovies } from "../../redux/moviesSlice";

const Movies = () => {
  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await moviesAPI.getMovies();
      dispatch(setMovies(data.data.results));
    };
    dataFetch();
  }, []);

  return (
    <Layout>
      <WrapperPage>
        <MoviesPage>
          <MoviesInner>
            <MoviesTitle>Movies</MoviesTitle>
            <MoviesGenre />

            {movies && movies.length !== 0 ? (
              <MoviesCollection>
                {movies.map((item, index) => (
                  <MoviePreview key={index}>
                    <img src={item.primaryImage === null ? noPhoto : item.primaryImage.url} alt="of film" />
                    <div>{item.titleText.text}</div>
                  </MoviePreview>
                ))}
              </MoviesCollection>
            ) : (
              <div>Загрузка данных</div>
            )}
          </MoviesInner>
        </MoviesPage>
      </WrapperPage>
    </Layout>
  );
};

const MoviesPage = styled.div`
  background-color: gray;
  width: 90%;
  margin: 0 auto;
  min-height: 87vh;
`;

const MoviesInner = styled.div`
  padding: 65px 65px 35px 65px;
  overflow: hidden;
`;

const MoviesTitle = styled.h1`
  margin-bottom: 25px;
`;

const MoviesCollection = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`;

const MoviePreview = styled.a`
  width: 23%;
  min-width: 150px;
  list-style: none;
  flex-grow: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Movies;
