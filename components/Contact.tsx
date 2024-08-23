"use client";

import { socialMedia } from "@/data/socialMedia";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { CopyButton } from "./ui/CopyButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Contact = () => {
  return (
    <BackgroundGradientAnimation containerClassName="h-[calc(100dvh)]">
      <div id="contact" className="flex justify-center relative pt-48 z-50">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Ready to work together?"
          />
          <p className="text-gray-600 md:mt-10 my-5 text-center">
            Reach out today and let&apos;s discuss how I can help you achieve
            your goals
          </p>

          <div className="flex items-center md:gap-3 gap-6">
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

          <CopyButton />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};
