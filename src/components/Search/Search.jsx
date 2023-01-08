import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import { moviesAPI } from "../../api/api";
import { noPhoto } from "../../constants/constants";
import Layout from "../universal/Layout/index";

import s from "./Search.module.scss";

let Search = () => {
  const [filteredData, setFilteredData] = useState([]);

  const dataFetch = async (q) => {
    let response = await moviesAPI.searchMovies(q.target.value);
    if (response.status === 200) {
      setFilteredData(response.data);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  };

  useEffect(() => {}, []);

  return (
    <Layout>
      <div className={s.wrapperSearch}>
        <div className={s.innerSearch}>
          <h1>Search</h1>
          <div className={s.searchField}>
            <TextField
              onChange={dataFetch}
              variant="outlined"
              fullWidth
              label="Start typing name of the movie ..."
            />
          </div>
          <div className={s.searchMovies}>
            {filteredData.map((item, key) => (
              <div className={s.movie} key={key}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
