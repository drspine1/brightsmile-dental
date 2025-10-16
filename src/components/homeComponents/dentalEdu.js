"use client";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import {dentalTips} from "../../Datas";

export default function DentalEducationAndPromise() {
  return (
    <section className="py-20 bg-gray-50 mt-40">
      {/* Dental Tips Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
        >
          Dental Tips & Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Stay informed with our latest dental health insights. Discover simple
          ways to maintain your smile and prevent common oral issues.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dentalTips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Image
                src={tip.icon}
                alt={tip.title}
                width={400}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 mb-3">{tip.text}</p>
              <Link
                href="/blog"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smile Promise Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once:true}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Smile Promise
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          At <span className="font-semibold">BrightCare Dental Clinic</span>, we
          are committed to providing personalized, pain-free, and compassionate
          dental care. Your comfort and confidence are our top priorities.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
            {
              icon: <IoShieldCheckmark size={40} />,
              title: "Safe & Certified",
              desc: "We follow strict hygiene standards to ensure your safety.",
            },
            {
              icon: <LuHeartHandshake size={40} />,
              title: "Patient-Centered",
              desc: "Every treatment plan is personalized for your unique smile.",
            },
            {
              icon: <FaRegLightbulb size={40} />,
              title: "Modern Techniques",
              desc: "We use the latest dental technology for effective results.",
            },
          ].map((promise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ delay: i * 0.2 }}
              className="bg-white text-blue-700 rounded-xl p-6 w-72 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-3">{promise.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{promise.title}</h3>
              <p className="text-gray-700 text-sm">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
