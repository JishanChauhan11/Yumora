# Local Development Setup Guide

This guide will help you set up and run the MERN Stack E-Commerce Website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - Either:
  - MongoDB Atlas account (cloud) - [Sign up here](https://www.mongodb.com/cloud/atlas)
  - OR MongoDB installed locally

## Project Structure

The project consists of three main parts:
1. **Backend** - Express.js server (runs on port 4000)
2. **Frontend** - React application (runs on port 3000)
3. **Admin** - React admin panel (runs on port 5173)

## Setup Instructions

### Step 1: MongoDB Setup

#### Option A: Using MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string (it will look like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database-name`)
4. Update the connection string in `backend/index.js` (line 16)

#### Option B: Using Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Update the connection string in `backend/index.js` to: `mongodb://localhost:27017/e-commerce`

### Step 2: Install Dependencies

Open three separate terminal windows/tabs and navigate to each directory:

#### Terminal 1 - Backend
```bash
cd backend
npm install
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm install
```

#### Terminal 3 - Admin
```bash
cd admin
npm install
```

### Step 3: Run the Application

You need to run all three services simultaneously. Keep all three terminals open.

#### Terminal 1 - Start Backend Server
```bash
cd backend
npm start
```
The backend server will run on **http://localhost:4000**

#### Terminal 2 - Start Frontend
```bash
cd frontend
npm start
```
The frontend will run on **http://localhost:3000** (will open automatically in your browser)

#### Terminal 3 - Start Admin Panel
```bash
cd admin
npm run dev
```
The admin panel will run on **http://localhost:5173**

## Accessing the Application

- **Frontend (Customer)**: http://localhost:3000
- **Admin Panel**: http://localhost:5173
- **Backend API**: http://localhost:4000

## Important Notes

1. **MongoDB Connection**: Make sure to update the MongoDB connection string in `backend/index.js` with your own credentials.

2. **Port Conflicts**: If ports 3000, 4000, or 5173 are already in use:
   - Backend: Change `port` variable in `backend/index.js`
   - Frontend: React will prompt you to use a different port
   - Admin: Check `admin/vite.config.js` for port configuration

3. **Image Uploads**: Product images will be stored in `backend/upload/images/` directory.

4. **CORS**: The backend is configured to allow CORS from all origins. For production, you should restrict this.

## Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Ensure port 4000 is not in use
- Check if all dependencies are installed (`npm install`)

### Frontend/Admin can't connect to backend
- Ensure backend is running on port 4000
- Check browser console for CORS errors
- Verify API endpoints are using `http://localhost:4000`

### MongoDB connection errors
- Verify your MongoDB connection string
- Check if MongoDB Atlas IP whitelist includes your IP (0.0.0.0/0 for all IPs)
- Ensure MongoDB service is running (if using local MongoDB)

## Quick Start Script (Windows PowerShell)

You can create a script to start all services at once. Create a file `start-all.ps1`:

```powershell
# Start Backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm start"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start Frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm start"

# Wait a bit
Start-Sleep -Seconds 3

# Start Admin
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd admin; npm run dev"
```

Run it with: `.\start-all.ps1`

## Development Tips

- Keep all three terminals running while developing
- Backend must be running before frontend/admin can fetch data
- Check browser console and terminal logs for errors
- Use browser DevTools Network tab to debug API calls

## Next Steps

1. Update MongoDB connection string in `backend/index.js`
2. Install dependencies for all three parts
3. Start all three services
4. Open http://localhost:3000 in your browser
5. Open http://localhost:5173 for admin panel

Happy coding! 🚀




