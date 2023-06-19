import Navbar from "./components/Navbar/Navbar";
import Anasayfa from "./pages/Anasayfa";
import Iletisim from "./pages/Iletisim";

import { Route, Routes } from "react-router-dom";
import Hizmet from "./components/Hizmetler/Hizmet";
import Uyelik from "./components/Uyelik/Uyelik";
import Hakkimizda from "./components/Hakkimizda/Hakkimizda";

const App = () => {
  return (
    <section className="h-screen  bg-cover font-[Poppins] md:bg-top bg-center ">
      <Navbar /> <br />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
      <Uyelik />
      <Hizmet />
      <Hakkimizda />
    </section>
  );
};

export default App;
