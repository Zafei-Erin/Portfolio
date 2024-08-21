import Image from "next/image";

export const experience = [
  {
    title: "Lawgic Group",
    category: "AI",
    role: "Front-end Freelancer",
    period: "June 2024 - Present",
    link: "https://www.lawgic.sg/#/home",
    logoUrl: "/lawgic-logo.svg",
    backgroundGradient:
      "linear-gradient(to bottom, white 0%, #cbd5e1 60%, white 100%",
    description:
      "Lawgic is a generative AI company that aims to transform legal practice through AI.",
    imageUrl: "/lawgic-content.png",
    heroUrl: "/lawgic-hero.png",
    details: [
      <div key={0}>
        Led the{" "}
        <span className="underline underline-offset-4 transition hover:decoration-gray-400 hover:text-gray-400">
          frontend framwork migration
        </span>{" "}
        from Vue2 to React, ensuring long-term maintenance, scalability,
        improved development efficiency.
      </div>,
      <div key={1}>
        Implemented an{" "}
        <span className="underline underline-offset-4 transition hover:decoration-gray-400 hover:text-gray-400">
          AI-powered text editor
        </span>{" "}
        with functions including real-time suggestions, translation,
        autocomplete and drafting, making it key driver for the project’s
        revenue generation.
      </div>,
      <div key={2}>
        Developed an{" "}
        <span className="underline underline-offset-4 transition hover:decoration-gray-400 hover:text-gray-400">
          AI chat bot
        </span>{" "}
        to answer user&apos;question based on document.
      </div>,
      <div key={3}>
        Contructed multi step user interface for document translation, enabling
        fluent user workflow.
      </div>,
      <div key={4}>
        Diagnosed and resolved critical bugs,{" "}
        <span className="underline underline-offset-4 transition hover:decoration-gray-400 hover:text-gray-400">
          enhancing the existing code base quality
        </span>{" "}
        , ensuring a seamless user experience, thereby increasing investor
        interest and potential for investment.
      </div>,
    ],
    right: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/lawgic-content.png"
          width={6000}
          height={6000}
          alt="lawgic-content.png"
          className=" object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Runner Trip",
    category: "Sport",
    role: "Fullstack Freelancer",
    period: "April 2024 - Present",
    logoUrl: "/runnertrip-logo.svg",
    backgroundGradient:
      "linear-gradient(to bottom, white 0%, #001D9A2A 60%, white 100%",
    description:
      "A comprehensive marathon event database integrating one-stop service of event registration and travel planning.",
    imageUrl: "/runnertrip-content.png",
    heroUrl: "/runnertrip-hero.png",
    details: [
      <div key={0}>
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          Led the end-to-end development
        </span>{" "}
        of the platform as a core developer, conducting code reviews to ensure
        code quality, facilitating collaboration across the team.
      </div>,
      <div key={1}>
        Leveraged{" "}
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          Python web scraping
        </span>{" "}
        to collect comprehensive event data
      </div>,
      <div key={2}>
        Implemented robust data pipelines, utilizing{" "}
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          Pandas
        </span>{" "}
        for data cleaning and preprocessing, and designing{" "}
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          MongoDB
        </span>{" "}
        schema for efficient storage and retrieval.
      </div>,
      <div key={1}>
        Developed a high-performance and scalable full-stack solution by
        integrating a{" "}
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          React frontend
        </span>{" "}
        with an{" "}
        <span className="underline underline-offset-4 transition hover:decoration-blue-800 hover:text-blue-800">
          Express.js/Node.js backend
        </span>{" "}
        , enabling seamless user interactions and data presentation for marathon
        event details.
      </div>,
    ],
    right: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/runnertrip-content.png"
          width={6000}
          height={6000}
          alt="lawgic-content.png"
          className=" object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "LeetHub-3.0",
    category: "Chrome Extension",
    role: "Open source contributor",
    period: "March 2024",
    link: "https://chromewebstore.google.com/detail/leethub-v3/kdkgpjpenaeoodajljkflmlnkoihkmda",
    logoUrl: "/leethub-logo.png",
    backgroundGradient:
      "linear-gradient(to bottom, white 0%, #fef3c7 60%, white 100%",
    description:
      "A Chrome extension that integrates user’s Leetcode submissions to GitHub.",
    imageUrl: "/leethub-content.png",
    heroUrl: "/leethub-hero.png",
    details: [
      <div key={0}>
        Implemented a feature highly demanded in market, allowing users to push
        previous Leetcode submissions to{" "}
        <span className="underline underline-offset-4 transition hover:decoration-amber-600 hover:text-amber-600">
          Github
        </span>{" "}
        and maintain multiple versions of solution,{" "}
        <span className="underline underline-offset-4 transition hover:decoration-amber-600 hover:text-amber-600">
          increasing new users by 10%.
        </span>{" "}
      </div>,
      <div key={1}>
        Seamlessly{" "}
        <span className="underline underline-offset-4 transition hover:decoration-amber-600 hover:text-amber-600">
          integrated a tooltip into LeetCode webpage
        </span>{" "}
        , aiding{" "}
        <span className="underline underline-offset-4 transition hover:decoration-amber-600 hover:text-amber-600">
          1000+ users
        </span>{" "}
        in utilizing this feature.
      </div>,
      <div key={2}>
        Collaborated with other contributors for smooth{" "}
        <span className="underline underline-offset-4 transition hover:decoration-amber-600 hover:text-amber-600">
          release of the new version.
        </span>{" "}
      </div>,
    ],
    right: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/leethub-content.png"
          width={6000}
          height={6000}
          alt="lawgic-content.png"
          className=" object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Coinhall",
    category: "Web 3.0",
    role: "Frontend intern",
    period: "May - Sep 2023",
    link: "https://coinhall.org/",
    logoUrl: "/coinhall-logo.svg",
    backgroundGradient:
      "linear-gradient(to bottom, white 0%, #f3e8ff 60%, white 100%",
    description:
      "A Web3.0 DEX aggregator that provides prices, charts, swap aggregations in realtime.",
    imageUrl: "/leethub-content.png",
    heroUrl: "/coinhall-hero.png",
    details: [
      <div key={0}>
        Closely collaborated with backend team to implement new features and
        displayed them with{" "}
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          desktop and mobile-responsive design
        </span>{" "}
        , improving app functionality and aesthetics for{" "}
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          200k+ monthly active users
        </span>
        .
      </div>,
      <div key={1}>
        Integrated Kado to facilitate swapping, allowing users to buy tokens
        when their balance is low, ensuring{" "}
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          smooth and uninterrupted transaction experience
        </span>{" "}
        even under insufficient balance, thereby{" "}
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          increasing app usage by 1.3x
        </span>
        .
      </div>,
      <div key={2}>
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          Constructed and refactored
        </span>{" "}
        components for a cleaner, more maintainable code base,{" "}
        <span className="underline underline-offset-4 transition hover:decoration-violet-500 hover:text-violet-500">
          reducing lines of code by 6%
        </span>
        .
      </div>,
    ],
    right: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/coinhall-content.png"
          width={6000}
          height={6000}
          alt="lawgic-content.png"
          className=" object-cover rounded-lg"
        />
      </div>
    ),
  },
];
