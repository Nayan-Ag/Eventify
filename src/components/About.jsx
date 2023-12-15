import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

function About() {
  return (
    <section className=" h-[65vh] w-[100v%] flex flex-col justify-center text-center bg-[#f1edea]">
      <div className={`${styles.paddingX}`}>
        <p className={`${styles.sectionSubHeadText} aboutsub`}>BASED IN CHARLESTON BUT TRAVEL WORLDWIDE</p>
        <h1 className={`${styles.sectionHeadText} mt-[1rem] abouthead`}>Wedding & Event Planning,</h1>
        <div></div>
        <p className={`${styles.sectionSubText} mt-[1rem] `}>
          From made-to-measure weddings to elaborate corporate events that
          nurture company connections, Fox Events has a flair for transforming
          bespoke spaces into unforgettable experiences.
        </p>
      </div>
    </section>
  );
}

export default SectionWrapper(About,"");
