import React from "react";
import { Link } from "react-router-dom";

const Result = ({ isLoading, repo }) => {
  return (
    <div className="flex flex-col mt-2">
      {isLoading && <div>loading</div>}

      {repo.map((repo) => {
        return (
          <Link key={repo.id} to={"/detail/" + repo.full_name}>
            <div className="p-2">
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
              Owner Name:{repo.owner.login}
              Repo Name:{repo.name}
              <p>{repo.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Result;
