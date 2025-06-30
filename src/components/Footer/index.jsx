import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTimes,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#2A4D1F] text-white px-4 sm:px-6 md:px-12 py-20">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto mb-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h3 className="text-2xl md:text-[2.625rem] leading-[1em] font-[600] max-w-xl">
            Subscribe Our Newsletter For More News and Info Update:
          </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full max-w-xs">
            <div className="w-full">
              <label htmlFor="email" className="text-sm uppercase mb-1 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Insert Email Address"
                className="px-4 py-3 rounded-md w-full bg-[#f8eee6] text-black outline-none placeholder:text-gray-300 text-sm"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#69cf3d] hover:bg-lime-600 text-black font-semibold px-8 py-[1.2rem] text-sm rounded-md transition">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="mt-6 border-white" />
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">
        {/* Logo + Description */}
        <div className="space-y-4 max-w-sm">
          <Image
            src="/assets/images/footer-logo.png"
            alt="Tracyle Logo"
            width={200}
            height={60}
            className="object-contain"
          />
          <div>
            <h2 className="text-3xl mb-3">Let’s Build a Greener Today </h2>
            <p className="text-[#E9E9E9] leading-relaxed">
              Whether you are a startup, MNC, or brand owner, we simplify
              compliance while accelerating your sustainability goals.
            </p>
          </div>
          <div className="flex space-x-6 text-xl">
            <Link href="#" className="hover:text-[#69cf3d]">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-[#69cf3d]">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-[#69cf3d]">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Quick Links */}
          <div>
            <h4 className="text-3xl font-[600] mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {["about", "services", "blog", "contact"].map((text, i) => (
                <li key={i}>
                  <Link
                    href={`/${text}`}
                    className="flex items-center gap-2 text-[16px] text-[#E9E9E9] hover:text-[#69cf3d] capitalize"
                  >
                    <FiChevronRight className="text-2xl" />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-3xl font-[600] mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {["Privacy and Policy", "Terms and Conditions"].map((text, i) => (
                <li key={i}>
                  <Link
                    href={`/${text}`}
                    className="flex items-center gap-2 text-[16px] text-[#E9E9E9] hover:text-[#69cf3d]"
                  >
                    <FiChevronRight className="text-2xl" />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-3xl font-[600] mb-4">Contact Us</h4>
            <ul className="space-y-4 text-[16px] text-[#E9E9E9]">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                <p>+91-8800282830</p>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-2xl" />
                <p className="break-all">deepakgupta@greenpulsesolution.com</p>
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="text-lg" />
                <p>www.greenpulsesolution.com</p>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                <p>Delhi NCR | PAN India Operations</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
