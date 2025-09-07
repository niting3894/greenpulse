"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import { useParams } from "next/navigation";
import { articles } from "@/data/articles"; // ✅ import articles data

const ParagraphBlock = ({ text }) => (
  <div className="prose max-w-none text-[#4a4a4a] prose-li:marker:text-green-600 whitespace-pre-wrap">
    {text}
  </div>
);

const ImageBlock = ({ src, alt }) => (
  <div className="rounded-2xl overflow-hidden shadow-md h-full">
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={600}
      className="w-full h-auto object-cover"
      priority
    />
  </div>
);

export default function InnovationSectionDetailPage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center text-xl py-20 text-gray-600">
        Article not found
      </div>
    );
  }

  return (
    <>
      <Banner
        title={article.title}
        backgroundImage="/assets/images/hero-bg.jpg"
      />

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12 text-gray-700">
        {/* Article Image */}
        <ImageBlock src={article.image} alt={article.title} />

        {/* Title & Description */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>
          <p className="text-lg text-[#6b6b6b] mb-6">{article.description}</p>
        </div>

        {/* Full Content */}
        <div className="max-w-4xl mx-auto">
          <ParagraphBlock text={article.content} />
        </div>
      </section>
    </>
  );
}
