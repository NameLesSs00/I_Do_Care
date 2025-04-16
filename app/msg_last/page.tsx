"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function FinalPage() {
  const [open, setOpen] = useState(false);
  const [responseType, setResponseType] = useState<"yes" | "no" | null>(null);
  const router = useRouter();

  const handleResponse = (type: "yes" | "no") => {
    setResponseType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      router.push("/thank-you");
    }, 300);
  };

  return (
    <div className="min-h-screen text-gray-300 flex flex-col py-10 px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-neutral-800 relative">
      {/* Progress Bar */}
      <motion.div
        className="space-y-2 max-w-xl mx-auto w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Progress
          value={100}
          className="h-4 bg-white rounded-md [&>div]:bg-green-500"
        />
        <p className="text-gray-400 text-center text-2xl">
          You have completed the journey
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="mt-12 max-w-2xl mx-auto flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Section 1 */}
        <div className="p-8 bg-neutral-700 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Knowing that yo &apos;ve come this far... you do care about me, right?
          </h2>
          <p className="text-lg text-gray-200">
            Listen, Dunya — let&apos;s handle this like adults. You have the choice
            to either continue or not. I will never push you toward a decision
            you don&apos;t want to make. By now, I hope you know that I want to
            continue — because I believe I can learn a lot from you.
            <br /><br />
            There&apos;s something you may not know about me: in every relationship
            I enter, I genuinely try to grow. I&apos;m not looking for marriage, nor
            just someone to spend free time with. No — I&apos;m looking for someone
            to grow with. That&apos;s the real me.
          </p>
        </div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Section 2 */}
        <div className="p-8 bg-neutral-700 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            So here&apos;s what will happen if we continue:
          </h2>
          <p className="text-lg text-gray-200">
            By saying <strong>yes</strong>, you agree that:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>We&apos;re going to grow together</li>
              <li>We&apos;ll accept that we are human and we make mistakes</li>
              <li>We&apos;ll try to understand each other the best we can</li>
              <li>We&apos;ll respect each other always</li>
            </ul>
            <br />
            By saying <strong>no</strong>, you agree that:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Each of us should continue our lives separately (and I&apos;m okay with that, if that&apos;s your choice)</li>
              <li>We won&apos;t talk to each other again, because this friendship wouldn&apos;t be worth the pain</li>
              <li>We still respect each other — but sometimes, letting go is kinder than holding on</li>
            </ul>
          </p>
        </div>

        {/* Button Row */}
        <div className="mt-16 flex justify-between">
          <button
            onClick={() => handleResponse("yes")}
            className="bg-green-300 hover:bg-green-400 text-green-900 font-bold py-3 px-8 rounded-xl"
          >
            Yes
          </button>
          <button
            onClick={() => handleResponse("no")}
            className="bg-red-300 hover:bg-red-400 text-red-900 font-bold py-3 px-8 rounded-xl"
          >
            No
          </button>
        </div>
      </motion.div>

      {/* Modal Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="backdrop-blur-md bg-neutral-800 border border-neutral-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              {responseType === "yes"
                ? "Good to know that you care too ❤️"
                : "That's okay."}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300 mt-4 text-lg">
              {responseType === "yes"
                ? "Thank you for your time. I'm really happy that you want to continue what we've started."
                : "It's still okay. I respect you deeply, and I hope you live a beautiful, meaningful life."}
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleClose}
              className="bg-white text-neutral-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200"
            >
              Thanks for your time
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
