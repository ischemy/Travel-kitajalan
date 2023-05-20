import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Activity from "./page/Activity";
import Category from "./page/Category";
import Promo from "./page/Promo/index";
import Profile from "./page/Profile";
import Detail from "./page/Detail";
import MustLogin from "./page/MustLogin";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {isLogin ? (
            <>
              <Route path="/activity" element={<Activity />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/detail/:id" element={<Detail />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<MustLogin />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
