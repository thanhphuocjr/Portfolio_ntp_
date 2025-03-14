import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>



      
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          _ntp_dev
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a
            href="https://www.facebook.com/thanhphuocjr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.i
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.7, duration: 0.2 }}
              className="fab fa-facebook"
            ></motion.i>{" "}
            {/* Font Awesome Facebook Icon */}
          </a>
          <a
            href="https://www.instagram.com/_ntp_jr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.i
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.7, duration: 0.2 }}
              className="fab fa-instagram"
            ></motion.i>
            {/* Font Awesome Instagram Icon */}
          </a>
          <a
            href="https://www.tiktok.com/@_ntp_jr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.i
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3 }}
              whileHover={{ scale: 1.7, duration: 0.2 }}
              className="fab fa-tiktok"
            ></motion.i>
            {/* Font Awesome Titok Icon */}
          </a>
        </motion.div>
      </div>
    </div>
  );
};
