"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { useState } from "react";
import { HoverMovingCard } from "./ui/HoverMovingCard";
import { StickyScroll } from "./ui/StickyScrollReveal";

export const WorkExperience = () => {
  const [index, setIndex] = useState<number>(0);


  return (
    <motion.div
      animate={{
        background: experience[index].backgroundGradient,
      }}
      transition={{ duration: 1 }}
      className="mb-36"
      id="experience"
    >
      <div className="py-16 px-10 font-sans font-bold text-3xl">
        My Work Experience
      </div>
      <StickyScroll content={experience[index]}  />
      <h3 className="text-2xl font-semibold mt-16 px-8">Here are more...</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl items-center mt-10 mx-auto justify-center gap-4 px-8">
        {experience.map(
          (exp, i) =>
            i !== index && (
              <HoverMovingCard
                key={exp.title + i}
                imageUrl={exp.heroUrl}
                logoUrl={exp.logoUrl}
                title={exp.title}
                handleClick={() => {
                  setIndex(i);
                  
                }}
              />
            )
        )}
      </div>
    </motion.div>
  );
};
