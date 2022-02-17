import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import Result from "./results";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState({});
  const [repo, setRepo] = useState([]);
  const [newClass, setNewCLass] = useState(false);
  const [sort, setSort] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //using axios to fetch the value through API endpoints
  const getRepo = async () => {
    setIsLoading(true);

    const response = await axios.get(
      searchTerm &&
        `https://api.github.com/search/repositories?q=${searchTerm}&sort=${
          sort ? sort : "created"
        }&order=${order ? order : "asc"}&per_page=${page ? page : "5"}`
    );
    console.log(
      `https://api.github.com/search/repositories?q=${searchTerm}&sort=${
        sort ? sort : "created"
      }&order=${order ? order : "asc"}&per_page=${page ? page : "5"}`
    );

    const data = response.data;
    setRepo(data.items);
    console.log(repo);
    setIsLoading(false);
  };

  //for the increase and decrease of the height in the search box
  const increaseHeight = () => {
    setNewCLass(true);
    console.log("magic");
  };

  const decreaseHeight = () => {
    setNewCLass(false);
    console.log("no magic");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getRepo();
    }
  };

  //use effect get repo on every sort,order or page change
  useEffect(() => {
    getRepo();
  }, [sort, order, page]);

  return (
    <div className="min-h-screen min-w-screen  py-6 flex flex-col justify-center items-center relative  sm:py-12">
      <div
        className={
          newClass
            ? "relative px-2 bg-gray-100 dark:bg-gray-800 dark:text-white  pt-10 pb-8 shadow-xl sm:min-w-2/4 rounded-xl sm:px-10  transition-[height] duration-500 h-screen ease-in overflow-scroll"
            : "relative px-2 bg-gray-100 dark:bg-gray-800 dark:text-white  pt-10 pb-8 shadow-xl sm:min-w-2/4 rounded-xl sm:px-10  transition-[height] duration-500 h-auto ease-in  "
        }
      >
        <div className="input-group relative   mb-4 rounded flex ">
          <div className=" absolute -right-5 -top-8">
            {newClass ? (
              <button className="pointer" onClick={decreaseHeight}>
                X
              </button>
            ) : (
              <p></p>
            )}
          </div>
          <button onClick={getRepo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700   peer-placeholder-shown:h-screen "
            placeholder="Search"
            aria-label="Search"
            onKeyDown={handleKeyDown}
            onFocus={increaseHeight}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-8">
          <div className="flex">
            <p className="p-1">Sort: </p>
            <select
              className=" bg-transparent p-1"
              name="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="created"> created</option>
              <option value="updated">updated</option>
              <option value="stars">stars</option>
              <option value="fork">fork</option>
            </select>
          </div>

          <div className="flex">
            <p className="p-1">Order: </p>
            <select
              className=" bg-transparent p-1"
              name="order"
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc"> ascending</option>
              <option value="desc"> descending</option>
            </select>
          </div>

          <div className="flex">
            <p className="p-1">Pages</p>
            <select
              className=" bg-transparent p-"
              name="page"
              onChange={(e) => setPage(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="80">80</option>
            </select>
          </div>
        </div>
        <Result isLoading={isLoading} repo={repo} />
      </div>
    </div>
  );
};

export default Search;
