// app/page.js
"use client";

import Blogcard from "./_components/Blogcard";
import Link from "next/link";
import { useBlog } from "@/_context/Blogcontext";

export default function HomePage() {
  const { blogs } = useBlog();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow">
          LC Corporate Blogs
        </h1>
        <Link
          href="/add"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-2xl shadow-md hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold"
        >
          + Add Blog
        </Link>
      </div>

      {blogs.length > 0 ? (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow p-6">
              <Blogcard blog={blog} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-16">No blogs available.</p>
      )}
    </main>
  );
}
