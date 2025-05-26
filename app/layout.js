
import "./globals.css";
import { BlogProvider } from "@/_context/Blogcontext";

export const metadata = {
  title: "Blog App",
  description: "Basic Blog Listing Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
