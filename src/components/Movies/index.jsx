import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";
import { useSelector, useDispatch } from "react-redux";

import WrapperPage from "../universal/WrapperPage/index";
import MoviesGenre from "./components/MoviesGenre/MoviesGenre";
import Layout from "../universal/Layout/index";

import { moviesAPI } from "../../api/api";
import { noPhoto } from "../../constants/constants";
import {
  selectLoading,
  selectMovies,
  setMovies,
  setLoading,
} from "../../redux/moviesSlice";
import { selectCategory, selectSort } from "../../redux/moviesFilterSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const category = useSelector(selectCategory);
  const sortBy = useSelector(selectSort);
  const amontItemsForLoading = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  useEffect(() => {
    const dataFetch = async () => {
      dispatch(setLoading(true));

      let response = await moviesAPI.getMovies({
        category: category === "All" ? "" : category,
        sortBy: sortBy,
      });
      if (response.status === 200) {
        dispatch(setMovies(response.data));
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    };
    dataFetch();
  }, [category, sortBy]);

  return (
    <Layout>
      <WrapperPage>
        <MoviesPage>
          <MoviesInner>
            <MoviesTitle>Movies</MoviesTitle>
            <MoviesGenre />

            <MoviesCollection>
              {movies && movies.length !== 0 && !loading
                ? movies.map((item, index) => (
                    <MoviePreview key={index}>
                      <img
                        src={item.img === null ? noPhoto : item.img}
                        alt="of film"
                      />
                      <div>
                        Name movie:
                        <span
                          style={{
                            color: "#000",
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <div>
                        Year of issue:{" "}
                        <span
                          style={{
                            color: "#000",
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <div>
                        Rating:
                        <span
                          style={{
                            color: "#000",
                            marginLeft: "5px",
                          }}
                        >
                          {item.rating}
                        </span>
                      </div>
                      <div>
                        Movie duration
                        <span
                          style={{
                            color: "#000",
                            marginLeft: "5px",
                          }}
                        >
                          {item.durationTime}
                        </span>
                      </div>
                    </MoviePreview>
                  ))
                : amontItemsForLoading.map((item, key) => (
                    <MoviePreview key={key}>
                      <ContentLoader
                        speed={2}
                        width={245}
                        height={529}
                        viewBox="0 0 245 529"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                      >
                        <rect
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          width="245"
                          height="435"
                        />
                        <rect
                          x="0"
                          y="443"
                          rx="5"
                          ry="5"
                          width="245"
                          height="18"
                        />
                        <rect
                          x="0"
                          y="471"
                          rx="5"
                          ry="5"
                          width="245"
                          height="18"
                        />
                        <rect
                          x="0"
                          y="498"
                          rx="5"
                          ry="5"
                          width="245"
                          height="18"
                        />
                      </ContentLoader>
                    </MoviePreview>
                  ))}
            </MoviesCollection>
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
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;
`;

const MoviePreview = styled.a`
  list-style: none;
  max-width: 245px;

  animation: 0.5s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    max-width: 245px;
    min-height: 435px;
  }

  div {
    flex-wrap: wrap;
  }
`;

export default Movies;
