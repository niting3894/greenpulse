"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is EPR (Extended Producer Responsibility) Compliance?",
    answer:
      "EPR is a legal framework introduced by the Government of India that makes producers, importers, and brand owners (PIBOs) responsible for the end-of-life management of their products and packaging. This includes collection, recycling, and environmentally sound disposal. Green Pulse Solution Pvt. Ltd. offers end-to-end EPR compliance services across all waste categories.",
  },
  {
    question: "Who needs to comply with EPR in India?",
    answer:
      "Businesses involved in manufacturing, importing, or selling products that generate Plastic waste, E-waste, Batteries, Tyre waste, Used Oil are required to register under EPR with CPCB/SPCB and fulfil their waste management responsibilities.",
  },
  {
    question: "How can Green Pulse Solution help with EPR Compliance?",
    answer:
      "We assist with:\n• CPCB registration\n• Waste mapping & documentation\n• Reverse logistics network setup\n• Recycler tie-ups\n• Quarterly & annual reporting\n• Audit support and ESG alignment\nOur process ensures full compliance with the latest CPCB norms.",
  },
  {
    question: "What are the penalties for non-compliance with EPR guidelines?",
    answer:
      "Non-compliance may result in heavy fines, legal action, cancellation of licenses, and blacklisting from CPCB’s portal. It can also damage a brand's reputation and halt operations.",
  },
  {
    question: "Do you offer services PAN India?",
    answer:
      "Yes. Green Pulse Solution operates across India, offering compliance, waste collection, and recycling services in all major states and union territories.",
  },
  {
    question: "What documents are required for CPCB registration under EPR?",
    answer:
      "Typically required documents include:\n• Company PAN & GST\n• Incorporation certificate\n• Product details\n• Waste generation estimate\n• Action plan for waste management\n• Agreements with recyclers/logistics partners\nWe assist with preparing and uploading these documents as per CPCB’s portal requirements.",
  },
  {
    question: "How does EPR support ESG (Environmental, Social, Governance) goals?",
    answer:
      "EPR plays a crucial role in ESG by:\n• Reducing environmental impact\n• Promoting responsible production and recycling\n• Ensuring transparency through verified reports\n• Supporting social causes by integrating informal sector waste workers\nWe help our clients align their EPR actions with ESG frameworks like BRSR, GRI, and CDP.",
  },
  {
    question: "Do you provide all waste EPR credits or offset solutions for the Compliance submission?",
    answer:
      "Yes. We offer all waste related EPR credits compliance mechanism that allow brands to offset their waste generation by financing equivalent waste recycling, verified by CPCB-registered entities.",
  },
  {
    question: "What types of waste categories do you manage under EPR?",
    answer:
      "We cover:\n• Plastic Waste Management (PWM)\n• E-Waste Management\n• Battery Waste Management (BWM)\n• Tyre Waste Management\n• Multilayered Packaging (MLP)\n• Used Oil Recycling.",
  },
  {
    question: "How can I get started with your compliance services?",
    answer:
      "Simply [Contact Us] through our inquiry form or call our helpline. Our team will schedule a free consultation to understand your business type, waste generation, and required compliance needs. From there, we’ll create a tailored roadmap to ensure full compliance and sustainable waste management.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[600] text-gray-900 mb-6 leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>
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
                    <p className="mt-4 text-[#8D8D8D] text-base border-t border-lime-500 pt-6 whitespace-pre-line">
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

