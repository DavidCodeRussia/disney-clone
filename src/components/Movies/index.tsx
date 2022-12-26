import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import WrapperPage from "../universal/WrapperPage";
import { genreMovies } from "../constants/constants.ts";
import Layout from "../universal/Layout/index.tsx";

import { selectFilters, setFilters } from "../../redux/moviesSlice";
// import { moviesAPI } from "../../API/api.ts";

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
  // const moviesAll = moviesAPI.getMovies();

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <Layout>
      <WrapperPage>
        <MoviesPage>
          <MoviesInner>
            <MoviesTitle>Movies</MoviesTitle>
            <MoviesGenre>
              {genreMovies &&
                genreMovies.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      dispatch(
                        setFilters({
                          category: index,
                          sortBy: item,
                        })
                      );
                    }}
                    className={filters.category === index ? "activeLink" : ""}
                  >
                    {item}
                  </li>
                ))}
            </MoviesGenre>

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

const MoviesGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    margin: 0 10px 0 0;
    cursor: pointer;
  }

  .activeLink {
    color: #000;
  }
`;

const MoviesCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const MoviePreview = styled.a`
  margin: 15px 15px 5px 0;
  width: 23%;
  min-width: 150px;
  list-style: none;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Movies;
