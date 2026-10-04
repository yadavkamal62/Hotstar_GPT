import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdTv } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  // Uses strictly your imported icons in Hotstar order
  const navItems = [
    { name: 'My Space', icon: <FaUserCircle size={22} /> },
    { name: 'Search', icon: <IoSearch size={22} /> },
    { name: 'Home', icon: <IoMdHome size={22} /> },
    { name: 'TV', icon: <MdTv size={22} /> },
    { name: 'Movies', icon: <RiMovie2Fill size={22} /> },
    { name: 'Sports', icon: <MdOutlineSportsMartialArts size={22} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 hover:w-44 cursor-pointer bg-[#0f1014] text-[#8f98b2] flex flex-col justify-center transition-all duration-300 ease-in-out z-50 group border-r border-white/5 select-none hover:bg-black/70">
      
      
      <div className="absolute top-6 left-0 w-full flex justify-center group-hover:justify-start group-hover:px-5 cursor-pointer transition-all duration-300">
        <div className="w-8 h-8 rounded-full  flex items-center justify-center font-bold  text-white text-xs tracking-tighter">
          <img src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png" alt="logo" />
        </div>
      </div>

    
      <ul className="flex flex-col  cursor-pointer gap-3 py-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <li key={item.name} className="relative  cursor-pointer">
            
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-md cursor-pointer" />
              )}

              <button
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-4 w-full px-5 py-3 transition-colors  cursor-pointerduration-200 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'hover:text-white hover:scale-105 transition-transform'
                }`}
              >
                <span className="min-w-[22px] flex cursor-pointer justify-center">
                  {item.icon}
                </span>
                
                <span className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer duration-200 whitespace-nowrap text-sm font-sans tracking-wide">
                  {item.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;