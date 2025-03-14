import React from "react";
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opaText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opaRocket = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rk1X = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const rk1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);
  const rk2X = useTransform(scrollYProgress, [0, 1], ["0%","-1000%" ]);
  const rk2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "1000%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ opacity: opaText, y: yText }}>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div
        style={{ x: rk1X, y: rk1Y, opacity: opaRocket }}
        className="rocket1"
      ></motion.div>
      <motion.div
        style={{ x: rk2X, y: rk2Y, opacity: opaRocket, rotate: -180 }}
        className="rocket2"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="planets"></motion.div>
      <motion.div style={{ y: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
