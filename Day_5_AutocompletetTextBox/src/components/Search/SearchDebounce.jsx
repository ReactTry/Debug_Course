import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";

export const SearchDebounce = () => {
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3";
  const [searchInputvalue, setsearchInputvalue] = useState("");
  const [searchList, setsearchList] = useState([]);

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
    const timeout = setTimeout(() => {
      searchInputvalue && fetchMovieList();
    }, 3000);
    console.log("typeMount");
    return () => {
    //  clearTimeout(timeout);
      console.log("typeUnmount");
    };
  }, [searchInputvalue]);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie from Api with useEffect Debounce</h1>
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
