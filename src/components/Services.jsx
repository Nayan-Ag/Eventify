import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { Tilt } from "react-tilt";
import { styles } from "../styles";

const ServieCard = ({ index, name, image, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 1)}
    className="lg:w-[28%]  m-[1rem] border-solid border-4 p-[2rem] flex flex-col flex-wrap lg:min-h-[42rem] rounded-2xl h-[100%] cursor-pointer"
  >
    <Tilt className="flex justify-center items-center">
      <img
        src={image}
        alt={name}
        className="h-[100%] service_image rounded-xl "
      ></img>
    </Tilt>
    <div className="text-center mt-[3rem] flex flex-col items-center">
      <p className="text-white-100 lg:text-[1.8rem] md:text-[3rem] text-[2rem] flex flex-wrap ">
        {name}
      </p>
      <p className="border-b-2 w-[60%] mt-[1rem]"></p>
      <p className={`text-white-100 mt-[2rem]`}>{description}</p>
    </div>
    <div>
      <button className="mt-[4rem] p-[0.5rem] w-[9rem] bg-black tracking-wide text-white-100  text-[1.1rem] ml-[1rem] service_btn">
        <span className="service_btn_span">Learn More</span>
      </button>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#a29f72] p-[2rem]">
      <motion.div
        variants={textVariant()}
        className="p-[3rem] justify-center flex lg:flex-row flex-col items-center  gap-[4rem]"
      >
        {services.map((service, index) => (
          <ServieCard key={service.name} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Services, "");
