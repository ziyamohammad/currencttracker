# Crypto Market Dashboard 💰

A sleek real-time cryptocurrency dashboard built with **React** and **Binance WebSocket**, powered by **CoinGecko API** for comprehensive market data. See live prices, charts, and market stats in one beautifully animated UI.

---

## ✨ Features
- Real-time crypto price updates using Binance WebSocket
- CoinGecko market data with 1h, 24h, 7d price changes
- Mini sparkline charts for the past 7 days
- Formatted market caps, volumes, and supplies
- Fully responsive layout with interactive UI elements

---

## 🤖 Tech Stack

| Layer         | Tech Used                                  |
|--------------|---------------------------------------------|
| Frontend     | React, Axios, WebSockets, Lucide Icons      |
| Data API     | CoinGecko API (market data)                |
| Live Prices  | Binance WebSocket API                      |
| Charts       | Inline SVG sparkline renderer              |
| Styling      | Custom CSS with modular architecture       |

---

## 🚀 Architecture Overview

```
CryptoDashboard.js
├─ useEffect 1: Fetch market data from CoinGecko
├─ useEffect 2: Open Binance WebSocket stream
└─ setCryptoData: Updates state with real-time prices
```

- **CoinGecko**: Initializes all coin market info (price, changes, sparkline, supply).
- **Binance WebSocket**: Streams individual `symbol@ticker` prices and updates prices in state.
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
> - Real-time price updates from Binance
> - How WebSocket + CoinGecko integration works

### 📹 Watch Here:
![Demo]
---

## 🧹 Thought Process

- CoinGecko provides stable, structured crypto market data — perfect for layout.
- Binance WebSocket is ultra-fast and precise for updating prices live.
- Combined both with React state to sync data streams in one dashboard.
- Minimal dependencies; no chart libraries, just pure SVG.
- Optimized for performance, even on slower connections.

---

## 🚫 Known Limitations
- Binance only supports USDT trading pairs.
- Not using a backend or database for favorites or user auth.
- Sparkline charts are purely visual, no hover tooltip yet.

---

## 💼 License
MIT License. Use freely and remix for your own projects!

