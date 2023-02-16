"use client";
import React, { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 ">
      {/* container div */}
      <div className="flex justify-between md:py-5 items-end py-3">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl font-bold">Balint Korosi</h2>
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? "X" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="hidden md:block">
            <div className="md:flex md:space-x-6 ">
              {NAV_ITEMS.map((item, id) => {
                return <div key={id}>{item.label}</div>;
              })}
            </div>
          </div>

          {/* menu items */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
