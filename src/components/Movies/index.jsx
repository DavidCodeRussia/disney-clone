import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import WrapperPage from "../universal/WrapperPage/index";
import MoviesGenre from "./components/MoviesGenre/MoviesGenre";
import Layout from "../universal/Layout/index";

import { moviesAPI } from "../../API/api";
import { noPhoto, genreMovies } from "../../constants/constants";
import { selectMovies, setMovies } from "../../redux/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [choosedIndexMovies, setChoosedIndexMovies] = useState(0);

  const currentCategories = genreMovies.find((item, ind) => ind === choosedIndexMovies);

  let [filteredMovies, setFilteredMovies] = useState();

  console.log("movies.length > 0", movies.length > 0);
  console.log("movies[0].titleType.categories.length > 1", movies[0].titleType.categories.length > 1);

  useEffect(() => {
    if (movies.length > 0 && movies[0].titleType.categories.length > 1) {
      let filtered = movies.filter((item, inx) => item.titleType.categories[0].value === currentCategories);
      console.log("filtered", filtered);
      setFilteredMovies(filtered);
    }
    console.log("filteredMovies", filteredMovies);
  }, [movies, currentCategories]);

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
            <MoviesGenre setChoosedIndexMovies={setChoosedIndexMovies} />

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
  gap: 25px;
  flex-wrap: wrap;
`;

const MoviePreview = styled.a`
  list-style: none;

  img {
    max-width: 245px;
    min-height: 435px;
  }
`;

export default Movies;
