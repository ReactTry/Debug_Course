import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import "./Search.css";
import axios from "axios";

export const Search = () => {
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3";
  const [searchInputvalue, setsearchInputvalue] = useState("");
  const [searchList, setsearchList] = useState([]);
  const [filteredList, setfilteredList] = useState([])

  const handleChange = (e) => {
    setsearchInputvalue(e.target.value);

    const searchedFilms = searchList.filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setfilteredList(searchedFilms);
  };

  const clearSearch =()=>{
    setsearchInputvalue("");
    setfilteredList(searchList);

  }

  const fetchMovieList = async () => {
    const response = await axios(API_URL, {
      params: {
        query: "movie",
      },
    });

    setsearchList(response.data.results);
    setfilteredList(response.data.results);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie from local state ?</h1>
      </div>
      <SearchInput
        searchInputvalue={searchInputvalue}
        handleChange={handleChange} clearSearch={clearSearch}
      />
      <SearchList searchList={filteredList} />
    </div>
  );
};
