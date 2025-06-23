"use client";

import Banner from "@/components/Banner";
import { getBlogListDetail } from "@/redux/slices/BlogListDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaTimes,
  FaLinkedinIn,
  FaCheck,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ParagraphBlock = ({ paragraphs }) => (
  <div className="space-y-6 text-base leading-relaxed text-[#8D8D8D]">
    {paragraphs.map((text, idx)   => (
      <p key={idx}>{text}</p>
    ))}
  </div>
);

const ImageBlock = ({ src, alt, width, height }) => (
  <div className="rounded-2xl overflow-hidden shadow-md h-full">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
      priority={true} // optional for performance
    />
  </div>
);

const Checklist = ({ items }) => (
  <ul className="space-y-2 text-[#8D8D8D]">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-center">
        <FaCheck className="text-[#69cf3d] mr-2 text-sm" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FooterTags = () => (
  <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-4 gap-4 sm:gap-0">
    <span className="text-base text-gray-500">Post Tags:</span>
    <div className="flex space-x-4 text-gray-800 text-lg">
      <span className="text-base text-gray-500">Share:</span>
      <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
      <FaTimes className="hover:text-red-600 cursor-pointer" />
      <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
    </div>
  </div>
);

export default function BlogDetailPage() {
    const { id } = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(10);

  const { BlogListDetail, loadingDetail } = useSelector(
    (state) => state.BlogListDetailData
  );

  useEffect(() => {
    if (id) {
      dispatch(getBlogListDetail({ id }));
    }
  }, [dispatch, id]);

  return (
    <>
      <Banner title="Blog Detail" backgroundImage="/assets/images/hero-bg.jpg" />

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12 text-gray-700">
        {/* Top Banner */}
        <div>
          <ImageBlock
            src="/assets/images/recycle-bins.jpg"
            alt="Recycling bins"
            width={1024}
            height={512}
          />
          <div className="mt-8 max-w-4xl mx-auto">
            <ParagraphBlock
              paragraphs={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tortor nec nisi porta mattis at ac urna. Maecenas nec porta metus, at cursus purus. Quisque suscipit leo id porta luctus. Quisque tempor quam nec elit fringilla, ut hendrerit purus semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae urna rhoncus dui pretium mollis. Aenean molestie libero sit amet magna sodales egestas. Donec efficitur elit vitae lacus suscipit, nec semper ipsum egestas. Aliquam id lectus dignissim, suscipit nisl non, egestas nibh. Morbi",
                "Nunc sagittis mattis augue, vitae consectetur ligula. Nullam vestibulum egestas ex, vitae tempus quam feugiat at. Nulla facilisi. Aliquam id venenatis purus, at varius leo. Etiam in leo sollicitudin orci varius vehicula eu at urna. Cras non tortor eget erat bibendum scelerisque. Vestibulum vel mi sed metus auctor varius.",
              ]}
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start max-w-4xl mx-auto">
          <div className="w-full lg:w-1/2 h-full">
            <ImageBlock
              src="/assets/images/waste-lab.jpg"
              alt="Waste Lab"
              width={600}
              height={500}
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-[500] text-gray-900 !leading-[1em]">
              Proper waste management helps minimize pollution by ensuring that
              waste is disposed of efficiently and sustainably.
            </h2>
            <p className="text-[#8D8D8D]">
              Nunc sagittis mattis augue, vitae consectetur ligula. Nullam
              vestibulum egestas ex, vitae tempus quam feugiat at. Nulla
              facilisi. Aliquam id venenatis purus, at varius leo. Etiam in leo
              sollicitudin orci varius vehicula eu at urna. Cras non tortor eget
              erat bibendum scelerisque. Vestibulum vel mi sed mauris auctor
              varius.
            </p>
            <Checklist
              items={[
                "Lorem Ipsum Dolor Aenean molestie libero sit amet",
                "Aenean molestie libero sit amet magna sodales.",
                "Lorem Ipsum Dolor Aenean molestie libero sit amet",
                "Aenean molestie libero sit amet magna sodales.",
              ]}
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <ParagraphBlock
            paragraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tortor nec nisi porta mattis at ac urna. Maecenas nec porta metus, at cursus purus. Quisque suscipit leo id porta luctus. Quisque tempor quam nec elit fringilla, ut hendrerit purus semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae urna rhoncus dui pretium mollis. Aenean molestie libero sit amet magna sodales egestas. Donec efficitur elit vitae lacus suscipit, nec semper ipsum egestas. Aliquam id lectus dignissim, suscipit nisl non, egestas nibh. Morbi",
            ]}
          />
          <FooterTags />
        </div>
      </section>
    </>
  );
}
