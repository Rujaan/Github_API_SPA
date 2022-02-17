import React from "react";
import ReactMarkdown from "react-markdown";

const SingleResult = ({ repo, user, readme }) => {
  return (
    <div className="min-h-screen min-w-screen  py-6 flex flex-col justify-center items-center relative  sm:py-12">
      <div className="relative mt-10 bg-gray-100 dark:bg-gray-800 dark:text-white  py-8  shadow-xl sm:w-full lg:w-5/6 rounded-xl px-3 md:px-10 overflow-scroll">
        <div>
          <div className="flex flex-col">
            <div className=" flex flex-col lg:flex-row gap-x-3 items-center">
              <p className=" font-semibold text-3xl">{repo.name}</p>
              <span> - {user}</span>
            </div>
            <div className="mt-10 ">Published at {repo.created_at}</div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 my-2">
            <div className=" flex">
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p className="ml-1">{repo.stargazers_count}</p>
            </div>

            <div className="flex">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p className=" ml-1">{repo.watchers_count}</p>
            </div>
            <div className=" flex">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <p className=" ml-1">{repo.forks}</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <p>Branch: {repo.default_branch}</p>
            <p>Languages: {repo.language}</p>
          </div>
        </div>
        <div className=" flex my-10">
          <p>{repo.description} Branch</p>
        </div>

        <div className=" flex gap-y-1 flex-col mb-10">
          <div className=" flex gap-x-2">
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
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <p className=" text-blue-900 dark:text-blue-600  text-sm md:text-base cursor-pointer">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.html_url}
              </a>
            </p>
          </div>
          <div className=" flex gap-x-2">
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
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <p className=" text-blue-900 dark:text-blue-600 text-sm md:text-base  cursor-pointer">
              <a
                href={"https://www.github.com/" + user}
                target="_blank"
                rel="noreferrer"
              >
                http://github.com/{user}
              </a>
            </p>
          </div>
        </div>

        <div className=" bg-gray-800 lg:p-2 rounded-lg text-white hidden md:block md:text-sm lg:text-md text-justify w-11/12">
          <p className=" font-semibold capitalize mb-5 ">Readme.md</p>
          <ReactMarkdown escapeHtml={false}>{readme}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SingleResult;
