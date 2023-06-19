import React from "react";
import { Route, Routes } from "react-router-dom";
import BizKimiz from "../../pages/hakkimizda/BizKimiz";
function Hakkimizda() {
  return (
    <div>
      <Routes>
        <Route path="/biz-kimiz" element={<BizKimiz />} />
      </Routes>
    </div>
  );
}

export default Hakkimizda;
