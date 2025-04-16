"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import BGimg from "@/public/cuteBg.webp";

export default function LandingPage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/msg_one");
  };

  return (
    <div className="flex flex-col h-screen justify-between px-4 py-8 overflow-hidden">
      {/* Title Section */}
      <motion.div
        className="text-6xl font-bold text-gray-700 bg-cover bg-center rounded-lg p-12 min-h-[200px]"
        style={{ backgroundImage: `url(${BGimg.src})` }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        aria-label="Background image with love theme"
      >
        I Do Care
      </motion.div>

      {/* Text Section with background */}
      <motion.div
        className="bg-neutral-800 text-gray-300 text-xl p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        This website is made by Paul for Dunya it is also made with love {"<3"}
        <br />
        It would be also nice to listen to the song{" "}
        <a
          href="https://www.youtube.com/watch?v=gVqGKkm7xBE" // Replace with the actual link to the song
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          SNAP
        </a>
        {" "} to improve the experience.
      </motion.div>

      {/* Button with navigation */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={handleNavigation}
          className="bg-green-500 text-gray-800 text-lg py-4 px-12 rounded-full hover:bg-green-400 hover:-translate-y-1 transition duration-300 transform"
        >
          Start the Journey
        </button>
      </motion.div>
    </div>
  );
}
