// @ts-ignore
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { genreMovies } from "../../../../constants/constants";
import { selectSort, setSort } from "../../../../redux/moviesFilterSlice";
import {
  selectCategory,
  setCategory,
} from "../../../../redux/moviesFilterSlice";

import s from "./MoviesGenre.module.scss";

const arr = ["rating", "year", "durationTime"];

const MoviesGenre = () => {
  const dispatch = useDispatch();
  const filters: string = useSelector(selectCategory);

  const popupMenu = useRef();
  const [popupOpen, setPopupOpen] = useState(true);
  const activeLink = useSelector(selectSort);

  const outsideClick = (e) => {
    if (!e.path.includes(popupMenu.current)) {
      setPopupOpen(false);
    }
  };

  const onSelectItem = (item: string) => {
    dispatch(setSort(item));
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    document.body.addEventListener("click", outsideClick);

    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, []);

  return (
    <div className={s.genreMoviesWrapper}>
      <div className={s.genreMovies}>
        {genreMovies &&
          genreMovies.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                dispatch(setCategory(item));
              }}
              className={filters === item ? s.activeLinkMovies : ""}
            >
              <span>{item}</span>
            </li>
          ))}
      </div>
      <div className={s.sortWrapper} ref={popupMenu}>
        <div className={s.sort} onClick={() => setPopupOpen(true)}>
          <img
            className={cn({
              [s.imgRotate]: popupOpen,
            })}
            src="/images/arrow-top.svg"
            alt="Arrow"
          />
          sort by:
          <span>{activeLink}</span>
        </div>
        {popupOpen && (
          <div className={s.dropDownMenu}>
            {arr &&
              arr.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className={cn(s.dropDownItem, {
                      [s.activeLinkSort]: item === activeLink,
                    })}
                    onClick={() => {
                      onSelectItem(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesGenre;
