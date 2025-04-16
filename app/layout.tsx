import type { Metadata } from "next";
import "./globals.css";
import { Caveat } from "next/font/google"; // ✅ Import Caveat

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // you can pick the weights you need
});

export const metadata: Metadata = {
  title: "I Do Care",
  description: "I am sorry. Dunya, I want you to know that I truly care about you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FFD1DC] ${caveat.className}`}>
        {children}
      </body>
    </html>
  );
}
