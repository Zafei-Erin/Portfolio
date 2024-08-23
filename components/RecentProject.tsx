"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineDateRange, MdOutlinePeopleAlt } from "react-icons/md";
import { VscTerminal } from "react-icons/vsc";

export function RecentProject() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    const handleResize = () => {
      let left = 0;
      if (window.innerWidth < 1024) {
        left = (window.innerWidth - 40 - 340) / (cards.length - 1);
        setIsMobile(true);
      } else {
        left =
          (Math.min(window.innerWidth, 1300) - 40 - 386) / (cards.length - 1);
        setIsMobile(false);
      }
      setLeft(left);
    };

    // Initialize on component mount
    handleResize();

    // Update on window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="h-screen min-h-screen" id="projects">
      <h2 className="max-w-7xl px-6 lg:px-3 py-16 mx-auto text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Recent Projects
      </h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full lg:h-fit lg:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={2000}
                  height={2000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description()}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 gap-2 py-3 flex items-center justify-start text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                    <FaLocationArrow />
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs lg:text-sm xl:text-base h-fit lg:h-80 pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="flex items-center justify-center">
        <ul
          className="relative"
          style={{
            width: isMobile
              ? `${336 + (cards.length - 1) * left}px`
              : `${384 + (cards.length - 1) * left}px`,
          }}
        >
          {cards.map((card, index) => {
            return (
              <motion.div
                whileHover={{
                  translateY: -30,
                  scale: 1.08,
                  zIndex: 100,
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, translateX: 30 }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 0.3 * index },
                }}
                style={{
                  zIndex: index,
                  left: `${left * index}px`,
                  top: isMobile ? `${80 * index}px` : "0px",
                }}
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className={cn(
                  "absolute h-[30rem] w-[21rem] rounded-3xl overflow-hidden shadow-sm lg:h-[40rem] hover:shadow-2xl lg:w-96 flex-0 cursor-pointer lg:left-[300px]"
                )}
              >
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="h-full w-full"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute h-full w-full top-0 inset-x-0 pt-16 px-10 text-white bg-gradient-to-b from-black/90 to-black/50 z-30"
                  >
                    <h2 className="text-3xl font-semibold  ">{card.title}</h2>
                    <p className="mt-16 text-pretty">{card.introduction}</p>
                  </motion.div>
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={2000}
                    height={3000}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className={cn("object-cover object-top", card.position)}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: () => (
      <div>
        <p className="font-medium">2024 Chainlink Hackathon Prize Winner</p>
        <div className="flex items-center justify-start gap-3 text-xs mt-3">
          <div className="flex items-center justify-start gap-2 bg-emerald-100 rounded-md px-3 py-1">
            <BiCategoryAlt className="w-4 h-4" />
            <span className="font-medium">Web 3.0</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-violet-100 rounded-md px-3 py-1">
            <MdOutlinePeopleAlt className="w-4 h-4" />
            <span className="font-medium">Fullstack Engineer</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-amber-100 rounded-md px-3 py-1">
            <MdOutlineDateRange className="w-4 h-4" />
            <span className="font-medium">May 2024</span>
          </div>
        </div>
      </div>
    ),
    title: "Synthetic Crude Oil Token",
    src: "/soil-token.png",
    introduction:
      "The trading platform for efficient and fractional trading of sOIL, a tokenization of crude oil value.",
    ctaText: "Go",
    position: "center",
    ctaLink: "https://soil-token.vercel.app/",
    content: () => {
      return (
        <div className="pb-16">
          <h3 className="text-lg font-semibold">What it is</h3>
          <p>
            The trading platform for efficient and fractional trading of sOIL, a
            tokenization of crude oil value.
          </p>
          <h3 className="text-lg font-semibold mt-3">What it does</h3>
          <p>
            The Synthetic Crude Oil Token project tokenizes crude oil, creating
            an ERC-20 token backed by WETH and DAI with a requirement for 150%
            collateral. The token is available on Optimism, Avalanche, and
            Polygon networks, with cross-chain price updates facilitated by
            Chainlink CCIP. The system allows users to:
            <ul className="list-disc list-inside">
              <li className="list-item">
                Deposit collateral and mint synthetic crude oil tokens.
              </li>
              <li>Redeem collateral and burn tokens.</li>
              <li>
                Improve their health factor by depositing collateral without
                minting.
              </li>
              <li>
                Liquidate under-collateralized positions, rewarding liquidators
                with a 10% bonus.
              </li>
            </ul>
          </p>
        </div>
      );
    },
  },
  {
    description: () => (
      <div>
        <div className="flex items-center justify-start gap-3 text-xs mt-3 w-full">
          <div className="flex items-center justify-start gap-2 bg-emerald-100 rounded-md px-3 py-1">
            <BiCategoryAlt className="w-4 h-4" />
            <span className="font-medium">Web 3.0</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-violet-100 rounded-md px-3 py-1">
            <MdOutlinePeopleAlt className="w-4 h-4" />
            <span className="font-medium">Fullstack</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-amber-100 rounded-md px-3 py-1">
            <MdOutlineDateRange className="w-4 h-4" />
            <span className="font-medium">Feb - Mar 2024</span>
          </div>
        </div>
      </div>
    ),
    title: "NFT Marketplace",
    src: "/nft-mkp.png",
    introduction:
      "An OpenSea clone where users can publish and list, buy and sell NFTs.",
    ctaText: "Go",
    position: "object-left",
    ctaLink: "https://nft-mkp.vercel.app/",
    content: () => {
      return (
        <div className="pb-16">
          <h3 className="text-lg font-semibold">What it is</h3>
          <p>
            An OpenSea clone where users can publish and list, buy and sell
            NFTs.
          </p>
          <h3 className="text-lg font-semibold mt-3">What it does</h3>
          <p>
            This project is an OpenSea-inspired platform designed to empower
            users with the ability to effortlessly publish, list, buy, and sell
            NFTs. <br />
            <br />
            Powered by Web3.js and Ethers.js, it provides seamless wallet
            integration and smart contract interaction, creating a fully
            decentralized marketplace where digital assets and collectibles can
            be exchanged securely and transparently. <br />
            <br />
            Users can mint their own NFTs, showcase their collections, and
            engage with a thriving community of artists, collectors, and
            enthusiasts.
          </p>
        </div>
      );
    },
  },
  {
    description: () => (
      <div>
        <div className="flex items-center justify-start gap-3 text-xs mt-3 w-full">
          <div className="flex items-center justify-start gap-2 bg-emerald-100 rounded-md px-3 py-1">
            <BiCategoryAlt className="w-4 h-4" />
            <span className="font-medium">Web 3.0</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-violet-100 rounded-md px-3 py-1">
            <MdOutlinePeopleAlt className="w-4 h-4" />
            <span className="font-medium">Frontend</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-amber-100 rounded-md px-3 py-1">
            <MdOutlineDateRange className="w-4 h-4" />
            <span className="font-medium">Jan 2024</span>
          </div>
        </div>
      </div>
    ),
    title: "Explorer",
    src: "/explorer.png",
    introduction:
      "An Etherscan clone project that allow users to query on blocks, transactions and accounts.",
    ctaText: "Go",
    position: "object-left",
    ctaLink: "https://web3-project-zafei-erin.vercel.app/",
    content: () => {
      return (
        <div className="pb-16">
          <h3 className="text-lg font-semibold">What it is</h3>
          <p>
            An Etherscan clone project that allow users to query on blocks,
            transactions and accounts.
          </p>
          <h3 className="text-lg font-semibold mt-3">What it does</h3>
          <p>
            This Etherscan clone project is designed to allow users to query
            blocks, transactions, and accounts with ease. <br />
            <br /> The platform fetches data from multiple Web3 API providers,
            including Alchemy, Etherscan, and Infura, to deliver real-time
            blockchain information. <br />
            <br />
            It features a user-friendly interface that replicates 80% of the
            core functionality of Etherscan, allowing users to explore and
            monitor blockchain activities.
          </p>
        </div>
      );
    },
  },
  {
    description: () => (
      <div>
        <div className="flex flex-wrap items-center justify-start gap-3 text-xs mt-3 w-full">
          <div className="flex items-center justify-start gap-2 bg-emerald-100 rounded-md px-3 py-1">
            <BiCategoryAlt className="w-4 h-4" />
            <span className="font-medium line-clamp-1">
              Distributed Systems
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-violet-100 rounded-md px-3 py-1">
            <MdOutlinePeopleAlt className="w-4 h-4" />
            <span className="font-medium">Backend</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-sky-100 rounded-md px-3 py-1">
            <VscTerminal className="w-4 h-4" />
            <span className="font-medium">Golang</span>
          </div>
          <div className="flex items-center justify-start gap-2 bg-amber-100 rounded-md px-3 py-1">
            <MdOutlineDateRange className="w-4 h-4" />
            <span className="font-medium">Sep-Dec 2023</span>
          </div>
        </div>
      </div>
    ),
    title: "Maze Game",
    src: "/mzgm.png",
    introduction:
      "A treasure-collecting game that builts on fault-tolerant peer-to-peer distributed systems.",
    ctaText: "Go",
    position: "object-left object-top",
    ctaLink: "https://github.com/Zafei-Erin/Game",
    content: () => {
      return (
        <div className="pb-16">
          <h3 className="text-lg font-semibold">What it is</h3>
          <p>
            A treasure-collecting game that builts on fault-tolerant
            peer-to-peer distributed systems.
          </p>
          <h3 className="text-lg font-semibold mt-3">What it does</h3>
          <p>
            This treasure-collecting game reaches high reliability, backed by a
            fault-tolerant peer-to-peer distributed system. It ensures that:
            <ul className="list-disc list-inside">
              <li className="list-item">
                Server Resilience: Servers automatically regenerate and
                synchronize game data, enhancing reliability and preventing data
                loss.
              </li>
              <li>
                Efficient and secure Data Handling: A multi-threaded server
                architecture manages concurrent player interactions and protects
                shared data.
              </li>
              <li>
                Player Management: A heartbeat mechanism efficiently identifies
                and cleans up crashed players to maintain game stability and
                performance.
              </li>
            </ul>
          </p>
        </div>
      );
    },
  },
];
