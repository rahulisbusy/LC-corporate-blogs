"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Blogform({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
      date,
    };

    onAddBlog(newBlog);
    router.push("/"); 
  };

  return (
  <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Blog</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Title</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Content</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content here..."
        />
      </div>
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Date</label>
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-xl shadow-md hover:from-green-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 font-semibold cursor-pointer"
      >
        Submit Blog
      </button>
    </form>
  </div>
);
}
