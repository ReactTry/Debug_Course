import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";

const SearchThrottle = () => {
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3";
  const [searchInputvalue, setsearchInputvalue] = useState("");
  const [searchList, setsearchList] = useState([]);
  const t = useRef();
  const delay = 2000;
  const handleChange = (e) => {
    setsearchInputvalue(e.target.value);
  };

  const clearSearch = () => {
    setsearchInputvalue("");
    setsearchList([]);
  };

  const fetchMovieList = async () => {
    const response = await axios(API_URL, {
      params: {
        query: searchInputvalue,
      },
    });
    console.log(response.data.results);
    setsearchList(response.data.results);
  };

  // useEffect(() => {
  //   fetchMovieList();
  // }, [searchInputvalue]);

  useEffect(() => {
    if (!t.current) {
      t.current = setTimeout(() => {
        searchInputvalue ? fetchMovieList():setsearchList([])
        clearTimeout(t.current);
        t.current = null;
      }, delay);
    }
  }, [searchInputvalue]);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie from Api with Throttle</h1>
      </div>
      <SearchInput
        searchInputvalue={searchInputvalue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      <SearchList searchList={searchList} />
    </div>
  );
};

export default SearchThrottle;
