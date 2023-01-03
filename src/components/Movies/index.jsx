import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import WrapperPage from "../universal/WrapperPage/index";
import MoviesGenre from "./components/MoviesGenre/MoviesGenre";
import Layout from "../universal/Layout/index";

import { moviesAPI } from "../../API/api";
import { noPhoto } from "../../constants/constants";
import { selectMovies, setMovies } from "../../redux/moviesSlice";
import { selectCategory } from "../../redux/moviesFilterSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const category = useSelector(selectCategory);

  useEffect(() => {
    const dataFetch = async () => {
      let response = await moviesAPI.getMovies(category);
      if (response.status === 200) {
        dispatch(setMovies(response.data));
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    };
    dataFetch();
  }, [category]);

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
                    <img
                      src={item.img === null ? noPhoto : item.img}
                      alt="of film"
                    />
                    <div>{item.name}</div>
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
  gap: 25px;
  flex-wrap: wrap;
`;

const MoviePreview = styled.a`
  list-style: none;
  max-width: 245px;

  img {
    max-width: 245px;
    min-height: 435px;
  }

  div {
    flex-wrap: wrap;
  }
`;

export default Movies;
