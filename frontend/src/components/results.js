import React from "react";

const Result = ({ isLoading, repo }) => {
  return (
    <div className="flex flex-col mt-2">
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
          <li key={repo.id} className="p-2">
            <p>forks:{repo.forks}</p>
            <p>stars:{repo.stargazers_count}</p>
            <p>watchers:{repo.watchers_count}</p>
            <p>description:{repo.description}</p>
            <p>issues:{repo.open_issues_count}</p>
            <p>last updated:{repo.updated_at}</p>
            <p>default Branch:{repo.default_branch}</p>
            <p>visibility : {repo.visibility}</p>
            <p>allow forking: {repo.allow_forking}</p>
            <p>home page:{repo.homepage}</p>
            <img src={repo.owner.avatar_url} alt="" />
            <a
              href={"https:www.github.com/" + repo.owner.login}
              target="_blank"
              rel="noreferrer"
            >
              Owner Name:{repo.owner.login}
            </a>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              Repo Name:{repo.name}
            </a>

            <p>{repo.description}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Result;
