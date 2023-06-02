import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      console.log("isLogin ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
