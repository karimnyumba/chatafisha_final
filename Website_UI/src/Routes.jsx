import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AdminLayout from "components/adminComponents/AdminLayout";
import { AdminHomePage, Blogs, CreateBlog } from "pages/ADMINPAGES";
import { Loading, ProtectedRoute } from "components";
import NEWSDETAILSPAGE from "pages/NEWSDETAILPAGE";
import TupeSupport from "pages/TUPESUPPORTPAGE";
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const LOGINPAGE = React.lazy(() => import("pages/LOGINPAGE"));
const REGISTERFORM = React.lazy(() => import("pages/REGISTERFORM"));
const LOGINFORM = React.lazy(() => import("pages/LOGINFORM"));
const NEWSUPDATESPAGE = React.lazy(() => import("pages/NEWS&UPDATES"))
const NEWSDETAILPAGE = React.lazy(() => import("pages/NEWSDETAILPAGE"))

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/loginpage' element={<LOGINPAGE />} />
          <Route
            path='/homepage'
            element={
              <ProtectedRoute>
                <HOMEPAGE />
              </ProtectedRoute>
            }
          />
          <Route path='/news_and_updates' element={<NEWSUPDATESPAGE />} />
          <Route path='/news_detail' element={<NEWSDETAILSPAGE />} />
          <Route path='/tupe_support' element={<TupeSupport />} />
          <Route path='/registerform' element={<REGISTERFORM />} />
          <Route path='/loginform' element={<LOGINFORM />} />
          <Route
            path='/AdminHome/*'
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminHomePage />} />
            <Route path='allBlogs' element={<Blogs />} />
            <Route path='createBlog' element={<CreateBlog />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  )
};
export default ProjectRoutes;
