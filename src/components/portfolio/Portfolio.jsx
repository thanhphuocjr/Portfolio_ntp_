import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "HTML",
    img: "https://images.pexels.com/photos/3801458/pexels-photo-3801458.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque facere deleniti explicabo doloribus? Velit porro non aut ratione similique, aspernatur a illum commodi voluptatum eum mollitia vitae debitis ipsam.",
  },
  {
    id: 2,
    title: "C++",
    img: "https://images.pexels.com/photos/9545651/pexels-photo-9545651.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque facere deleniti explicabo doloribus? Velit porro non aut ratione similique, aspernatur a illum commodi voluptatum eum mollitia vitae debitis ipsam.",
  },
  {
    id: 3,
    title: "Python",
    img: "https://images.pexels.com/photos/10131033/pexels-photo-10131033.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque facere deleniti explicabo doloribus? Velit porro non aut ratione similique, aspernatur a illum commodi voluptatum eum mollitia vitae debitis ipsam.",
  },
  {
    id: 4,
    title: "Java",
    img: "https://images.pexels.com/photos/11952513/pexels-photo-11952513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque facere deleniti explicabo doloribus? Velit porro non aut ratione similique, aspernatur a illum commodi voluptatum eum mollitia vitae debitis ipsam.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div ref={ref} className="imageContainer">
            <img src={item.img} alt="image" />
          </motion.div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
