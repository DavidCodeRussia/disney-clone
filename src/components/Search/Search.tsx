import React from "react";
import Layout from "../universal/Layout/index";

import s from "./Search.module.scss";

let Search = () => {
  return (
    <Layout>
      <div className={s.wrapperSearch}>
        <div className={s.innerSearch}>
          <h1>Search</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
