
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{11}$/;

    if (!nameRegex.test(formData.name))
      newErrors.name = "Please enter a valid name.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormFilled =
    formData.name && formData.email && formData.phone && formData.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully! ");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6 w-full md:max-w-xl mx-auto my-30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-blue-700 text-center">
        Get in Touch
      </h2>

      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="John Doe"
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
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="johndoe@email.com"
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
          type="text"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="+2348012345678"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Your Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormFilled || isLoading}
        className={`w-full font-semibold py-3 rounded-lg transition duration-300 ${
          !isFormFilled || isLoading
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-center text-sm mt-3 ${
            status.includes("successfully") ? "text-green-600" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </motion.form>
  );
}
