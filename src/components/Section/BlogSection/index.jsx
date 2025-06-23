"use client";

import BlogCard from "@/components/Cards/BlogCard";
import { getBlogList } from "@/redux/slices/BlogList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const blogs = [
  {
    image: "/assets/images/blog1.jpg",
    title: "How Businesses Can Improve Their Waste Management Strategy",
    date: "March 24, 2025",
  },
  {
    image: "/assets/images/blog2.jpg",
    title: "Common Misconceptions About Recycling and Waste Disposal",
    date: "March 24, 2025",
  },
  {
    image: "/assets/images/blog3.jpg",
    title: "The Importance of Waste Management in Modern Society",
    date: "January 16, 2022",
  },
];

export default function BlogSection({ paddingClass }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(6);
  const [search, setSearch] = useState("");

  const { BlogList, loadingBlog, totalCount } = useSelector(
    (state) => state.BlogListData
  );

  useEffect(() => {
    dispatch(
      getBlogList({
        page: page,
        limit: activePage,
        search: search
      })
    );
  }, [page, activePage, search, dispatch]);

  return (
    <section
      className={`bg-[#f9f7f2] ${
        paddingClass || "py-12 px-4 sm:px-6 md:px-12"
      }`}
    >
      <div className="text-center mb-10 max-w-7xl mx-auto">
        <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center">
          Blog
        </h6>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-[600] text-gray-900">
          Read Our Latest Blog and Articles
        </h2>
      </div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
