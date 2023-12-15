import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiseLoader } from "react-spinners";

import { About, Hero, Navbar } from "./components";

import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);
  return (
    <div className="w-[100%] h-[100vh] flex flex-col">
      {loading ? (
        <RiseLoader
          color="#36d7b7"
          loading
          margin={4}
          size={32}
          className="w-[100%] h-[100%] justify-center items-center bg-black"
        />
      ) : (
        <BrowserRouter>
          <Navbar />
          <div className="landingsection">
            <div className="content">
              <Hero className="top-[100px] text-black" />
            </div>
          </div>
          <About/>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
