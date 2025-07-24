# 📝 Simple Blog with React & Next.js

A responsive blog application built with **React**, **Next.js**, and **Firebase Authentication**. Users can register, log in, create blog posts with images, and view posts. All blog data is saved in **localStorage**, while authentication is securely handled by Firebase.

---

## 📸 Features

- 🏠 **Home Page** – Displays all blog posts with title, summary, and thumbnail.
- 🔐 **Authentication** – Firebase Email/Password Auth for login and registration.
- ✍️ **Submit Blog** – Authenticated users can submit blog posts with:
  - Title
  - Summary
  - Content
  - Featured Image (stored in Base64 in localStorage)
- 📖 **Post Detail Page** – View full post with image and content.
- 🌙 **Dark/Light Mode** – Toggle between themes.
- 💾 **LocalStorage** – Stores all blog data including images in Base64 format.

---

## 🔧 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Auth**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Storage**: Browser **localStorage** (images + posts)

---

## 📁 Project Structure

- /components → Reusable UI components (e.g., BlogCard, Navbar)
- /pages → Route-based pages (home, post, submit, auth)
- /styles → Tailwind base styles
- /utils → Firebase config and helpers (e.g., auth.js)
- /public → Static assets

## 🧪 Getting Started Locally
### 1. Clone the Repository
- git clone https://github.com/Chrisstinaa771/my-blog.git
- cd simple-blog-nextjs

### 2. Install Dependencies
- npm install

### 3. Set Up Firebase
- Go to Firebase Console

- Create a new project

- Enable Email/Password authentication

- Get your Firebase config keys and replace them in firebaseConfig.js

### 4. Start the Development Server
- npm run dev
- Then open http://localhost:3000 in your browser.

## Future Enhancements
- Store blog posts in Firebase Firestore or IndexedDB

- Add rich text editor for blog content

- Add edit/delete options for blog posts

- Pagination or search for posts


