"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaLocationArrow } from "react-icons/fa6";

export const StickyScroll = ({
  content,
  index,
}: {
  content: {
    logoUrl: string;
    title: string;
    category: string;
    role: string;
    period: string;
    link?: string;
    description: string;
    details: React.ReactNode[];
    right?: React.ReactNode | any;
    backgroundGradient?: string;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [index, isFirstRender]);

  return (
    <motion.div className="min-h-[30rem] h-[calc(100dvh-10rem)] overflow-x-hidden overflow-y-auto grid grid-cols-2 relative gap-10 px-10">
      <div className="flex flex-col sticky px-4 h-fit col-span-2 gap-20 md:col-span-1 top-0">
        <div>
          <div className="flex items-center justify-center gap-1 w-fit border border-slate-300 text-xs rounded-sm px-3 py-2">
            <span className="text-gray-800">Category</span>
            <FaChevronRight className="w-3 h-3" />
            <span className="font-semibold">{content.category}</span>
          </div>

          <motion.a
            href={content.link}
            target="_blank"
            className={cn(
              "flex items-center justify-start mt-6 gap-3 cursor-default",
              content.link &&
                "hover:cursor-pointer hover:opacity-60 transition duration-500"
            )}
          >
            <img
              src={content.logoUrl}
              alt="logoUrl"
              className="w-8 h-8 aspect-square rounded-full"
            />
            <span className="font-semibold text-lg">{content.title}</span>
            {content.link && <FaLocationArrow />}
          </motion.a>
          <motion.h3 className="text-slate-900 mt-6">
            {content.description}
          </motion.h3>
          <motion.h2 className="text-2xl mt-6 font-bold text-slate-900">
            {content.role}
          </motion.h2>
          <motion.h3 className="text-slate-900 mt-2">
            <span className="font-semibold">Time:</span> {content.period}
          </motion.h3>

          <motion.ul>
            {content.details.map((detail, i) => (
              <motion.li
                key={i}
                className="text-base text-slate-900 mt-4 ml-3 list-disc"
              >
                {detail}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="md:hidden block rounded-md mx-auto mt-6 overflow-hidden">
            {content.right ?? null}
          </motion.div>
        </div>
      </div>
      <div
        ref={ref}
        className="hidden md:block justify-self-center rounded-md overflow-hidden w-full h-fit top-40"
      >
        {content.right ?? null}
        <div className="h-40" />
      </div>
    </motion.div>
  );
};
