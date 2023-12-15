import React from "react";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";

function Hero() {
  return (
    <section className="relative w-full h-screen flex">
      <div className={`${styles.paddingX}z-10 absolute inset-0`}>
        <p
          className={`lg:text-[3rem]  lg:mt-[20rem] lg:text-start sm:text-left  sm:mt-[19rem] xs:text-[2rem] xs:mt-[19rem] mt-[19rem] text-[2rem] text-center text-white-100`}
        >
          <TypeAnimation
            sequence={[
              "Turning Moments into Memories:",
              1000,
              "Your Event, Our Expertise!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>
      </div>
    </section>
  );
}

export default Hero;
