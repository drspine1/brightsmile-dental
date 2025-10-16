"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section id="results" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
        >
          Transforming Smiles, One Patient at a Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg"
        >
          See the real difference our dental expertise makes — confidence begins with a smile you love.
        </motion.p>

        {/* Before & After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl"
        >
          {/* Before Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/after.jpg"
              alt="Before Treatment"
              fill
                sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* After Image Mask */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src="/images/before.jpg"
               alt="After Treatment"
                fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 h-full w-1 bg-blue-400"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            />

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 accent-blue-400"
            />
          </div>

          <div className="flex justify-between text-gray-800 mt-4 px-2">
            <span className="font-bold uppercase text-xl">Before</span>
            <span className="font-bold uppercase text-xl">After</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
