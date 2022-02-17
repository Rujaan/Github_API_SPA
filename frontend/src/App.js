import { useSelector } from "react-redux";
import "./App.css";
import Index from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={
        theme === "dark"
          ? "dark bg-dark-black dark:text-light-white transition-all max-h-full max-w-full min-h-screen min-w-screen px-1 md:px-16 lg:px-20 xl:px-28 font-sora overflow-hidden"
          : " bg-gray-300  dark:text-light-white transition-all max-h-full max-w-full min-h-screen min-w-screen px-1 md:px-16 lg:px-20 xl:px-28 font-sora overflow-hidden"
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="detail" element={<Detail />}>
              <Route path=":user/:repo" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
