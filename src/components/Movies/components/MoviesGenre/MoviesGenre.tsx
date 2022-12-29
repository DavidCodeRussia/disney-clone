// @ts-ignore
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { genreMovies } from "../../../../constants/constants";
import { selectSort, setSort } from "../../../../redux/moviesFilter";
import { selectCategory, setCategory } from "../../../../redux/moviesFilter";
import { moviesAPI } from "../../../../API/api";

import s from "./MoviesGenre.module.scss";

const arr = ["rating", "year", "alphabet"];
interface Sort {
  choosedOptions: 0;
  rating: 0;
  year: 0;
  alphabet: "a";
}

const MoviesGenre = () => {
  const dispatch = useDispatch();
  const filters: number = useSelector(selectCategory);

  const popupMenu = useRef();
  const [popupOpen, setPopupOpen] = useState(true);
  const activeLink: Sort = useSelector(selectSort);

  const outsideClick = (e) => {
    if (!e.path.includes(popupMenu.current)) {
      setPopupOpen(false);
    }
  };

  const onSelectItem = (index) => {
    dispatch(
      setSort({
        choosedOptions: index,
        type: "popular",
        order: "desc",
      })
    );
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    document.body.addEventListener("click", outsideClick);

    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, []);

  const onSwitchCategory = async () => {
    const data = await moviesAPI.getMovies();
  };

  return (
    <div className={s.genreMoviesWrapper}>
      <div className={s.genreMovies}>
        {genreMovies &&
          genreMovies.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                dispatch(setCategory(index));
              }}
              className={filters === index ? s.activeLinkMovies : ""}
            >
              {item}
            </li>
          ))}
      </div>
      {/* <div className={s.sortWrapper} ref={popupMenu}>
        <div className={s.sort} onClick={() => setPopupOpen(true)}>
          <img
            className={cn({
              [s.imgRotate]: popupOpen,
            })}
            src="/images/arrow-top.svg"
            alt="Arrow"
          />
          sort by:
          <span>{arr[activeLink.choosedOptions]}</span>
        </div>
        {popupOpen && (
          <div className={s.dropDownMenu}>
            {arr &&
              arr.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className={cn(s.dropDownItem, {
                      [s.activeLinkSort]: ind === activeLink.choosedOptions,
                    })}
                    onClick={() => {
                      onSelectItem(ind);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MoviesGenre;
