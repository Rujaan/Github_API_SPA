import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import SingleResult from "../components/singleResult";
import ReactMarkdown from "react-markdown";

const Detail = () => {
  const location = useLocation();
  const user = location.pathname.split("/")[2];
  const userRepo = location.pathname.split("/")[3];

  const [repo, setRepo] = useState([]);
  const [error, setError] = useState("");
  const [readme, setReadme] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getRepo = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/repos/${user}/${userRepo}`
      );
      const data = response.data;

      setRepo(data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const getReadme = async () => {
    try {
      const readmeRes = await axios.get(
        `https://api.github.com/repos/${user}/${userRepo}/readme`
      );

      const data = atob(readmeRes.data.content);
      console.log(data);
      setReadme(data);
      console.log(readme);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getRepo();
    getReadme();
  }, []);

  return (
    <div>
      <Navbar />
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Repo Name:{repo.name}
      </a>
      Owner:{user}
      <p>issues:{repo.open_issues_count}</p>
      <p>default Branch:{repo.default_branch}</p>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  );
};

export default Detail;
