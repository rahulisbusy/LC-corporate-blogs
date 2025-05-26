
"use client";

import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <Link href={`/blog/${blog.id}`}>
        <h2 className="text-xl font-bold text-blue-600 hover:underline">{blog.title}</h2>
      </Link>
      <p className="text-gray-500 text-sm">{blog.date}</p>
      <p className="mt-2 text-gray-700">
        {blog.content.slice(0, 100)}...
      </p>
    </div>
  );
}
