import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import Result from "./results";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState({});
  const [repo, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       const getRepo = async () => {
  //         const res = await axios.get(
  //           inputText &&
  //             `https://api.github.com/search/repositories?q=${inputText}`
  //         );
  //         setRepo(res.data);
  //         console.log(repo);
  //       };
  //       getRepo();
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }, [inputText, repo]);

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
      <Result isLoading={isLoading} repo={repo} />
    </div>
  );
};

export default Search;
