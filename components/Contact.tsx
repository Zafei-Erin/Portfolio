"use client";

import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { CopyButton } from "./ui/CopyButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Contact = () => {
  return (
    <BackgroundGradientAnimation containerClassName="h-[calc(100dvh-5.6rem)]">
      <div id="contact" className="flex justify-center relative pt-48">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Ready to work together?"
          />
          <p className="text-gray-600 md:mt-10 my-5 text-center">
            Reach out today and let&apos;s discuss how I can help you achieve
            your goals
          </p>

          <CopyButton />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};
