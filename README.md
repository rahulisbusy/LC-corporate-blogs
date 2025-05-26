# 📝 Blog Listing App

A simple blog listing web application built with **Next.js** and **React Context** for local state management. Users can view a list of blogs, add new blogs, and view blog details — all in a clean, responsive UI.

---

## ✨ Features

- 🏠 **Home Page** – View a list of blog posts (title, summary, and date)
- ➕ **Add Blog Page** – Submit a new blog via a form
- 📄 **Blog Detail Page** – View full blog content by clicking the title
- 🧠 **React Context API** – Local state across all pages
- 💅 **TailwindCSS** – For responsive, clean styling

---

## 📸 Screenshots

### Home Page
![Home Page Screenshot](./screenshots/Screenshot%202025-05-27%20015706.png)

### Add Blog Page
![Add Blog Screenshot](./screenshots/Screenshot%202025-05-27%20015714.png)

### Blog Detail Page
![Detail Page Screenshot](./screenshots/Screenshot%202025-05-27%20015725.png)




---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: React Context API


---

## 📂 Project Structure

```
/app
  /add             → Add Blog Page
  /blog/[id]       → Blog Detail Page
  page.js          → Home Page

/components
  Blogcard.jsx     → Displays blog summary
  Blogform.jsx     → Form to add a blog

/context
  Blogcontext.jsx  → Global blog state

/styles
  globals.css      → Global styles
```

---

## 🧪 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blog-listing-app.git
   cd blog-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **Open**
   ```
   http://localhost:3000
   ```

---

## 🙌 Author

**Pritam Chakraborty**  
🧑‍💻 Frontend Developer | Tech Enthusiast  
🌐 [LinkedIn](https://www.linkedin.com/in/pritam-chakraborty-0b74b4243/) | [GitHub](https://github.com/rahulisbusy)

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🌟 Show Your Support

If you like this project, consider giving it a ⭐ on [GitHub](https://github.com/rahulisbusy/LC-corporate-blogs)!
