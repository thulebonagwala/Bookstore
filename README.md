# 📚 Scalable Bookstore Website (MERN + Stripe)

## Overview
This is a full-stack scalable **Bookstore Website** built with the **MERN Stack (MongoDB, Express.js, React, Node.js)** and integrated with **Stripe** for payments.  
The goal is to create a modern, production-ready bookstore platform with features like user authentication, book browsing, shopping cart, checkout, and an admin dashboard.

---

## 📂 Project Structure

```
bookstore/
├─ apps/
│  ├─ server/                 # Express + TypeScript backend
│  └─ client/                 # React + Vite + Tailwind frontend
├─ packages/               # (optional shared configs, future)
│  ├─ eslint-config/
│  └─ tsconfig/
├─ .github/workflows/      # GitHub Actions CI/CD pipelines (future)
└─ README.md               # Project documentation
```

---

## ✅ Current Progress

### Frontend (apps/web)
- ✅ React + Vite + TypeScript + TailwindCSS setup  
- ✅ Pages created with mock data:  
  ✅ Home page (book showcase, navigation, hero section)  
  - Login & Register pages (styled, but not connected to backend yet)  
  - Book details page (static mock layout)  
  - Cart & Checkout mock UI  
- ✅ Reusable UI components (Navbar, Footer, Buttons, Cards, Inputs)  

👉 **Current status:** The frontend is styled and demonstrates the planned design, but it is **not yet wired to the backend**.

### Backend (apps/api)
- ✅ TypeScript Express server set up  
- ✅ MongoDB connection configured  
- ✅ User authentication APIs:  
  - Register (tested with Postman, works)  
  - Login (tested with Postman, works)  
- ✅ Middleware for authentication (JWT)  
- 🕑 Book, Cart, Order APIs implemented but **not fully tested yet**  
- 🕑 Stripe PaymentIntent API route drafted  

👉 **Current status:** Authentication is working; other routes need full testing and frontend integration.

---

## 🔜 Remaining Work

### Frontend
- 🔗 Connect login & register pages to backend authentication API  
- 📚 Fetch real book data from backend instead of mock data  
- 🛒 Implement cart functionality with backend syncing  
- 💳 Integrate checkout with Stripe Payment API  
- 🛠 Add error handling, loading states, and form validation  
- 📱 Make design fully responsive for mobile & tablet  

### Backend
- ✅ Finalize and test book, cart, and order routes  
- ✅ Secure payment flow with Stripe and confirm order placement  
- 🔐 Add role-based access control (Admin vs User)  
- 📊 Build APIs for dashboard (sales, user management, book inventory)  

### DevOps & Production
- 🐳 Add Docker support for containerization  
- 🚀 Set up CI/CD pipeline with GitHub Actions  
- 🌍 Deploy backend on Render
- 🌐 Deploy frontend on Netlify 

---

## 🎯 Final Vision

The final project will be a **complete, production-ready bookstore platform** where:  
- Users can **register, log in, browse books, add to cart, and checkout securely** with Stripe.  
- Admins can **manage books, view sales, and oversee users** through an admin dashboard.  
- The website will be **fast, responsive, and aesthetically modern** with Tailwind CSS.  
- The system will be **scalable** to handle many books, users, and transactions.  

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, TypeScript, TailwindCSS  
- **Backend**: Express.js, Node.js, TypeScript, MongoDB, Mongoose  
- **Authentication**: JWT (JSON Web Token)  
- **Payments**: Stripe API  
- **DevOps**: Docker, GitHub Actions, Netlify, Render (planned)  

---

## 🚦 How to Run (Current Setup)

### Frontend
```bash
cd bookstore/client
npm install
npm run dev
```

### Backend
```bash
cd bookstore/server
npm install
npm run dev
```

> ⚠️ Note: The frontend and backend are **not yet connected**. Backend `.env` file must include `MONGO_URI`, `JWT_SECRET`, and `STRIPE_SECRET_KEY`.

---

## 📌 Next Steps
- [ ] Wire frontend login/register to backend APIs  
- [ ] Replace mock book data with live data from backend  
- [ ] Integrate Stripe checkout flow  
- [ ] Test book, cart, and order APIs thoroughly  
- [ ] Deploy to production  

---

## 👩‍💻 Contributors
- Thulebona (Frontend & Backend Development)  
- ChatGPT (Architecture & Guidance)
- Contributions welcome as the project evolves!

---

🚀 Stay tuned — the **Scalable Bookstore Website** is on its way to becoming a fully functional online bookstore!


