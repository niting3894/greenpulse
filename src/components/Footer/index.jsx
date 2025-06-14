import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTimes, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

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
        <div className="space-y-8 max-w-lg">
          <Image
            src="/assets/images/logo.png"
            alt="Tracyle Logo"
            width={200}
            height={60}
            className="object-contain"
          />
          <p className="text-[#E9E9E9] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
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
            <h4 className="text-3xl font-[600] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About", "Services", "Case Studies", "FAQ's"].map((text, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-[16px] text-[#E9E9E9] hover:text-[#69cf3d]"
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
            <h4 className="text-3xl font-[600] mb-4">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Privacy and Policy",
                "Terms and Conditions",
                "Disclaimer",
                "Support",
              ].map((text, i) => (
                <li key={i}>
                  <Link
                    href="#"
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
            <h4 className="text-3xl font-[600] mb-4">Working Hour</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p>Monday – Saturday</p>
                <p className="text-gray-300">08:00 - 15:00</p>
              </li>
              <li>
                <p>Sunday</p>
                <p className="text-gray-300">10:00 - 12:00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
