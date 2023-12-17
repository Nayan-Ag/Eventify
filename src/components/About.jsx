import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function About() {
  return (
    <motion.section
      variants={fadeIn("right", "spring", 0.5 , 1)}
      className=" h-[65vh] w-[100%] flex flex-col justify-center text-center bg-[#f1edea]"
    >
      <div className={`${styles.paddingX}`}>
        <p className={`${styles.sectionSubHeadText} aboutsub`}>
          BASED IN CHARLESTON BUT TRAVEL WORLDWIDE
        </p>
        <h1 className={`${styles.sectionHeadText} mt-[2rem]  abouthead`}>
          Wedding & Event Planning,
        </h1>
        <div></div>
        <p className={`${styles.sectionSubText} mt-[2rem] lg:px-[13rem]`}>
          From made-to-measure weddings to elaborate corporate events that
          nurture company connections, Fox Events has a flair for transforming
          bespoke spaces into unforgettable experiences.
        </p>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(About, "");
