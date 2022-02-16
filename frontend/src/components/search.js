import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import Result from "./results";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState({});
  const [repo, setRepo] = useState([]);
  const [sort, setSort] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(sort);
  console.log(order);
  console.log(page);
  const getRepo = async () => {
    setIsLoading(true);

    const response = await axios.get(
      searchTerm && `https://api.github.com/search/repositories?q=${searchTerm}`
    );

    const data = response.data;
    setRepo(data.items);
    console.log(repo);
    setIsLoading(false);
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="input-group relative   mb-4 rounded flex ">
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getRepo}> Search </button>
      </div>
      <div>
        <br />
        <select name="sort" onClick={(e) => setSort(e.target.value)}>
          <option value="created"> created</option>
          <option value="updated">updated</option>
          <option value="stars">stars</option>
          <option value="fork">fork</option>
        </select>

        <select name="order" onClick={(e) => setOrder(e.target.value)}>
          <option value="asc"> ascending</option>
          <option value="desc"> descending</option>
        </select>

        <select name="page" onClick={(e) => setPage(e.target.value)}>
          <option value="30">30</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
        </select>
      </div>
      <Result isLoading={isLoading} repo={repo} />
    </div>
  );
};

export default Search;
