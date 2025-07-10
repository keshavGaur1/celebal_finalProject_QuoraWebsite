# 🧠 Quora-Style Q&A Web Application

A modern, full-fledged **Question & Answer web app**, built using **React** and **Tailwind CSS**, where users can register, login, ask questions, and explore answers — all in one sleek interface. Think of it as a simplified, minimalist version of **Quora**, designed for learning, internal knowledge sharing, or as a killer demo project in your portfolio.

---

## 🚀 Features at a Glance

- 🔐 User Authentication (Register/Login)
- 📝 Ask & View Questions
- 📄 Detailed Question Pages
- 🌗 Light & Dark Theme Toggle
- ⚡ Smooth Client-Side Routing
- 🎨 Tailwind-Powered Responsive UI
- 💬 Context-Based State Management

---

## 📦 Tech Stack

| Tech        | Role                     |
|-------------|--------------------------|
| **React**   | Frontend Framework       |
| **React Router** | Client-side Routing |
| **Tailwind CSS** | Styling             |
| **Context API**  | State Management    |
| **Vercel**       | Hosting & Deployment |

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd week5_musicPlayer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

---
## 📂 Project Structure

```
📁 src
├── App.jsx # Entry point & routes
├── index.js # React DOM render
├── components/ # Navbar, ThemeToggle, etc.
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── AskQuestion.jsx
│ └── QuestionDetails.jsx
├── context/
│ ├── UserContext.jsx
│ └── ThemeContext.jsx
├── assets/ # Images & SVGs
```

---

## 💡 How It Works

1. **👀 Home Page**: View all questions or a friendly welcome message.
2. **🔐 Login/Register**: Access restricted features by authenticating.
3. **❓ Ask Questions**: Authenticated users can submit new questions.
4. **📘 Question Details**: Dive into a specific question and read answers.
5. **🎨 Theme Switch**: Toggle between light and dark mode.
6. **⚙️ State Handling**: Managed using `UserContext` and `ThemeContext`.

---

### ❗Important Note for Deployment

To make routing work smoothly on **Vercel**, a `vercel.json` file is used:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.




