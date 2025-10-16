"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cards } from "../../Datas";

export default function MissionVision() {
  return (
    <section className="py-20 bg-blue-50 text-gray-900 md:mt-30  mt-18">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Mission, Vision & Objective</h2>
        <p className="text-lg text-gray-600">What drives our practice every day.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Image src={item.img} alt={item.title} 
             width={700}
             height={800}
            className="rounded-xl mb-4  object-cover" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
