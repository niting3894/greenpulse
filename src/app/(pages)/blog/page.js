import Banner from "@/components/Banner";
import BlogSection from "@/components/Section/BlogSection";

export default function BlogPage() {
  return (
    <>
      <Banner title="Blog" backgroundImage="/assets/images/hero-bg.jpg" />
      {/* Your About content here */}
      <BlogSection paddingClass="py-20 px-6 md:px-20" />
    </>
  );
}
