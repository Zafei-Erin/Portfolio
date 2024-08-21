import { cn } from "@/lib/utils";

type Props = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  disabled?: boolean;
};

export const MagicButton: React.FC<Props> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  disabled,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="relative w-fit inline-flex h-12 overflow-hidden md:mt-10 rounded-full p-[1px] focus:outline-none disabled:cursor-not-allowed"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full bg-white text-indigo-700 px-6 text-sm font-medium backdrop-blur-3xl",
          otherClasses
        )}
      >
        {position == "left" && icon}
        {title}
        {position == "right" && icon}
      </span>
    </button>
  );
};
