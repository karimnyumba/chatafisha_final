import useBreakpoint from "@restart/hooks/useBreakpoint";
import React, { useState } from "react";
import {
  HiHome,
  HiMenu,
  HiMoon,
  HiPencilAlt,
  HiTruck,
  HiUsers
} from "react-icons/hi";
import IconButton from "./IconButton";
import { Outlet } from "react-router-dom";
// import Members from "../pages/Members";
import Nav from "./Nav";
import NavLink from "./NavLink";
// import Notifications from "./Notifications";
// import Orders from "../pages/Orders";
// import Products from "../pages/Products";
// import Profile from "../pages/Profile";
// import QueryWrapper from "./QueryWrapper";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Avatar from "./Avatar";
// import ProfileMenu from "./ProfileMenu";

const links = [
  { icon: HiHome, label: "Home", to: "/AdminHome" },
  { icon: HiUsers, label: "Members", to: "/admin/blo" },
  { icon: HiPencilAlt, label: "Blogs", to: "allBlogs" }
];

export default function AdminLayout(props) {
  const [open, setOpen] = useState(false);
  const isSmall = useBreakpoint("sm", "down");

  return (
    <div className="flex font-syne">
      <Sidebar
        open={open}
        setOpen={setOpen}
        title={
          <div className="flex items-center">
            <Avatar bg="primary" className="mr-3">
              <Logo size={24} />
            </Avatar>{" "}
            Admin
          </div>
        }
      >
        <Nav orientation="vertical">
          {links.map((link) => (
            <NavLink key={link.to} onClick={() => setOpen(false)} to={link.to}>
              <link.icon className="mr-4" size={20} />
              {link.label}
            </NavLink>
          ))}
        </Nav>
        <span className="flex-grow" />
        <div className="flex items-center">
          {/* <Notifications /> */}
          <IconButton className="-mr-2">
            <HiMoon />
          </IconButton>
        </div>
        {/* <ProfileMenu /> */}
      </Sidebar>
      <main className="flex-grow">
        {isSmall &&(
          <header className="flex items-center justify-between px-4 py-4">
            <IconButton className="-ml-2" onClick={() => setOpen(true)}>
              <HiMenu />
            </IconButton>
          </header>
        )}
           <Outlet />
      </main>
    </div>
  );
}
