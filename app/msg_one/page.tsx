"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoadingBarDemo() {
  const [progress] = useState(25);

  const router = useRouter();
  const handleNavigation = () => {
    router.push("/msg_two");
  };

  return (
    <div className="min-h-screen text-gray-300 flex flex-col justify-between py-10 px-6 overflow-hidden">
      {/* Progress Bar with animation from top */}
      <motion.div
        className="space-y-2 max-w-xl mx-auto w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Progress
          value={progress}
          className="h-4 bg-white rounded-md [&>div]:bg-green-500"
        />
        <p className="text-gray-400 text-center text-2xl">
          You have completed 1 / 4 of the journey
        </p>
      </motion.div>

      {/* Two Columns with opposing slide-ins */}
      <div className="flex justify-between gap-6 p-8 rounded-3xl mt-10 bg-neutral-700">
        {/* Left Column */}
        <motion.div
          className="flex-1 space-y-4 p-6 bg-neutral-900 rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-semibold text-xl">Why I made this website?</h2>
          <p className="text-lg">
            I made this because I made the same mistake twice, and I know that
            I have disrespected you so much. I know it hurts, and I am really
            sorry about that. Also, I made it to remind myself that I did my
            best to make you understand me right and to improve my design and
            frontend skills &apos;😊&apos;.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex-1 space-y-4 p-6 bg-neutral-900 rounded-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-semibold text-xl">
            Why I feel like I have been misunderstood
          </h2>
          <p className="text-lg">
            I felt that because I really didn&apos;t mean to hurt you. You don&apos;t
            know me well, and this is not who I am. I am better than that, and
            I didn&apos;t want everything to end like this. Let this website be the
            thing that tells you that I really didn&apos;t mean to hurt you. Let me
            explain myself, and then you can make the choice if you would like
            to continue or not.
          </p>
        </motion.div>
      </div>

      {/* Button with upward slide and hover lift */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          className="bg-green-500 text-gray-800 text-lg py-4 px-12 rounded-full hover:bg-green-400 hover:-translate-y-1 transition duration-300 transform"
          onClick={handleNavigation}
        >
          Go On
        </button>
      </motion.div>
    </div>
  );
}
