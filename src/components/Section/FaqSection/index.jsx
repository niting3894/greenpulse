"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What types of waste do you handle?",
    answer:
      "We manage a wide range of waste, including household, commercial, industrial, and hazardous waste. Our team ensures proper disposal and recycling based on environmental guidelines.",
  },
  {
    question: "How can I schedule a waste pickup?",
    answer:
      "You can schedule a waste pickup by contacting our support team or using the booking feature on our website.",
  },
  {
    question: "Do you provide recycling services?",
    answer:
      "Yes, we offer comprehensive recycling services for various materials, including paper, plastic, metal, and electronics.",
  },
  {
    question: "What are the benefits of proper waste management?",
    answer:
      "Proper waste management helps reduce pollution, conserve resources, and protect public health and the environment.",
  },
  {
    question: "How do you ensure eco-friendly waste disposal?",
    answer:
      "We follow strict environmental guidelines and partner with certified facilities to ensure safe and eco-friendly waste disposal.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#f9f8f3] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left Side (Heading) */}
        <div className="mb-10 md:mb-0">
          <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
            FAQ
          </h6>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[600] text-gray-900 mb-6 leading-tight">
            Frequently Ask Questions
          </h2>
          <p className="text-[#8D8D8D] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Right Side (Accordion) */}
        <div className="flex flex-col divide-y divide-gray-200 mx-auto md:mx-0">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-green-900 ml-4 flex-shrink-0">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    role="region"
                    id={`faq-content-${index}`}
                    aria-labelledby={`faq-header-${index}`}
                  >
                    <p className="mt-4 text-[#8D8D8D] text-base border-t border-lime-500 pt-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
