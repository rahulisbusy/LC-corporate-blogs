
"use client";

import Blogform from "../_components/Blogform";
import { useBlog } from "@/_context/Blogcontext";

export default function AddBlogPage() {
  const { addBlog } = useBlog();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
      <Blogform onAddBlog={addBlog} />
    </main>
  );
}
