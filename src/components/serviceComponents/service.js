"use client";
import { motion } from "framer-motion";


import { services } from "../../Datas";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
        >
          Your Smile, Our Priority
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg"
        >
          Comprehensive dental care for a healthier, brighter smile. Explore our wide range of professional dental services.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="mb-4 flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-700 text-center text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
