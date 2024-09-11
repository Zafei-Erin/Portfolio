"use client";

import { motion } from "framer-motion";

const colors = [
  "--sky-100",
  "--green-100",
  "--yellow-100",
  "--teal-100",
  "--red-100",
  "--blue-100",
  "--indigo-100",
  "--violet-100",
];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
export const TechStack = () => {
  return (
    <div
      id="techstack"
      className="min-h-40 mb-20 flex max-md:flex-col md:items-start md:justify-evenly gap-10 p-16 lg:p-32"
    >
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        className="flex flex-col-reverse md:flex-col"
      >
        <div className="font-sans font-extralight text-[#c1c2d3] z-10">
          I constantly try to improve
        </div>

        <div className="font-sans font-bold text-3xl max-w-96 z-10">
          My tech stack
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        className="flex gap-3 mt-10 lg:gap-8 w-full md:w-fit items-start justify-center text-xs lg:text-base"
      >
        <div className="flex flex-col gap-3 lg:gap-8">
          {["JavaScript", "TypeScript", "Golang", "Python"].map((item) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={item}
              className="hover:translate-x-2 transition duration-100 py-4 px-3 bg-white opacity-100 rounded-lg text-center border border-[#10132E] text-[#10132E]"
            >
              {item}
            </motion.div>
          ))}
          <span className="py-4 px-3 rounded-lg text-center border border-[#10132e]/30" />
        </div>

        <div className="flex flex-col gap-3 lg:gap-8 mt-16">
          <span className="py-4 px-3 rounded-lg text-center border border-[#10132e]/30" />
          {["ReactJS", "Redux", "SolidJS", "Tailwind"].map((item) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={item}
              className="hover:translate-x-2 transition duration-100 py-4 px-3 bg-white opacity-100 rounded-lg text-center border border-[#10132E] text-[#10132E]"
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:gap-8">
          {["Nodejs", "Express", "PostgreSQL", "MongoDB"].map((item) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={item}
              className="hover:translate-x-2 transition duration-100 py-4 px-3 bg-white opacity-100 rounded-lg text-center border border-[#10132E] text-[#10132E]"
            >
              {item}
            </motion.div>
          ))}
          <span className="py-4 px-3 rounded-lg text-center border border-[#10132e]/30" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-8 mt-16">
          <span className="py-4 px-3 rounded-lg text-center border border-[#10132e]/30" />
          {["AWS", "CI/CD", "Docker", "Git"].map((item) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={item}
              className="hover:translate-x-2 transition duration-100 py-4 px-3 bg-white opacity-100 rounded-lg text-center border border-[#10132E] text-[#10132E]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
