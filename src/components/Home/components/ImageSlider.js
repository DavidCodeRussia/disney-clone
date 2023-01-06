import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";
import { selectImgSlide } from "../../../redux/homeSlice";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const movies = useSelector(selectImgSlide);

  let settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {movies &&
        movies.map((item, key) => (
          <Wrap key={key}>
            <Link to={"/detail/" + item.id}>
              <img src={item.carouselImg} alt="" />
            </Link>
          </Wrap>
        ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opcaity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-prev {
    left: 0vw;
  }
  .slick-next {
    right: 0vw;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 30px -10px,
      rgb(0, 0, 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImageSlider;
