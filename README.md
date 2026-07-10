The Wild Oasis – Customer Portal

A modern hotel booking platform built with Next.js 14 App Router, enabling guests to browse luxury cabins, make reservations, manage bookings, and update their profiles with a fast, secure, and server-first architecture.

📖 Overview

The Wild Oasis is a customer-facing hotel booking application where authenticated guests can browse cabins, reserve stays, manage reservations, and maintain their guest profile.

The application follows modern server-first architecture using React Server Components, Server Actions, and Next.js App Router to deliver fast page loads, secure data handling, and an excellent user experience.

✨ Features
🏡 Cabin Browsing
Browse luxury cabins
Cabin details with images
Dynamic cabin pages
Responsive gallery

📅 Reservation System
Interactive date selection
Prevent booking unavailable dates
Reservation creation
Edit reservations
Cancel reservations
Reservation history

👤 Authentication
Google OAuth using NextAuth
Protected routes
Session management
Middleware authorization

👥 Guest Profile
Update nationality
National ID validation
Country selector
Persistent profile information

⚡ Performance
React Server Components
Server Actions
Streaming UI
Suspense
Cache Revalidation
Optimized Images
Font Optimization

🏗 Architecture
                Browser
                    │
                    ▼
          Next.js App Router
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
React Server Components     Client Components
        │                       │
        └───────────┬───────────┘
                    ▼
             Server Actions
                    │
                    ▼
              Supabase Database
              
🛠 Tech Stack
Category	Technologies
Framework	Next.js 14
Language	JavaScript
UI	React, Tailwind CSS
Authentication	NextAuth
Database	Supabase
Data Fetching	React Server Components
Forms	Server Actions
Date Picker	React Day Picker
Deployment	Vercel

📂 Project Structure
app/
│
├── cabins/
├── account/
├── login/
├── about/
│
├── _components/
├── _lib/
├── _styles/
│
└── layout.js

🔐 Authentication Flow
Google OAuth
      │
      ▼
NextAuth
      │
      ▼
Session Cookie
      │
      ▼
Protected Routes
      │
      ▼
Guest Dashboard


🔄 Reservation Workflow
Select Cabin
      │
      ▼
Choose Dates
      │
      ▼
Server Action
      │
      ▼
Supabase
      │
      ▼
Cache Revalidation
      │
      ▼
Updated UI

🚀 Key Engineering Concepts

React Server Components
Server Actions
App Router
Dynamic Routing
Suspense
Cache Revalidation
Middleware
Protected Routes
Authentication
Server-side Rendering
Static Rendering
Route Handlers

⚙️ Getting Started

Clone the repository:

git clone https://github.com/yourusername/the-wild-oasis.git

Install dependencies:

npm install

Create a .env.local file:

NEXTAUTH_URL=
NEXTAUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

SUPABASE_URL=
SUPABASE_KEY=

Run the development server:

npm run dev
📈 What I Learned

Building this project deepened my understanding of:

Server-first React architecture
Authentication with NextAuth
React Server Components
Server Actions
Cache invalidation
Modern routing with the App Router
Secure form handling
Full-stack application architecture


Future Improvements
Payment Gateway Integration
Email Notifications
Booking Confirmation Emails
Admin Dashboard
Availability Calendar Sync
Unit & Integration Testing
Docker Containerization
CI/CD Pipeline
AWS Deployment


License

This project was built for learning and portfolio purposes.
