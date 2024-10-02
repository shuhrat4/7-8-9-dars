import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, More, Profile, Tweets, Replies, Media, Likes } from '../pages'; 
import Navbar from '../components/Navbar'; 
import Sitebar from '../components/Sitebar'; 
import SiteBarProfile from '../components/SiteBarProfile'; 
import NotFound from '../components/NotFound'; 

function Dashboard() {
  const location = useLocation();
  let sidebar = null;

  // Location bo'yicha yon panelni ko'rsatish
  if (location.pathname === "/") {
    sidebar = <Sitebar />;
  } else if (location.pathname.startsWith("/profile")) {
    sidebar = <SiteBarProfile />;
  }

  return (
    <div className="flex">
      <Navbar />
      <div className="w-[50%]">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
               <Route path="tweets" element={<Tweets />} />
            <Route path="replies" element={<Replies />} />
            <Route path="media" element={<Media />} />
            <Route path="likes" element={<Likes />} />
          </Route>
          <Route path="/more" element={<More />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {sidebar}
    </div>
  );
}

export default Dashboard;
