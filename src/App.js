import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import { Route, Routes } from "react-router";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
