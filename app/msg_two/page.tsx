"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Bear from "@/public/BearTear.jpeg";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const correctPhone = "01119708905"; // Replace with the actual correct value

  const handleValidation = () => {
    if (input === correctPhone) {
      setError(false);
      router.push("/msg_three");
    } else {
      setError(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInput(value);
      if (error) setError(false);
    }
  };

  const isCorrect = input === correctPhone;

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
          value={50}
          className="h-4 bg-white rounded-md [&>div]:bg-green-500"
        />
        <p className="text-gray-400 text-center text-2xl">
          You have completed 2 / 4 of the journey
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="mt-12 p-8 bg-neutral-700 rounded-3xl flex flex-col items-center gap-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={Bear} alt="Sad Bear" width={200} height={200} />

        {/* Text Section */}
        <div className="w-full text-left">
          <h1 className="text-3xl font-bold">I &apos;m really sorry</h1>
          <p className="text-lg text-gray-300 mt-2">
            I didn &apos;t mean to slip up and mention someone else &apos;s name.
            You know by now—we &apos;re grown-ups, and things like that happen.
            There &apos;s still so much I want to say, but I &apos;ll only say it in a voice note,
            so you can really hear what I mean.
            <br /><br />
            In the meantime, here &apos;s a little mini-game:
            guess a number I truly care about{" :) "}
          </p>
        </div>

        {/* Input Field */}
        <div className="w-full">
          <input
            type="text"
            inputMode="numeric"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter the number the dev cares about"
            className={`w-full p-4 rounded-xl text-lg bg-gray-800 text-white outline-none ${
              error ? "border-2 border-red-500" : ""
            }`}
          />
          {error && (
            <p className="text-red-500 text-base mt-2 text-center">
              That &apos;s not quite right. Ask the dev for a hint or try again!
            </p>
          )}
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
          disabled={!isCorrect}
          className={`text-lg py-4 px-12 rounded-full transition duration-300 transform ${
            isCorrect
              ? "bg-green-500 text-gray-800 hover:bg-green-400 hover:-translate-y-1"
              : "bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed"
          }`}
        >
          You are almost done
        </button>
      </motion.div>
    </div>
  );
}
