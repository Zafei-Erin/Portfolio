"use client";

import { products } from "@/data/product";
import { motion } from "framer-motion";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { WavyBackground } from "./ui/WavyBackground";
import { socialMedia } from "@/data/socialMedia";

export const Hero = () => {
  return (
    <WavyBackground
      id="about"
      className="max-w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="relative text-center px-16 flex items-center justify-center min-w-[1100px] max-w-[1500px]">
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
          className="max-sm:absolute left-80 top-10 min-w-64"
        >
          <div className="flex gap-3 sm:gap-1 lg:gap-5 w-fit">
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg h-fit w-fit">
                <img
                  key={products[0].title}
                  src={products[0].thumbnail}
                  alt="thumbnail"
                  className="opacity-60 aspect-square w-[6rem] sm:w-[12rem] object-top object-cover rounded-lg"
                />
              </div>
              <div className="bg-white rounded-lg ml-2 h-fit w-fit">
                <img
                  key={products[1].title}
                  src={products[1].thumbnail}
                  alt="thumbnail"
                  className="opacity-60 aspect-square w-[4rem] sm:w-[6rem] object-top object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg h-fit">
              <img
                key={products[2].title}
                src={products[2].thumbnail}
                alt="thumbnail"
                className="opacity-60 aspect-square w-[5rem] sm:w-[10rem] object-top object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="sm:px-6 z-50 py-64 sm:py-40 max-w-[400px] sm:max-w-none"
        >
          <h1 className="font-bold md:text-7xl text-6xl leading-tight sm:leading-normal">
            Hi, I am
            <br />
            <span className="text-blue-600 md:text-7xl xl:text-8xl text-6xl line-clamp-1">
              Liu Jiahui
            </span>
          </h1>
          <p className="text-gray-700 md:text-xl mt-6">
            I build beautiful products with the latest technologies and
            frameworks. I am a passionate developers that love to build amazing
            products.
          </p>
          <div className="flex items-center justify-center md:gap-3 gap-6 mt-6">
            {socialMedia.map(({ id, img, link }) => (
              <a
                href={link}
                target="_blank"
                key={id}
                className="w-10 h-10 cursor-pointer flex justify-center z-[999] items-center backdrop-filter backdrop-blur-lg transition saturate-200 bg-opacity-75 dark:bg-black-200 bg-violet-400 hover:opacity-80 rounded-lg border border-black-300"
              >
                <img src={img} alt={id + ""} width={20} height={20} />
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-10 sm:mt-3">
            <a href="#projects">
              <MagicButton
                icon={<FaLocationArrow />}
                position="right"
                title="Show my work"
              />
            </a>
            <a href="#contact">
              <MagicButton
                icon={<FaLocationArrow />}
                position="right"
                title="Contact me"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="max-sm:absolute right-60 bottom-20 min-w-64"
        >
          <div className="flex gap-1 lg:gap-5 w-fit">
            <div className="bg-white rounded-lg h-fit">
              <img
                key={products[3].title}
                src={products[3].thumbnail}
                alt="thumbnail"
                className="opacity-60 aspect-square w-[6rem] sm:w-[12rem] object-top object-cover rounded-lg text-center rounded-lg"
              />
            </div>

            <div className="bg-white mt-3 rounded-lg h-fit">
              <img
                key={products[4].title}
                src={products[4].thumbnail}
                alt="thumbnail"
                className="opacity-60 aspect-square w-[4rem] sm:w-[10rem] object-top object-cover rounded-lg text-center rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </WavyBackground>
  );
};
