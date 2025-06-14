"use client";

import Banner from "@/components/Banner";
import FaqSection from "@/components/Section/FaqSection";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission
  };

  return (
    <>
      <Banner title="Contact" backgroundImage="/assets/images/hero-bg.jpg" />
      <section className="bg-[#f9f8f3] py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
            Contact
          </h6>
          <h1 className="text-4xl sm:text-6xl font-[600] text-gray-900 mb-12 sm:mb-16 leading-tight">
            Get In Touch With Us
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase text-gray-800 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insert Name"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
        placeholder:text-gray-400 placeholder:text-sm transition 
        focus:outline-none focus:border-[#69CF3D] text-gray-900
        ${
          formData.name
            ? "bg-white"
            : "bg-[#f8eee6] hover:bg-white focus:bg-white"
        }
      `}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase text-gray-800 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insert Email Address"
                    required
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
    placeholder:text-gray-400 placeholder:text-sm transition 
    focus:outline-none focus:border-[#69CF3D] text-gray-900 
    ${
      formData.email ? "bg-white" : "bg-[#f8eee6] hover:bg-white focus:bg-white"
    }`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm uppercase text-gray-800 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Insert Phone Number"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md placeholder:text-gray-400 placeholder:text-sm transition focus:outline-none focus:border focus:border-[#69CF3D] text-gray-900  ${
                      formData.phone
                        ? "bg-white"
                        : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                    }
      `}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm uppercase text-gray-800 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md placeholder:text-gray-400 placeholder:text-sm transition focus:outline-none focus:border focus:border-[#69CF3D] text-gray-900
                     ${
                       formData.subject
                         ? "bg-white"
                         : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                     }
      `}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm uppercase text-gray-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full border border-gray-200 px-4 py-3 rounded-md placeholder:text-gray-400 placeholder:text-sm transition focus:outline-none focus:border focus:border-[#69CF3D] text-gray-900  ${
                    formData.message
                      ? "bg-white"
                      : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                  }
       resize-y`}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#69cf3d] hover:bg-[#2A4E1A] hover:text-white text-black font-semibold py-4 px-7 text-sm rounded shadow transition"
              >
                Send Message
              </button>
            </form>

            {/* Map */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[400px] lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.0970857645632!2d-0.11809298406654802!3d51.503324779635095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c5d40aa1f1%3A0x88ea9ffbbcb9dbea!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1659999027645!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
