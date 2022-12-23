import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import WrapperPage from "../universal/WrapperPage/index.tsx";
import { genreMovies } from "../constants/constants.ts";
import { selectMovies } from "../../redux/moviesMovies/moviesMoviesSlice";
// import { movies } from "../../API/api.ts";

const Movies = () => {
  // const moviesAll = movies.getMovies();
  const moviesAll = [
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    },
    // {
    //   title: "The Shawshank Redemption",
    //   image:
    //     "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    // },
    // {
    //   title: "The Shawshank Redemption",
    //   image:
    //     "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    // },
    // {
    //   title: "The Shawshank Redemption",
    //   image:
    //     "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    // },
    // {
    //   title: "The Shawshank Redemption",
    //   image:
    //     "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    // },
  ];

  return (
    <WrapperPage>
      <MoviesPage>
        <MoviesInner>
          <MoviesTitle>Movies</MoviesTitle>
          <MoviesGenre>{genreMovies && genreMovies.map((item, key) => <li key={key}>{item}</li>)}</MoviesGenre>

          {moviesAll ? (
            <MoviesCollection>
              {moviesAll.map((item, key) => (
                <MoviePreview key={key}>
                  <img src={item.image} alt="of film" />
                  {/* <div>{item.title}</div> */}
                </MoviePreview>
              ))}
            </MoviesCollection>
          ) : (
            <div>Загрузка данных</div>
          )}
        </MoviesInner>
      </MoviesPage>
    </WrapperPage>
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

const MoviesGenre = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0 10px 0 0;
  }
`;

const MoviesCollection = styled.div`
  display: flex;
  width: 100%;
`;

const MoviePreview = styled.div`
  overflow: hidden;
  margin: 15px 15px 5px 0;
  width: 18%;
  img {
    // width: 18%;
    height: auto;
  }
`;

export default Movies;
