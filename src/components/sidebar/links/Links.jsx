import React from "react";
import './link.scss'
import {motion} from "framer-motion"
export const Links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return <div className="links">
{
    items.map(item=>(
        <motion.a 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        href={`#${item}`} key={item}>
            {item}
        </motion.a>
    ))
}

  </div>;
};
