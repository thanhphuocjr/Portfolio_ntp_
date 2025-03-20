import React, { useEffect, useRef, useState } from "react";
import "./sidebar.scss";
import { Links } from "./links/Links";
export const Sidebar = () => {
  const prevScrollY = useRef(0);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setShowSidebar(false); // Ẩn Sidebar khi cuộn xuống
      } else {
        setShowSidebar(true); // Hiện Sidebar khi cuộn lên
      }

      prevScrollY.current = currentScrollY; // Cập nhật giá trị cuộn trước đó
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`sidebar ${showSidebar?"visible":"hidden"}`}>
      <Links />
    </div>
  );
};
export default Sidebar;
