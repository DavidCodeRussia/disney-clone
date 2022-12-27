import React, { useEffect } from "react";
import styled from "styled-components";

import WrapperPage from "../universal/WrapperPage/index";
import MoviesGenre from "./MoviesGenre/MoviesGenre";
import Layout from "../universal/Layout/index";

import { moviesAPI } from "../../API/api";
import { setMoviesThunk } from "../../redux/moviesSlice.js";

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
];

const Movies = () => {
  useEffect(() => {
    setMoviesThunk();
  }, []);

  return (
    <Layout>
      <WrapperPage>
        <MoviesPage>
          <MoviesInner>
            <MoviesTitle>Movies</MoviesTitle>
            <MoviesGenre />

            {moviesAll ? (
              <MoviesCollection>
                {moviesAll.map((item, index) => (
                  <MoviePreview key={index}>
                    <img src={item.image} alt="of film" />
                    <div>{item.title}</div>
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
