import React, { useState } from "react";
import style from "./AdminNavBarStyle.module.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router-dom";

export default function AdminNavBar() {
//   const [showMovieTab, setShowMovieTab] = useState(false);
//   const [showUserTab, setShowUserTab] = useState(false);

//   const handleShowMovieTab = () => {
//     return setShowMovieTab(!showMovieTab);
//   };
//   const handleShowUserTab = () => {
//     return setShowUserTab(!showUserTab);
//   };

  const navigate = useNavigate();
  return (
    <div className={style.jss1}>
      <div>
        <div
          className={style.jss2}
          style={{ opacity: "0.7", marginBottom: "40px" }}
        >
          <AdminPanelSettingsIcon fontSize="large" />
          <a onClick={() => navigate("/admin")}>
            <h4>ADMIN MANAGER</h4>
          </a>
        </div>
        <div className={style.jss2}>
          <PersonOutlineIcon />
          <a onClick={() => navigate("/admin/users")}>Quản lý người dùng</a>
        </div>
        <div className={style.jss2}>
          <LiveTvIcon />
          <a onClick={() => navigate("/admin/jobs")}>Quản lý công việc</a>
        </div>

        <div className={style.jss2} id="user">
          <a onClick={() => navigate("/admin/typeJobs")}>
            Quản lý loại công việc
          </a>
        </div>
        <div className={style.jss2}>
          <MovieIcon />
          <a onClick={() => navigate("/admin/jobForRent")}>Quản lý dịch vụ</a>
        </div>
      </div>
    </div>
  );
}
