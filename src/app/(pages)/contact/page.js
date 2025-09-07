"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import FaqSection from "@/components/Section/FaqSection";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContactUsApi } from "@/api/setting";
import { toast } from "react-toastify";
import Loader from "@/components/Loader/Loader";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Please enter a valid email address (e.g., example@domain.com)"
        )
        .matches(
          /.+@.+\..+$/,
          "Invalid email address. Must contain a '.' after '@'"
        )
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        email: values.email,
        mobile_no: values.phone.slice(0, 10), // match API naming
        message: values.message,
      };

      setLoading(true);

      try {
        const data = await ContactUsApi(payload);
        setLoading(false);

        if (data?.status_code === 201) {
          toast.success("Your request has been submitted successfully.");
          resetForm();
        } else {
          toast.error(data?.message || "Something went wrong.");
        }
      } catch (err) {
        setLoading(false);
        toast.error("An error occurred while submitting the form.");
      }
    },
  });

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
            <form
              onSubmit={formik.handleSubmit}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
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
                    {...formik.getFieldProps("name")}
                    placeholder="Insert Name"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
                      placeholder:text-gray-400 placeholder:text-sm transition 
                      focus:outline-none focus:border-[#69CF3D] text-gray-900
                      ${
                        formik.values.name
                          ? "bg-white"
                          : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                      }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-xs">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email */}
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
                    {...formik.getFieldProps("email")}
                    placeholder="Insert Email Address"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
                      placeholder:text-gray-400 placeholder:text-sm transition 
                      focus:outline-none focus:border-[#69CF3D] text-gray-900
                      ${
                        formik.values.email
                          ? "bg-white"
                          : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                      }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
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
                    {...formik.getFieldProps("phone")}
                    placeholder="Insert Phone Number"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
                      placeholder:text-gray-400 placeholder:text-sm transition 
                      focus:outline-none focus:border-[#69CF3D] text-gray-900
                      ${
                        formik.values.phone
                          ? "bg-white"
                          : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                      }`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                {/* Subject */}
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
                    {...formik.getFieldProps("subject")}
                    placeholder="Subject"
                    className={`w-full border border-gray-200 px-4 py-3 rounded-md 
                      placeholder:text-gray-400 placeholder:text-sm transition 
                      focus:outline-none focus:border-[#69CF3D] text-gray-900
                      ${
                        formik.values.subject
                          ? "bg-white"
                          : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                      }`}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
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
                  rows={5}
                  {...formik.getFieldProps("message")}
                  placeholder="Your Message"
                  className={`w-full border border-gray-200 px-4 py-3 rounded-md 
                    placeholder:text-gray-400 placeholder:text-sm transition 
                    focus:outline-none focus:border-[#69CF3D] text-gray-900
                    ${
                      formik.values.message
                        ? "bg-white"
                        : "bg-[#f8eee6] hover:bg-white focus:bg-white"
                    }
                    resize-y`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#69cf3d] hover:bg-[#2A4E1A] hover:text-white text-black font-semibold py-4 px-7 text-sm rounded shadow transition"
                disabled={loading}
              >
                {loading ? <Loader height="25" /> : "Send Message"}
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
