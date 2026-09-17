<p align="center">
  <img src="assets/screenshots/hero.png" alt="Novatech Store Banner" width="100%">
</p>

# 💻 Novatech Store

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern **Full-Stack E-Commerce** application built with **React, TypeScript, Node.js, Express.js and MongoDB** — with an integrated Stripe payment system and a complete admin dashboard.

## Novatech Store was developed to strengthen my full-stack development skills by building a real-world e-commerce application from scratch. The project focuses on clean architecture, reusable components, responsive design, authentication, a full payment flow, and a data-driven admin dashboard for managing the store.

# 🚀 Live Demo

<p align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Website-blue?style=for-the-badge)](https://ecommerce-frontend-lyart-one.vercel.app/)

## </p>

# 📑 Table of Contents

- Project Overview
- Features
- Tech Stack
- Architecture
- Project Structure
- Installation
- Environment Variables
- Learning Outcomes
- Roadmap

---

# 📖 Project Overview

Novatech Store is a responsive MERN-style e-commerce application that simulates the core functionality of a modern online shopping platform.

Users can create an account, securely authenticate, browse products, filter and sort items, manage their shopping cart, pay through a real Stripe checkout flow, and track their orders.

On the admin side, the store owner has a fully data-driven dashboard to manage products, fulfill orders, view customer insights, and monitor store performance in real time — no mock data anywhere in the admin panel.

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT authentication
- Protected routes
- Persistent authentication
- Role-based authorization (customer / admin)
- Secure password hashing using bcrypt

---

## 🛒 Shopping Experience

- Browse products
- Product detail page
- Shopping cart
- Checkout with Stripe's hosted payment page
- Real-time payment status confirmation (success / cancel pages)
- Order history
- Wishlist support
- Responsive shopping experience

---

## 💳 Payments (Stripe)

- Stripe Checkout Sessions for secure, PCI-compliant payments
- Webhook-based payment confirmation (checkout.session.completed) with signature verification
- Order paymentStatus and status synced automatically once payment is confirmed
- Local development tested end-to-end with the Stripe CLI

---

## 🔎 Product Discovery

- Filter by category
- Filter by brand
- Filter by availability
- Filter by price
- Sort by newest
- Sort by price (Low → High)
- Sort by price (High → Low)
- Sort by popularity

---

## 🎨 User Experience

- Responsive design
- Skeleton loading screens
- Toast notifications
- Animated landing page
- Custom SVG Orbit animation
- Popular Categories section
- Modern UI built with Tailwind CSS

---

## 👨‍💼 Admin

- A fully built, data-driven admin panel — every number and chart is computed from real data, not mocked.

Products

- Full CRUD with a dedicated Add/Edit page
- Dynamic, category-specific spec fields (Laptops, Monitors, Gaming, Storage)
- Drag-and-drop multi-image upload
- Search, category & stock-status filters, sorting, pagination

Orders

- Full status lifecycle: pending → processing → shipped → delivered → cancelled
- Order detail view with items, customer info, shipping address, payment status, and a visual status timeline
- Search, status & date-range filters, sorting, pagination

Customers

- Aggregated stats per customer — total orders, total spent, average order value (via MongoDB aggregation)
- Customer detail page with full order history
- Dashboard

- Real-time KPIs (revenue, orders, customers, products) with month-over-month change
- 6-month revenue trend chart
- Order status breakdown chart
- Recent orders feed & top-selling products

Also included: global topbar search across products/orders/customers, and a polling-based notification system for new orders and low-stock alerts.

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hook Form
- Zod
- React Hot Toast
- Swiper
- Recharts
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose (incl. aggregation pipelines: $lookup, $group, $facet)
- JWT Authentication
- bcrypt
- Stripe (Checkout + Webhooks)
- Multer (image uploads)
- CORS
- dotenv

---

# 🏗️ Architecture

```text
            React + TypeScript (customer + admin)
                    │
                 Axios API
                    │
          Express.js REST API
                    │
        Controllers → Services → Models
                    │
            MongoDB   Stripe (payments)

```

---

# 📁 Project Structure

```text
e-commerce/
│
├── frontend/
│   ├── components
│   ├── context
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── features/admin
│   ├── services
│   ├── types
│   ├── utils
│   └── validation
│
└── backend/
    ├── config
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── services
    └── utils
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/dania8shaghouri/e-commerce.git
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file

```env
MONGODB_URI=

JWT_SECRET=
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a .env file inside backend/:

MONGODB_URI=
JWT_SECRET=
PORT=3001
ALLOWED_ORIGINS=http://localhost:5173

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
FRONTEND_URL=http://localhost:5173

---

🌱 Learning Outcomes

Throughout this project I improved my knowledge of:

- Building scalable React applications
- Developing RESTful APIs
- JWT authentication and authorization
- Integrating third-party payment systems (Stripe Checkout + webhooks)
- MongoDB aggregation pipelines for computed, data-driven views
- Context API state management
- TypeScript best practices (incl. resolving react-hook-form/Zod type edge cases)
- Form validation using React Hook Form and Zod
- Reusable component architecture (no prop drilling, shared components generalized on reuse)
- Responsive UI development
- Full-stack application deployment (Vercel + Render)
- Diagnosing real production issues (e.g. ephemeral filesystem storage on Render, webhook signature verification)
- Client–server communication
- Modern project organization

---

# 🚧 Roadmap

Planned improvements include:

- Wishlist page
  Cloudinary migration for image uploads (Render's local disk storage - doesn't persist across restarts)
  Production Stripe webhook registration (Dashboard-side confirmation)
- "Mark as Paid" manual override for admins
- Order status history with per-step timestamps
- Card detail display on order pages (via Stripe payment intent)
- Real shipping cost & discount system
- Product reviews and ratings
- Settings & Analytics admin pages
- Email verification
- Password reset
- Coupon system
- Search suggestions
- AI-powered product recommendations
- Docker support
- Unit & integration testing
- CI/CD pipeline

---

# 📷 Screenshots

Explore some of the key pages of **Novatech Store**.

### 🏠 Home & Shop

| Home                             | Shop                             |
| -------------------------------- | -------------------------------- |
| ![](assets/screenshots/home.png) | ![](assets/screenshots/shop.png) |

---

### 🛒 Shopping Experience

| Cart                             | Orders                             |
| -------------------------------- | ---------------------------------- |
| ![](assets/screenshots/cart.png) | ![](assets/screenshots/orders.png) |

---

### 👨‍💼 Admin Dashboard

<p align="center">
  <img src="assets/screenshots/admin.png" alt="Admin Dashboard" width="90%">
</p>
---
