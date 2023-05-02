import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Activity from "./page/Activity";
import Category from "./page/Category";
import Promo from "./page/Promo/index";
import Profile from "./page/Profile";
import Detail from "./page/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/category" element={<Category />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
