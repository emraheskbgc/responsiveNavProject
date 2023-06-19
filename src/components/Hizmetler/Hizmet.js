import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontendTeknolojileri from "../../pages/hizmetler/FrontendTeknolojileri";
import BackendTeknolojileri from "../../pages/hizmetler/BackendTeknolojileri";
import AwsHizmetleri from "../../pages/hizmetler/AwsHizmetleri";
function Hizmet() {
  return (
    <div>
      <Routes>
        <Route
          path="/frontend-teknolojileri"
          element={<FrontendTeknolojileri />}
        />
        <Route
          path="/backend-teknolojileri"
          element={<BackendTeknolojileri />}
        />
        <Route path="/aws-hizmetleri" element={<AwsHizmetleri />} />
      </Routes>
    </div>
  );
}

export default Hizmet;
