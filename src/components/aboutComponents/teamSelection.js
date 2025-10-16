"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    { name: "Dr. Amelia Roberts", role: "Chief Dentist", img: "/images/doc1.jpg" },
    { name: "Dr. Ethan Brooks", role: "Orthodontist", img: "/images/doc3.jpg" },
    { name: "Dr. Clara Lee", role: "Cosmetic Dentist", img: "/images/doc2.jpg" },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-600">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-700 font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
