// ContactInfo.jsx
"use client";
import {motion} from "framer-motion";
export function ContactInfo() {
return (
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="bg-white rounded-2xl shadow-md p-6 mt-20"
>
<h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Contact Information</h3>
<ul className="text-gray-700 space-y-3">
<li>
<strong>Address:</strong> 123 Smile Street, Lagos, Nigeria
</li>
<li>
<strong>Phone:</strong> <a href="tel:+2348123456789" className="text-blue-600">+234 812 345 6789</a>
</li>
<li>
<strong>Email:</strong> <a href="mailto:info@brightsmile.com" className="text-blue-600">info@brightsmile.com</a>
</li>
<li>
<strong>Hours:</strong> Mon–Fri: 8:00am–6:00pm · Sat: 9:00am–3:00pm
</li>
</ul>


<div className="mt-6">
<h4 className="font-medium mb-2">Emergency?</h4>
<p className="text-lg text-gray-600">Call our emergency line for urgent dental care — we reserve same-day slots for emergencies.</p>
</div>
</motion.div>
);
}