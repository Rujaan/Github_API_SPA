import React from "react";

const Result = ({ isLoading, repo }) => {
  return (
    <div className="flex flex-col mt-10">
      <br />
      <div>loading</div>
      {isLoading && <div>loading</div>}
      {repo === [] ? (
        <div></div>
      ) : (
        repo.map((repo) => {
          <div>{repo.name}</div>;
        })
      )}
      {repo.map((repo) => {
        return (
          <li key={repo.id} className="repo_item">
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Result;
