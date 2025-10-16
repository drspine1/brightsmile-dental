"use client";



import { motion } from "framer-motion";


// ContactHeader.jsx
export function ContactHeader() {
return (
<header className="bg-blue-900 text-white py-20 mt-[15vh]">
<div className="max-w-6xl mx-auto px-6 text-center">
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl md:text-5xl font-bold"
>
Get in Touch
</motion.h1>
<motion.p
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.15, duration: 0.6 }}
className="max-w-2xl mx-auto mt-4 text-gray-200"
>
Have a question, want to book an appointment, or need urgent dental care? Drop us a message — we’ll get back to you shortly.
</motion.p>
</div>
</header>
);
}