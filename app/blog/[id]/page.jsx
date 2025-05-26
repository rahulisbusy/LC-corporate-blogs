// app/blog/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import { useBlog } from "@/_context/Blogcontext";

export default function BlogDetailPage() {
  const { id } = useParams();
  const { blogs } = useBlog();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="p-6 text-center">Blog not found.</p>;

  return (
  <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-10">
    <h1 className="text-4xl font-extrabold mb-3 text-gray-800 tracking-tight">{blog.title}</h1>
    <div className="flex items-center gap-2 mb-6 text-gray-500">
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <span>{blog.date}</span>
    </div>
    <hr className="mb-6 border-gray-200" />
    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">{blog.content}</p>
  </div>
);
}
