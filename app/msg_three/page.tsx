"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

export default function ThirdPage() {
  const router = useRouter();

  const handleValidation = () => {
    router.push("/msg_last");
  };

  return (
    <div className="min-h-screen text-gray-300 flex flex-col justify-between py-10 px-6 overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="space-y-2 max-w-xl mx-auto w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Progress
          value={75}
          className="h-4 bg-white rounded-md [&>div]:bg-green-500"
        />
        <p className="text-gray-400 text-center text-2xl">
          You have completed 3 / 4 of the journey
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="mt-12 p-8 bg-neutral-700 rounded-3xl flex flex-col items-center gap-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/BearQues.gif"
          alt="Sad Bear"
          width={200}
          height={200}
          className="rounded-xl"
        />

        <div className="w-full text-center">
          <h1 className="text-4xl font-bold text-white">
            Fearful Avoidance Attachment Style?
          </h1>
          <p className="text-xl text-gray-200 mt-4">
            You are the first person I think has this style.
            You should read more about it {"—"} this style is also very rare, and not in a good way.
            I suggest you explore it further so you can become a healing Fearful Avoidant.

            <br /><br />
            Here{"'"}s a quick summary so we{"'"}re on the same page:

            <br /><br />
            The Fearful Avoidant Attachment Style involves a deep desire for close relationships
            but a fear of being hurt or rejected. People with this style often push others away
            while craving connection, due to past trauma or inconsistent caregiving.

            <br /><br />
            Why is this relevant to us now?

            <br /><br />
            Because you are this kind of people, and it{"'"}s very hard to understand you, to me at least.
            We still don{"'"}t know each other that well, which makes it even harder.
            I need more time to fully understand you {"—"} so I can give you the care and time you need.
          </p>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={handleValidation}
          className="bg-green-500 text-gray-800 text-lg py-4 px-12 rounded-full hover:bg-green-400 hover:-translate-y-1 transition duration-300 transform"
        >
          You are almost there
        </button>
      </motion.div>
    </div>
  );
}
