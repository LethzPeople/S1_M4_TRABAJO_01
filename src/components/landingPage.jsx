import React from "react";
import { motion } from "framer-motion";
import Footer from "./footer";
import Navbar from "./navbar";

const texto = [
  "The Afterlife isn’t just a bar. It’s a mercenary sanctuary, the place where Night City’s biggest names make history… or die trying.",
  "Located in the heart of southern Watson, this legendary establishment rose from the ashes of its former downtown location. Its owner, Rogue Amendiares, rebuilt the Afterlife in an old morgue, keeping the tradition alive by serving drinks named after edgerunners who went out in a blaze of glory.",
  "Getting in isn’t about how many eddies you have—it’s about reputation. Only the most respected mercs or those with a recommendation from someone powerful can step through our doors.",
  "By the 2070s, the Afterlife had become the center of the mercenary world. High-level fixers like Faraday and legends like David Martinez left their mark here. Fights, underground deals, and high-stakes contracts are just part of the atmosphere. Here, life is a gamble, and only the best survive.",
];

export default function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-start items-center bg-black text-white pt-24 md:pt-28">
      <Navbar />
      <main className="flex-1 p-6 md:pt-10 lg:pt-10 text-center justify-center items-center">
        <div className="border border-red-500 rounded-lg p-4 mt-20 md:mt-10 lg:mt-5 w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
          <div className="flex flex-col items-center">
            <img src="src/assets/afterlife.webp" alt="Imagen" className="w-full md:w-2/3 lg:w-3/4 mb-4" />
            <div className="w-full h-[1px] bg-red-500 mb-4"></div>

            <h1 className="text-cyan-400 text-2xl mb-4">Afterlife</h1>
            <div>
              {texto.map((parrafo, index) => (
                <motion.p
                  key={index}
                  className="mt-4 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  {parrafo}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


