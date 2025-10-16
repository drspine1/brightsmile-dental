"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-14 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* BRAND SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">BrightSmile Dental</h2>
          <p className="text-gray-300 leading-relaxed">
            Creating healthy, confident smiles — one patient at a time.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-blue-700 hover:bg-blue-600 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-blue-700 hover:bg-blue-600 rounded-full transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-blue-700 hover:bg-blue-600 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-blue-700 hover:bg-blue-600 rounded-full transition">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* PERMALINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Permalinks</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="#why-us" className="hover:text-white transition">Why Choose Us</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📍 123 Smile Street, Lagos, Nigeria</li>
            <li>📞 +234 812 345 6789</li>
            <li>✉️ info@brightsmile.com</li>
          </ul>
        </motion.div>

        {/* UNIQUE TOUCH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-3 text-gray-300">
            <li>🕓 Monday - Friday: 8:00am - 6:00pm</li>
            <li>🕓 Saturday: 9:00am - 3:00pm</li>
            <li>🛑 Sunday: Closed</li>
          </ul>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
        <p>
          &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All Rights Reserved.
        </p>
        <p className="text-sm italic mt-2 text-blue-300">
          “Your smile is our greatest reward.”
        </p>
      </div>
    </footer>
  );
}
