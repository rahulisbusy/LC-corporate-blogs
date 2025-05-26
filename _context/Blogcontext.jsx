"use client";


import { createContext, useContext, useState } from "react";

const Blogcontext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Welcome to the Blog",
      content: "This is the first blog post with sample content...",
      date: "2024-06-01",
    },
    {
      id: 2,
      title: "Another Blog Post",
      content: "Here's another interesting blog to read and enjoy...",
      date: "2024-06-05",
    },
  ]);

  const addBlog = (blog) => {
    setBlogs((prev) => [...prev, blog]);
  };

  return (
    <Blogcontext.Provider value={{ blogs, addBlog }}>
      {children}
    </Blogcontext.Provider>
  );
}

export function useBlog() {
  return useContext(Blogcontext);
}
