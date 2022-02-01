import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Particles from "react-tsparticles";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import particlesConfig from "./config/particles-config";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Particles params={particlesConfig} />
      <ThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coins/:id" element={<CoinPage />} />
                <Route path="/news" element={<NewsPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
