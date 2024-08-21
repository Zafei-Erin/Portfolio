"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverMovingCard = ({
  imageUrl,
  imageClassName,
  className,
  logoUrl,
  title,
  handleClick,
}: {
  imageUrl: string;
  imageClassName?: string;
  className?: string;
  logoUrl: string;
  title: string;
  handleClick?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <button className="group/card" onClick={handleClick}>
      <motion.div
        ref={ref}
        className={cn(
          "w-full h-auto aspect-[4/5] bg-transparent rounded-lg overflow-hidden relative",
          className
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="relative w-full h-full"
            initial="initial"
            whileHover={"bottom"}
          >
            <motion.div
              variants={variants}
              className="h-fit w-full"
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Image
                alt="image"
                className={cn(
                  "h-full w-full object-cover object-top",
                  imageClassName
                )}
                width="3000"
                height="4000"
                src={imageUrl}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="flex items-center justify-start mt-6 gap-3">
        <img
          src={logoUrl}
          alt="logoUrl"
          className="w-8 h-8 aspect-square rounded-full"
        />
        <span className="font-semibold group-hover/card:text-gray-400 transition duration-700">
          {title}
        </span>
      </div>
    </button>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  bottom: {
    y: -20,
  },
};
