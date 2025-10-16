"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Jane Foster", text: "The best dental experience I’ve ever had. The team was kind and professional!" },
    { name: "Michael Smith", text: "From consultation to treatment, everything was smooth and comfortable." },
    { name: "Sarah Johnson", text: "They made me feel at ease and confident in my smile again!" },
  ];

  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">What Our Patients Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <p className="italic text-gray-700 mb-4">“{r.text}”</p>
            <h3 className="font-semibold text-blue-800">{r.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
