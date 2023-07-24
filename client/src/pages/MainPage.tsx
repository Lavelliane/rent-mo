import React from "react";
import HeroPage from "./HeroPage.tsx";

const MainPage = () => {
  return (
    <div>
      <HeroPage />
      <div className="w-full h-screen bg-slate-400"></div>
    </div>
  );
};

export default MainPage;