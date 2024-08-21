import { IoCopyOutline } from "react-icons/io5";
import { MagicButton } from "./MagicButton";
import animationData from "@/data/confetti.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";

export const CopyButton = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText("liujh.erin@outlook.com");
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0);
      lottieRef.current.play();
    }

    setTimeout(() => {
      setCopied(false);
    }, 3_000);
  };
  return (
    <div className="mt-5 relative z-50">
      <div className={`absolute -bottom-5 right-0`}>
        <Lottie
          animationData={animationData}
          autoPlay={false}
          onLoad={() => {
            lottieRef.current?.stop();
          }}
          loop={false}
          lottieRef={lottieRef}
        />
      </div>
      <MagicButton
        title={copied ? "Email copied" : "Copy my email"}
        icon={<IoCopyOutline />}
        position="left"
        disabled={copied}
        handleClick={handleCopy}
      />
    </div>
  );
};
