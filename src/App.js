import "./App.css";
import { Route, Routes } from "react-router";
import CameraPage from "./pages/intro/CameraPage";
import LoginPage from "./pages/login/LoginPage";
import IntroPage1Background from "./pages/intro/introPage1";
import IntroPage2Background from "./pages/intro/introPage2";
import Game1IntroPage from "./pages/game/game1/game1IntroPage";
import IcecreamPage from "./pages/game/game1/icecreamPage";
import BagPage from "./pages/game/game1/bagPage";
import PersonalPage from "./pages/game/game1/personalPage";
import FoodPage from "./pages/game/game1/foodPage";
import Game1ResultPage from "./pages/game/game1/game1ResultPage";
import IntroPage3Background from "./pages/intro/introPage3";
import IntroPage4Background from "./pages/intro/introPage4";
import Game2Intro from "./pages/game/game2/game2_intro";
import ChooseGamePage from "./pages/game/chooseGamePage";
import Game2 from "./pages/game/game2/game2_main";
import Game2Fail from "./pages/game/game2/game2_fail";
import Game2Success from "./pages/game/game2/game2_success";
import Game3Intro from "./pages/game/game3/game3Intro";
import Game3Main from "./pages/game/game3/game3Main";
import Game4Intro from "./pages/game/game4/game4_intro";
import Game4 from "./pages/game/game4/game4_main";
import Game4Sec from "./pages/game/game4/game4_main2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/camera" element={<CameraPage />} />
      <Route path="/intro1" element={<IntroPage1Background />} />
      <Route path="/intro2" element={<IntroPage2Background />} />
      <Route path="/game1intro" element={<Game1IntroPage />} />
      <Route path="/icecream" element={<IcecreamPage />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/game1result" element={<Game1ResultPage />} />
      <Route path="/intro3" element={<IntroPage3Background />} />
      <Route path="/intro4" element={<IntroPage4Background />} />
      <Route path="/game2intro" element={<Game2Intro />} />
      <Route path="/choosegame" element={<ChooseGamePage />} />
      <Route path="/game2" element={<Game2 />} />
      <Route path="/game2fail" element={<Game2Fail />} />
      <Route path="/game2success" element={<Game2Success />} />
      <Route path="/game3intro" element={<Game3Intro />} />
      <Route path="/game3main" element={<Game3Main />} />
      <Route path="/game4intro" element={<Game4Intro />} />
      <Route path="/game4" element={<Game4 />} />
      <Route path="/game4-2" element={<Game4Sec />} />
    </Routes>
  );
};

export default App;
