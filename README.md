# Crypto Market Dashboard 💰

A sleek real-time cryptocurrency dashboard built with **React** , powered by **CoinGecko API** for comprehensive market data. See live prices, charts, and market stats in one beautifully animated UI.

---

## ✨ Features
- Real-time crypto price updates using CoinGecko API
- CoinGecko market data with 1h, 24h, 7d price changes
- Mini sparkline charts for the past 7 days
- Formatted market caps, volumes, and supplies
- Fully responsive layout with interactive UI elements

---

## 🤖 Tech Stack

| Layer         | Tech Used                                  |
|--------------|---------------------------------------------|
| Frontend     | React, Axios,Redux , Lucide Icons      |
| Data API     | CoinGecko API (market data)                |
| Live Prices  | CoinGecko API                     |
| Charts       | Inline SVG sparkline renderer              |
| Styling      | Custom CSS with modular architecture       |

---

## 🚀 Architecture Overview

```
CryptoDashboard.js
├─ useEffect 1: Fetch market data from CoinGecko
└─ setCryptoData: Updates state with real-time prices
```

- **CoinGecko**: Initializes all coin market info (price, changes, sparkline, supply).
- **UI**: Responsive table layout with custom rendering per column.

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/crypto-dashboard.git
cd crypto-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npm start
```

### 4. Optional: Customize
You can edit `CryptoDashboard.js` to add filters, sorting, or even switch to dark mode!

---

## 🎥 Demo Video / GIF

> A quick walkthrough of the app showcasing:
> - Initial UI layout
> - Real-time price updates from CoinGecko
> - How  CoinGecko integration works

### 📹 Watch Here:
![Demo]
https://drive.google.com/file/d/1zaYtyXE9JZm26zeFcg5UOY51T0CKkpnG/view?usp=drive_link
---

## 🧹 Thought Process

- CoinGecko provides stable, structured crypto market data — perfect for layout.
- Combined both with React state to sync data streams in one dashboard.
- Minimal dependencies; no chart libraries, just pure SVG.
- Optimized for performance, even on slower connections.

---

## 🚫 Known Limitations
- Not using a backend or database for favorites or user auth.
- Sparkline charts are purely visual, no hover tooltip yet.

---

## 💼 License
MIT License. Use freely and remix for your own projects!

