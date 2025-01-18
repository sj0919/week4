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
import ChooseGamePage from "./pages/game/chooseGamePage";
import Game2 from "./pages/game/game2/game2_main";
import Game2Fail from "./pages/game/game2/game2_fail";
import Game2Success from "./pages/game/game2/game2_success";
import Game3Intro from "./pages/game/game3/game3_intro";

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
      <Route path="/choosegame" element={<ChooseGamePage />} />
      <Route path="/game2" element={<Game2 />} />
      <Route path="/game2fail" element={<Game2Fail />} />
      <Route path="/game2success" element={<Game2Success />} />
      <Route path="/game3intro" element={<Game3Intro />} />
    </Routes>
  );
};

export default App;
