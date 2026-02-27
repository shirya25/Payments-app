# GPey — Payments App

A Google Pay-inspired payments app with a highlighted **Receive Money** feature.

## Features
- 🏠 Home screen with balance, quick actions, and recent transactions
- ✦ **Receive Money** — highlighted with gold glow, QR code + UPI ID sharing
- 📤 Send Money — contact picker with quick amounts
- 📋 Transaction history with filters

## Run locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow prompts. Done!

### Option 2 — GitHub → Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your repo
4. Vercel auto-detects Next.js — click **Deploy**

No env variables needed. Build settings are auto-detected.
