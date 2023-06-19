import React from "react";
import { Route, Routes } from "react-router-dom";
import KayitOl from "../../pages/KayitOl";
import GirisYap from "../../pages/GirisYap";

function Uyelik() {
  return (
    <div>
      <Routes>
        <Route path="/kayit-ol" element={<KayitOl />} />
        <Route path="/giris-yap" element={<GirisYap />} />
      </Routes>
    </div>
  );
}

export default Uyelik;
