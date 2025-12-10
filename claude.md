# Profile Page Project - Complete Documentation

> **Last Updated:** December 11, 2025
> **Project Type:** Full-Stack Web Application
> **Status:** In Active Development

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Frontend Stack](#frontend-stack)
4. [Backend Stack](#backend-stack)
5. [Project Structure](#project-structure)
6. [Database Schema](#database-schema)
7. [API Endpoints](#api-endpoints)
8. [Authentication Flow](#authentication-flow)
9. [Key Components](#key-components)
10. [Configuration Files](#configuration-files)
11. [Development Guide](#development-guide)
12. [Security Considerations](#security-considerations)

---

## Project Overview

A modern full-stack profile page application featuring user authentication, profile management, and a clean UI built with Vue 3 and shadcn-vue components.

### Key Features

- ✅ User registration and authentication
- ✅ JWT-based session management
- ✅ Login with email OR username
- ✅ Password hashing with bcryptjs
- ✅ Protected routes with middleware
- ✅ Profile display with interests and social links
- ✅ Modern UI with Tailwind CSS and shadcn-vue
- ✅ MongoDB for data persistence

---

## Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT SIDE                          │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Vue 3 + Vite + Tailwind CSS + Shadcn-Vue         │    │
│  │  - Vue Router for navigation                       │    │
│  │  - Axios for HTTP requests                         │    │
│  │  - Encrypted storage for sensitive data            │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST API
┌─────────────────────────────────────────────────────────────┐
│                        SERVER SIDE                          │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Express.js + TypeScript                           │    │
│  │  - JWT Authentication Middleware                   │    │
│  │  - Controllers → Services → Models pattern         │    │
│  │  - MongoDB with Mongoose ODM                       │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↕ MongoDB Driver
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                         │
│  ┌────────────────────────────────────────────────────┐    │
│  │  MongoDB Atlas (Cloud)                             │    │
│  │  - Users collection with unique indexes            │    │
│  │  - Automatic timestamps                            │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Frontend Stack

**Location:** `profile-page/profile-page/`

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.5.25 | Progressive JavaScript framework |
| Vite | 7.2.4 | Fast build tool and dev server |
| Vue Router | 4.6.3 | Client-side routing |
| Tailwind CSS | 4.1.17 | Utility-first CSS framework |
| Axios | 1.13.2 | HTTP client for API requests |

### UI Component Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Reka UI | 2.6.1 | Headless UI component primitives |
| Lucide Vue Next | 0.555.0 | Icon library |
| class-variance-authority | 0.7.1 | CVA for component variants |
| clsx | 2.1.1 | Conditional className utility |
| tailwind-merge | 3.4.0 | Merge Tailwind classes efficiently |

### Additional Packages

- **encrypt-storage** (2.14.7) - Encrypted local storage
- **uuid** (13.0.0) - UUID generation
- **@vueuse/motion** (3.0.3) - Animation utilities

### Development Scripts

```bash
npm run dev      # Start dev server on 0.0.0.0:5050
npm run build    # Build for production
npm run preview  # Preview production build
npm run format   # Format code with Prettier
```

### Node Requirements

- Node.js: ^20.19.0 || >=22.12.0

---

## Backend Stack

**Location:** `profile-page/profile-page-backend/`

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20.19.6 | JavaScript runtime |
| Express | 5.2.1 | Web framework |
| TypeScript | 5.9.3 | Type-safe JavaScript |
| Mongoose | 9.0.0 | MongoDB ODM |

### Security & Authentication

| Package | Version | Purpose |
|---------|---------|---------|
| bcryptjs | 3.0.3 | Password hashing (10 salt rounds) |
| jsonwebtoken | 9.0.3 | JWT token generation/verification |
| cors | 2.8.5 | Cross-origin resource sharing |
| dotenv | 17.2.3 | Environment variable management |

### Utilities

- **http-status-codes** (2.3.0) - HTTP status code constants
- **morgan** (1.10.1) - HTTP request logger
- **ts-node** (10.9.2) - TypeScript execution
- **nodemon** - Hot reload for development

### Development Scripts

```bash
npm start        # Start with nodemon (ts-node)
npm run build    # Compile TypeScript to dist/
```

### TypeScript Configuration

- **Target:** ES2020
- **Module:** commonjs
- **Strict mode:** Enabled
- **Source:** src/**
- **Output:** dist/

---

## Project Structure

```
profile-page/
├── profile-page/                    # Frontend (Vue 3)
│   ├── src/
│   │   ├── assets/                  # Static assets
│   │   ├── components/              # Vue components
│   │   │   ├── HeaderComponent.vue  # Profile header with avatar
│   │   │   ├── SocialsComponent.vue # Social media links
│   │   │   ├── LoadingComponent.vue # Loading state
│   │   │   └── ui/                  # Shadcn-vue components
│   │   │       ├── button/
│   │   │       │   ├── Button.vue
│   │   │       │   └── index.js
│   │   │       └── input/
│   │   │           ├── Input.vue
│   │   │           └── index.js
│   │   ├── pages/                   # Page components
│   │   │   ├── MainPage.vue         # Main profile page
│   │   │   ├── LoginPage.vue        # Login/auth page
│   │   │   └── ShadcnDemo.vue       # Design system demo
│   │   ├── views/                   # Route views
│   │   │   ├── MainView.vue         # Layout wrapper
│   │   │   └── ErrorView.vue        # 404 error page
│   │   ├── router/
│   │   │   └── index.js             # Vue Router config
│   │   ├── lib/
│   │   │   └── lib/
│   │   │       └── utils.js         # cn() utility
│   │   ├── App.vue                  # Root component
│   │   ├── main.js                  # App initialization
│   │   └── style.css                # Global styles + Tailwind
│   ├── public/                      # Public assets
│   ├── vite.config.js               # Vite configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── jsconfig.json
│   ├── components.json              # Shadcn-vue config
│   ├── index.html
│   └── .prettierrc.json
│
└── profile-page-backend/            # Backend (Express + TypeScript)
    ├── src/
    │   ├── controllers/             # Request handlers
    │   │   ├── authController.ts    # Auth logic (register/login)
    │   │   └── authRoutes.ts        # Auth route definitions
    │   ├── services/                # Business logic layer
    │   │   ├── authService.ts       # Auth service
    │   │   ├── mongodb-config.ts    # Database connection
    │   │   └── constants.ts         # App constants
    │   ├── middleware/              # Express middleware
    │   │   └── auth.ts              # JWT authentication
    │   ├── user.model.ts            # User schema & model
    │   ├── routes.ts                # Main router
    │   └── server.ts                # Express app entry point
    ├── api/
    │   └── index.ts                 # API exports
    ├── package.json
    ├── tsconfig.json
    ├── nodemon.json                 # Nodemon config
    ├── .env                         # Environment variables
    └── .gitignore
```

---

## Database Schema

### MongoDB Database: `profile-page`

#### User Collection

```typescript
{
  _id: ObjectId,                    // Auto-generated MongoDB ID
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false                   // Excluded from queries by default
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/         // Email validation regex
  },
  displayName: {
    type: String,
    default: ''                     // Falls back to username via pre-save hook
  },
  status: {
    type: String,
    default: 'active'               // 'active' | 'inactive'
  },
  createdAt: Date,                  // Auto-managed by timestamps
  updatedAt: Date                   // Auto-managed by timestamps
}
```

#### Indexes

- `username` - Unique index
- `email` - Unique index

#### Pre-save Hooks

1. **Password Hashing**: Automatically hash password with bcryptjs (10 salt rounds) when password is new or modified
2. **Display Name**: Set displayName to username if not provided

#### Instance Methods

```typescript
comparePassword(userPassword: string): Promise<boolean>
```
- Compares plain text password with hashed password
- Returns true if match, false otherwise

---

## API Endpoints

### Base URL: `/api`

#### Public Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST | `/register` | Register new user | `{ email, username, password }` | `{ success, message, data: { user, token } }` |
| POST | `/login` | Login user | `{ email OR username, password }` | `{ success, message, data: { user, token } }` |
| GET | `/all-users` | Get all users (sorted) | - | `{ success, message, data: [users] }` |

#### Protected Endpoints

| Method | Endpoint | Auth Required | Description | Response |
|--------|----------|---------------|-------------|----------|
| GET | `/profile` | Bearer Token | Get authenticated user profile | `{ success, message, data: { user } }` |

### Request/Response Examples

#### Register User

**Request:**
```json
POST /api/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "success": 201,
  "message": "Successfully Registered",
  "data": {
    "user": {
      "_id": "6756a1b2c3d4e5f6g7h8i9j0",
      "email": "user@example.com",
      "username": "johndoe",
      "createdAt": "2025-12-11T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Login User

**Request:**
```json
POST /api/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": 200,
  "message": "Successfully Login",
  "data": {
    "user": {
      "_id": "6756a1b2c3d4e5f6g7h8i9j0",
      "email": "user@example.com",
      "username": "johndoe",
      "createdAt": "2025-12-11T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Get User Profile (Protected)

**Request:**
```http
GET /api/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200):**
```json
{
  "success": 200,
  "message": "Success",
  "data": {
    "user": {
      "_id": "6756a1b2c3d4e5f6g7h8i9j0",
      "email": "user@example.com",
      "username": "johndoe",
      "createdAt": "2025-12-11T10:30:00.000Z"
    }
  }
}
```

### Error Responses

#### 400 Bad Request
```json
{
  "success": 400,
  "message": "Email, Password, Username Are Required!"
}
```

#### 401 Unauthorized
```json
{
  "success": false,
  "message": "Access token is required"
}
```

#### 422 Unprocessable Entity
```json
{
  "success": 422,
  "message": "password should have atleast 8 characters!"
}
```

---

## Authentication Flow

### Registration Flow

```
1. User submits registration form
   ↓
2. Frontend validates input (min length, required fields)
   ↓
3. POST /api/register with email, username, password
   ↓
4. Backend Controller validates:
   - All fields present
   - Password >= 8 characters
   ↓
5. authService.register() checks:
   - Email/username uniqueness
   ↓
6. User.create() triggers pre-save hook:
   - Hash password with bcryptjs (10 rounds)
   - Set displayName to username if empty
   ↓
7. Generate JWT token (7-day expiry)
   ↓
8. Return user data (no password) + token
   ↓
9. Frontend stores token (encrypted storage)
```

### Login Flow

```
1. User submits login form (email/username + password)
   ↓
2. Frontend validates input
   ↓
3. POST /api/login with credentials
   ↓
4. Backend Controller validates:
   - Username OR email present
   - Password present
   ↓
5. authService.login() logic:
   const field = username ? "username" : "email"
   const value = username ?? email
   ↓
6. Query: User.findOne({ [field]: value }).select('+password')
   ↓
7. Compare password: user.comparePassword(password)
   - bcrypt.compare(plaintext, hashed)
   ↓
8. Generate JWT token (7-day expiry)
   ↓
9. Return user data + token
   ↓
10. Frontend stores token, redirects to profile
```

### Protected Route Flow

```
1. User makes request to /api/profile
   ↓
2. Include header: Authorization: Bearer <token>
   ↓
3. authenticateToken middleware:
   - Extract token from header
   - Verify with jwt.verify(token, JWT_SECRET)
   - Decode payload: { userId, iat, exp }
   ↓
4. Attach userId to req.userId
   ↓
5. next() → Continue to route handler
   ↓
6. getUserProfile controller:
   - Extract userId from req.userId
   - Query User.findById(userId)
   ↓
7. Return user profile
```

---

## Key Components

### Frontend Components

#### Pages

**1. MainPage.vue**
- Main profile display page
- Shows user avatar, about section, interests, and social links
- Includes logout functionality
- Integrates HeaderComponent and SocialsComponent

**2. LoginPage.vue** (242 lines)
- Complete authentication UI
- Email/password input fields with validation
- "Remember me" checkbox
- Social login buttons (Google, GitHub, Twitter)
- Dark theme with glassmorphism effects
- Sign-up link for registration

**3. ShadcnDemo.vue**
- Design system showcase
- Color palette demonstrations
- Background variations
- Card component examples

#### Reusable Components

**1. HeaderComponent.vue**
- User profile header
- Avatar image display
- About/biography section
- Interests tags (Gaming, Marvel Comics, Traveling, Chess)
- Grid layout with responsive design

**2. SocialsComponent.vue**
- Social media links section
- Instagram, Facebook, X (Twitter) links
- Styled as interactive tags
- Flexible link management

**3. LoadingComponent.vue**
- Loading state indicator
- (Currently empty - placeholder)

#### UI Components (Shadcn-Vue)

**1. Button.vue**
```typescript
// Variants using class-variance-authority
variants: {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-white hover:bg-destructive/90",
    outline: "border bg-background hover:bg-accent",
    secondary: "bg-secondary text-secondary-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3",
    lg: "h-10 px-6",
    icon: "size-9"
  }
}
```

**2. Input.vue**
- Form input with v-model support
- Props: type, placeholder, modelValue, class
- Tailwind styling with focus states
- Accessible with proper labeling

#### Views

**1. MainView.vue**
- Layout wrapper for main content
- Dark mode applied
- Router outlet for page rendering

**2. ErrorView.vue**
- 404 error page
- Custom error message
- "Back to Home" navigation link

### Backend Components

#### Controllers

**authController.ts**
- `register(req, res)` - Handle user registration
- `login(req, res)` - Handle user login
- `getUserProfile(req, res)` - Get authenticated user profile
- `getUsers(req, res)` - Get all users list

All methods include:
- Input validation
- Error handling with try/catch
- HTTP status code constants
- JSON responses with success/message/data structure

#### Services

**authService.ts**
```typescript
class AuthService {
  // Private method for JWT generation
  private generateToken(userId: string): string

  // Public methods
  async register(email, username, password): Promise<{ user, token }>
  async login(email?, username?, password): Promise<{ user, token }>
  async getProfile(userId): Promise<Partial<IUser>>
  async getAllUsers(): Promise<IUser[]>
}
```

**mongodb-config.ts**
- MongoDB connection management
- Auto-reconnect on disconnect (6-second retry)
- Event listeners: connected, disconnected, error
- Timeout/retry logic

#### Middleware

**auth.ts - authenticateToken()**
```typescript
// JWT Authentication Middleware
1. Extract Bearer token from Authorization header
2. Verify token exists
3. jwt.verify(token, JWT_SECRET)
4. Decode payload: { userId, iat, exp }
5. Attach userId to req.userId
6. Handle errors:
   - TokenExpiredError → 401
   - Invalid token → 403
7. next() to continue request
```

#### Models

**user.model.ts**
```typescript
// IUser Interface
export interface IUser extends Document {
  username?: string;
  password: string;
  email?: string;
  displayNameValue(displayName: string): string;
  status: string;
  comparePassword(userPassword: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

// Schema with validation
// Pre-save hooks for password hashing
// Methods: comparePassword, displayNameValue
```

---

## Configuration Files

### Frontend Configuration

#### vite.config.js
```javascript
{
  server: {
    host: '0.0.0.0',
    port: 5050
  },
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}
```

#### components.json (Shadcn-Vue)
```json
{
  "style": "new-york",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/style.css",
    "baseColor": "slate",
    "cssVariables": true,
    "version": "v4"
  },
  "framework": "vue",
  "tsx": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

#### jsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Backend Configuration

#### .env
```env
PORT=8000
MONGODB_URI=mongodb+srv://...
MONGODB_NAME=profile-page
JWT_SECRET=!s3cr3tb17092b6-f7d9-4689-a388-0569a01e5b7c
JWT_TOKEN_EXPIRY=120h
JWT_ADMIN_TOKEN_EXPIRY=24h
NODE_ENV=development
X_API_KEY=f01c9899-de81-4afd-88e3-03779ca4243c
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

#### nodemon.json
```json
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./src/server.ts"
}
```

---

## Development Guide

### Prerequisites

- Node.js ^20.19.0 or >=22.12.0
- MongoDB Atlas account (or local MongoDB instance)
- npm or yarn package manager

### Initial Setup

#### 1. Clone Repository
```bash
git clone <repository-url>
cd profile-page
```

#### 2. Frontend Setup
```bash
cd profile-page
npm install
```

Create `.env` (if needed):
```env
VITE_API_URL=http://localhost:8000/api
```

#### 3. Backend Setup
```bash
cd ../profile-page-backend
npm install
```

Create `.env`:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
MONGODB_NAME=profile-page
JWT_SECRET=your_secret_key_here
JWT_TOKEN_EXPIRY=120h
NODE_ENV=development
```

### Running the Application

#### Terminal 1 - Backend
```bash
cd profile-page-backend
npm start
```
Server starts on http://localhost:8000

#### Terminal 2 - Frontend
```bash
cd profile-page
npm run dev
```
Dev server starts on http://localhost:5050

### Building for Production

#### Frontend
```bash
cd profile-page
npm run build
# Output: dist/
```

#### Backend
```bash
cd profile-page-backend
npm run build
# Output: dist/
```

### Common Development Tasks

#### Add New Route
1. Add route to `profile-page-backend/src/controllers/authRoutes.ts`
2. Add controller method to `authController.ts`
3. Add service method to `authService.ts` (if needed)
4. Update API calls in frontend

#### Add New Component
1. Create component in `profile-page/src/components/`
2. Import in parent component
3. Add to components registration (if using Options API)

#### Update Schema
1. Modify `user.model.ts` interface and schema
2. Update related services and controllers
3. Handle data migration if needed

---

## Security Considerations

### Password Security
- ✅ Passwords hashed with bcryptjs (10 salt rounds)
- ✅ Passwords excluded from default queries (`select: false`)
- ✅ Minimum 8 character requirement
- ⚠️ Consider: Password complexity requirements (uppercase, numbers, special chars)

### JWT Security
- ✅ JWT tokens with 7-day expiry
- ✅ Token verification on protected routes
- ✅ Tokens stored in encrypted storage on frontend
- ⚠️ Consider: Refresh token mechanism for better UX
- ⚠️ Consider: Token revocation/blacklist for logout

### API Security
- ✅ CORS enabled and configured
- ✅ Input validation in controllers
- ✅ MongoDB injection prevention (Mongoose escaping)
- ⚠️ Consider: Rate limiting for auth endpoints
- ⚠️ Consider: Input sanitization middleware

### Database Security
- ✅ Unique indexes on email and username
- ✅ Email validation regex
- ✅ Mongoose schema validation
- ⚠️ Consider: Database connection encryption
- ⚠️ Consider: Audit logging for sensitive operations

### Environment Variables
- ✅ Sensitive data in .env files
- ✅ .env excluded from git
- ⚠️ TODO: Rotate JWT_SECRET before production
- ⚠️ TODO: Use stronger JWT_SECRET (current is UUID-based)

### Recommendations for Production

1. **Add Rate Limiting**
   ```bash
   npm install express-rate-limit
   ```

2. **Add Helmet for Security Headers**
   ```bash
   npm install helmet
   ```

3. **Implement Refresh Tokens**
   - Short-lived access tokens (15min)
   - Long-lived refresh tokens (7d)
   - Separate refresh endpoint

4. **Add Request Validation**
   ```bash
   npm install express-validator
   ```

5. **Implement HTTPS**
   - Use SSL certificates in production
   - Force HTTPS redirect

6. **Add Logging**
   ```bash
   npm install winston
   ```

7. **Error Handling**
   - Don't expose stack traces in production
   - Generic error messages for auth failures
   - Detailed logs server-side only

---

## Git Commit History Notes

### Recent Work (based on git status)
- ✅ Authentication system implemented
- ✅ JWT token generation working
- ✅ Password hashing operational
- ✅ MongoDB connection configured
- ✅ Login with username OR email feature
- ✅ Frontend login page styled

### Current Branch: `main`

### Clean Status
- No uncommitted changes
- Working tree clean

---

## Future Enhancements

### Backend
- [ ] Refresh token mechanism
- [ ] Password reset via email
- [ ] Email verification on signup
- [ ] User profile update endpoint
- [ ] User avatar upload
- [ ] Pagination for user list
- [ ] Search/filter users
- [ ] Role-based access control (RBAC)

### Frontend
- [ ] Registration page UI
- [ ] Profile edit page
- [ ] Avatar upload component
- [ ] Password change form
- [ ] Social OAuth implementation
- [ ] Remember me functionality
- [ ] Loading states for async operations
- [ ] Toast notifications for user feedback
- [ ] Form validation improvements

### DevOps
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Automated testing (unit + integration)
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)

---

## Contact & Contribution

**Developer:** Rey Mart Casas
**Repository:** [GitHub Repository URL]
**Database:** MongoDB Atlas - `personal-projects` cluster

---

*This documentation is maintained as part of the Profile Page project. Last updated: December 11, 2025*
