import "./App.css";
import { Route, Routes } from "react-router";
import CameraPage from "./pages/intro/CameraPage";
import LoginPage from "./pages/login/LoginPage";
import IntroPage1Background from "./pages/intro/introPage1";
import IntroPage2Background from "./pages/intro/introPage2";
import IcecreamPage from "./pages/game/game1/icecreamPage";
import IntroPage3Background from "./pages/intro/introPage3";
import IntroPage4Background from "./pages/intro/introPage4";
import Game2Intro from "./pages/game/game2/game2_intro";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/camera" element={<CameraPage />} />
      <Route path="/intro1" element={<IntroPage1Background />} />
      <Route path="/intro2" element={<IntroPage2Background />} />
      <Route path="/icecream" element={<IcecreamPage />} />
      <Route path="/intro3" element={<IntroPage3Background />} />
      <Route path="/intro4" element={<IntroPage4Background />} />
      <Route path="/game2intro" element={<Game2Intro />} />
    </Routes>
  );
};

export default App;
