"use client";
import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [
    "/images/moment1.jpg",
    "/images/moment2.jpg",
    "/images/moment3.jpg",
    "/images/care.jpg",
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-600">Clinic Moments</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="clinic gallery"
            className="rounded-xl shadow-lg object-cover h-56 w-full hover:scale-105 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
}
