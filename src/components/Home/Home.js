/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/homeSlice";
import { selectUserName } from "../../redux/userSlice";
import { selectRecommend } from "../../redux/homeSlice";

import db from "../../firebase";

import ImageSlider from "./components/ImageSlider";
import NewDisney from "./components/NewDisney";
import Originals from "./components/Originals";
import Recommends from "./components/Recommends";
import Trending from "./components/Trending";
import Viewers from "./components/Viewers";
import Layout from "../universal/Layout/index.tsx";

const Home = () => {
  const disptach = useDispatch();
  const userName = useSelector(selectUserName);
  const recommended = useSelector(selectRecommend);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  let imgSlide = [];

  useEffect(() => {
    if (recommended?.length === 0) {
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;

            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;

            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;

            case "imgSlide":
              imgSlide = [...imgSlide, { id: doc.id, ...doc.data() }];
              break;

            default:
              break;
          }
        });

        disptach(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            originals: originals,
            trending: trending,
            imgSlide: imgSlide,
          })
        );
      });
    }
  }, [userName]);

  return (
    <Layout>
      <Container>
        <ImageSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </Layout>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px)
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding:  calc(3.5w + 5px);   

  &:after {
    background: url("images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
