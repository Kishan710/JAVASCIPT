# Firebase + React Mini Project

A minimal React (Vite) app showing **Cloud Firestore CRUD** and a **Realtime Database** demo.

## ✨ Features
- Add / edit / toggle / delete tasks (Firestore)
- Live updates via `onSnapshot` (no manual refresh)
- Simple shared counter using Realtime Database

## 🔧 Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a Firebase project → enable **Firestore** and (optionally) **Realtime Database**.

3. Copy `.env.example` to `.env` and paste your Firebase config:
   ```bash
   cp .env.example .env
   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## 🔒 Firestore Security Rules (quick start)
In Firebase Console → Firestore → Rules, for testing you can allow reads/writes to authenticated users only:
```
// WARNING: Loosened for quick start. Tighten before production.
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2026, 1, 1);
    }
  }
}
```
> Replace with proper auth checks for production.

## 📁 Project Structure
```
firebase-react-mini/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── firebase.js
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   └── TaskItem.jsx
│   └── realtime/
│       └── RealtimeDemo.jsx
└── README.md
```

## ✅ Notes
- This project does not include Auth; rules above are **temporal** and for lab use only.
- Works with Node.js 18+.
- You can deploy with `npm run build` and host the `dist/` folder.

Happy hacking!
