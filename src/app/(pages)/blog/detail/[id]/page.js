"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogs } from "@/data/blogs"; // ✅ Make sure path is correct

const ParagraphBlock = ({ text }) => (
  <p className="text-base leading-relaxed text-[#8D8D8D] mb-4">{text}</p>
);

const ListBlock = ({ content }) => {
  // Split into numbered sections based on heading format "1. Text"
  const items = content
    .trim()
    .split(/\n(?=\d+\. )/) // split when line starts with number-dot-space
    .map((item) => item.trim());

  return (
    <ul className="space-y-6 text-[#8D8D8D]">
      {items.map((item, idx) => {
        const [heading, ...rest] = item.split("\n");
        const description = rest.join(" ").trim();
        return (
          <li key={idx}>
            <h2 className="text-gray-700 text-2xl font-[600]">{heading}</h2>
            <div className="mt-1">{description}</div>
          </li>
        );
      })}
    </ul>
  );
};

const ImageBlock = ({ src, alt, width, height }) => (
  <div className="rounded-2xl overflow-hidden shadow-md h-full">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
      priority={true}
    />
  </div>
);

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-20 text-center text-red-600">
        Blog not found.
      </section>
    );
  }

  return (
    <>
      <Banner title={blog.title} backgroundImage="/assets/images/hero-bg.jpg" />

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12 text-gray-700">
        <ImageBlock
          src={blog.image}
          alt={blog.title}
          width={1024}
          height={512}
        />

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            {blog.title}
          </h1>
          <ParagraphBlock text={blog.description} />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <ListBlock content={blog.content} />
        </div>
      </section>
    </>
  );
}
