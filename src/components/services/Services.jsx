import "./services.scss";
import { animate, motion } from "framer-motion";

const variants = {
  initial: {
    x: -50,
    opacity: 0,
    y: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}> Unique</motion.b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}> For You</motion.b>{" "}
            Business
          </h1>
          <motion.button whileHover={{ background: "white" }}>
            What We Do?
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            perspiciatis dolorum qui harum provident laborum impedit nisi,
            minima corrupti magni commodi dolore iusto, velit totam soluta
            voluptatum rerum nostrum odit?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            perspiciatis dolorum qui harum provident laborum impedit nisi,
            minima corrupti magni commodi dolore iusto, velit totam soluta
            voluptatum rerum nostrum odit?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            perspiciatis dolorum qui harum provident laborum impedit nisi,
            minima corrupti magni commodi dolore iusto, velit totam soluta
            voluptatum rerum nostrum odit?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            perspiciatis dolorum qui harum provident laborum impedit nisi,
            minima corrupti magni commodi dolore iusto, velit totam soluta
            voluptatum rerum nostrum odit?
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
