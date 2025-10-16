 "use client";

export const metadata = {
  title: "Book Appointment | SmileCraft Dental Clinic",
  description:
    "Schedule your dental appointment online with SmileCraft Dental Clinic. Quick, easy, and convenient — your bright smile awaits!",
  keywords: [
    "book dentist appointment",
    "dental booking",
    "dentist near me",
    "SmileCraft appointment",
  ],
  openGraph: {
    title: "Book Appointment | SmileCraft Dental Clinic",
    description:
      "Book your next dental visit with SmileCraft Dental — expert care made simple.",
    url: "https://brightsmile-dental-clinic.vercel.app/booking",
    siteName: "SmileCraft Dental",
    images: [
      {
        url: "https://brightsmile-dental-clinic.vercel.app/images/dentist.jpg",
        width: 800,
        height: 600,
        alt: "Booking your dental appointment at SmileCraft Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// app/booking/page.js
export default function BookingPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    doctor: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{11}$/;
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.doctor) newErrors.doctor = "Please select a doctor.";

    return newErrors;
  };

  const isFormFilled =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.date &&
    formData.service &&
    formData.doctor;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          service: "",
          doctor: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f9f9ff] min-h-screen mt-17 relative">
      {/* ✅ Hero Section */}
      <section className="pt-32 pb-20 bg-[#003366] text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Book an Appointment
        </motion.h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-6">
          Schedule your visit today and choose your preferred doctor.
        </p>
      </section>

      {/* ✅ Booking Form */}
      <section className="w-[90%] md:w-[60%] mx-auto bg-white rounded-2xl shadow-xl my-20 p-8 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Service Needed
              </label>
              <select
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="">Select a service</option>
                <option>Teeth Cleaning</option>
                <option>Whitening</option>
                <option>Dental Check-up</option>
                <option>Root Canal</option>
                <option>Braces Consultation</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Doctor
              </label>
              <select
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
              >
                <option value="">Choose a doctor</option>
                <option>Dr. Sarah Johnson – Orthodontist</option>
                <option>Dr. Michael Brown – Pediatric Dentist</option>
                <option>Dr. Linda Smith – Cosmetic Dentist</option>
                <option>Dr. Daniel Lee – Endodontist</option>
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message (Optional)
            </label>
            <textarea
              className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
              rows="4"
              placeholder="Additional notes..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormFilled || isSubmitting}
            className={`w-full py-3 text-lg rounded-md transition-all ${
              !isFormFilled || isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </section>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-[90%] text-center"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                🎉 Appointment Confirmed!
              </h2>
              <p className="text-gray-600 mb-6">
                We’ll reach out shortly to confirm your schedule.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  router.push("/");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
              >
                Return Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
     
