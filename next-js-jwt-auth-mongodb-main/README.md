# Next.js JWT Authentication with MongoDB

A full-stack web application built with Next.js App Router, featuring JWT authentication, MongoDB integration, and a modern, responsive UI.

## Features

- **Authentication System**: Secure login and registration with JWT tokens
- **User Management**: Complete CRUD operations for user accounts
- **Modern UI**: Beautiful gradient backgrounds, responsive design with Bootstrap
- **Search & Filter**: Real-time user search and alphabetical sorting
- **Responsive Design**: Mobile-friendly interface
- **TypeScript**: Full type safety throughout the application
- **State Management**: Zustand for efficient client-side state
- **Validation**: Joi for robust form validation
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React 18, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB (Atlas Cloud)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Bootstrap 5, Custom CSS
- **State Management**: Zustand
- **Validation**: Joi
- **Password Hashing**: bcryptjs

## Project Structure

```
app/
├── (public)/           # Public routes (login, register)
├── (secure)/           # Protected routes (dashboard, users)
├── _components/        # Reusable UI components
├── _helpers/           # Utility functions and services
├── _services/          # Business logic services
├── api/               # API routes
└── globals.css        # Global styles

lib/
└── mongodb.ts         # Database connection utility
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd next-js-jwt-auth-mongodb-main
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your-super-secret-jwt-key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

### Authentication
- User registration with validation
- Secure login with JWT tokens
- Protected routes for authenticated users
- Automatic token refresh

### User Management
- View all users in a responsive table
- Search users by name or username
- Sort users alphabetically (A-Z / Z-A)
- Add new users
- Edit existing user details
- Delete users with confirmation

### UI/UX
- Modern gradient backgrounds
- Card-based layouts
- Responsive design for all devices
- Loading states and error handling
- Toast notifications for feedback

## API Endpoints

- `POST /api/account/login` - User login
- `POST /api/account/register` - User registration
- `POST /api/account/logout` - User logout
- `GET /api/users` - Get all users
- `GET /api/users/[id]` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

## Deployment

The application is configured for deployment on Vercel with:
- Next.js optimized build
- Environment variables for production
- MongoDB Atlas for database hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Last updated: 06-01-2026
Hosted on Vercel Cloud
Node.js 22
MongoDB Atlas
                
              




