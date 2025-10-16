"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-15vh)] mt-[15vh]">
      {/* ✅ Background Gradient with Reverse Diagonal Shape */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-600 clip-diagonal"></div>

      {/* ✅ Content */}
      <div className="z-10 py-24 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full -mt-20 md:-mt-0">

        {/* ✅ Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-8 md:mt-0 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/dentist.jpg"
              width={600}
              height={400}
              priority
              alt="Dentist smiling with patient"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* ✅ Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left text-[whitesmoke]"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            SmileCraft Dental
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl mb-6 text-white"
          >
            Brighten Your Smile, Brighten Your Day
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8 text-white"
          >
            Modern dental care for all ages — gentle, professional, and affordable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <Link
              href="/booking"
              className="bg-white text-sky-700 hover:bg-sky-100 px-6 py-3 rounded-full shadow-md transition-all duration-300 md:text-lg font-semibold"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="border border-white text-white hover:bg-sky-100 hover:text-sky-700 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer md:text-lg font-semibold hidden md:inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Custom Clip Path for Reverse Diagonal */}
    
    </section>
  );
};

export default HeroComponent;
