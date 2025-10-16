"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Data as faqs } from "../../Datas";
export default function FAQSection() {
  return (
    <section className="w-[90%] md:w-[70%] mx-auto my-24 text-center">
      {/* Header animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Got questions? We’ve got answers to help you feel confident about your dental care.
        </p>
      </motion.div>

      {/* Animated accordion list */}
      <Accordion type="single" collapsible className="w-full md:w-[80%] mx-auto text-left">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger className="text-xl text-gray-800 font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}