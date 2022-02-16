import { useSelector } from "react-redux";
import "./App.css";
import Toggle from "./components/themeToggle";

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={
        theme === "dark"
          ? "dark bg-dark-black dark:text-light-white transition-all max-h-full max-w-full min-h-screen min-w-screen px-1 md:px-16 lg:px-20 xl:px-28"
          : " bg-light-white  dark:text-light-white transition-all max-h-full max-w-full min-h-screen min-w-screen px-1 md:px-16 lg:px-20 xl:px-28"
      }
    >
      <h1 className=" text-dark-black dark:text-light-white">hello</h1>
      <Toggle />
    </div>
  );
}

export default App;
