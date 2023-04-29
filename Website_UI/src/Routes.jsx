import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const LOGINPAGE = React.lazy(() => import("pages/LOGINPAGE"));
const REGISTERFORM = React.lazy(() => import("pages/REGISTERFORM"));
const LOGINFORM = React.lazy(() => import("pages/LOGINFORM"));
const NEWSUPDATESPAGE = React.lazy(() => import("pages/NEWS&UPDATES"))

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LOGINPAGE />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
          <Route path="/news_and_updates" element={<NEWSUPDATESPAGE />} />
          <Route path="/registerform" element={<REGISTERFORM />} />
          <Route path="/loginform" element={<LOGINFORM />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
