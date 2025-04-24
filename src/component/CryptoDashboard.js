import { useEffect, useState } from "react"
import { Star, ChevronUp, ChevronDown, Info } from "lucide-react"
import axios from 'axios'

export default function CryptoDashboard() {
  const [cryptoData, setCryptoData] = useState([])

  useEffect(() => {
    // Step 1: Fetch initial data using CoinGecko
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              price_change_percentage: "1h,24h,7d",
              sparkline: true,
            },
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-6e7nR9WLmQsTDZJ5oi17CsCK",
            },
          }
        );
        console.log(res.data);
        setCryptoData(res.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
    const interval = setInterval(fetchData, 5000); // poll every 10 seconds

  return () => clearInterval(interval);
   
  }, []);
  
  const formatNumber = (num) => {
    if (!num && num !== 0) return "$0"
    if (num >= 1e12) return `$${(num / 1e12).toFixed(3)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(3)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(3)}M`
    return `$${num.toLocaleString()}`
  }

  const formatPrice = (price) => {
    if (price === undefined || price === null) return "$0.00"
    if (price >= 1000) return `$${price.toLocaleString()}`
    if (price >= 1) return `$${price.toFixed(2)}`
    return `$${price.toFixed(6)}`
  }

  const drawChart = (data, color) => {
    if (!data || data.length === 0) return null

    const width = 120
    const height = 40
    const padding = 5
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const range = maxValue - minValue || 1

    const points = data
      .map((value, index) => {
        const x = padding + (index * (width - 2 * padding)) / (data.length - 1)
        const y = height - padding - ((value - minValue) / range) * (height - 2 * padding)
        return `${x},${y}`
      })
      .join(" ")

    return (
      <svg width={width} height={height} className="chart">
        <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
      </svg>
    )
  }

  return (
    <div className="container">
      <h1 className="title">Crypto Market Dashboard</h1>
      <div className="tableContainer">
        <table className="cryptoTable">
          <thead>
            <tr>
              <th className="numberColumn">#</th>
              <th className="nameColumn">Name</th>
              <th className="priceColumn">Price</th>
              <div className="changinglayout">
                <th className="changeColumn">1h %</th>
                <th className="changeColumn">24h %</th>
                <th className="changeColumn">7d %</th>
              </div>
              <th className="marketCapColumn">
                Market Cap <Info className="infoIcon" size={14} />
              </th>
              <th className="volumeColumn">
                Volume(24h) <Info className="infoIcon" size={14} />
              </th>
              <th className="supplyColumn">
                Circulating Supply <Info className="infoIcon" size={14} />
              </th>
              <th className="chartColumn">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <tr key={crypto.id} className="cryptoRow">
                <td className="numberColumn">
                  <div className="starWrapper">
                    <Star className="starIcon" size={16} />
                    <span>{index + 1}</span>
                  </div>
                </td>
                <td className="nameColumn">
                  <div className="nameCell">
                    <div className="logoContainer">
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        width={24}
                        height={24}
                        className="cryptoLogo"
                      />
                    </div>
                    <div className="nameSymbolContainer">
                      <span className="cryptoName">{crypto.name}</span>
                      <span className="cryptoSymbol">{crypto.symbol}</span>
                    </div>
                  </div>
                </td>
                <td className="priceColumn">{formatPrice(crypto.current_price)}</td>
                <div className="changinglayout">
                  <td className={`${"changeColumn"} ${crypto.price_change_percentage_1h_in_currency >= 0 ? "positive" : "negative"}`}>
                    {crypto.price_change_percentage_1h_in_currency >= 0 ? (
                      <ChevronUp className="changeIcon" size={14} />
                    ) : (
                      <ChevronDown className="changeIcon" size={14} />
                    )}
                    {Math.abs(crypto.price_change_percentage_1h_in_currency || 0).toFixed(2)}%
                  </td>
                  <td className={`${"changeColumn"} ${crypto.price_change_percentage_24h_in_currency >= 0 ? "positive" : "negative"}`}>
                    {crypto.price_change_percentage_24h_in_currency >= 0 ? (
                      <ChevronUp className="changeIcon" size={14} />
                    ) : (
                      <ChevronDown className="changeIcon" size={14} />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h_in_currency || 0).toFixed(2)}%
                  </td>
                  <td className={`${"changeColumn"} ${crypto.price_change_percentage_7d_in_currency >= 0 ? "positive" : "negative"}`}>
                    {crypto.price_change_percentage_7d_in_currency >= 0 ? (
                      <ChevronUp className="changeIcon" size={14} />
                    ) : (
                      <ChevronDown className="changeIcon" size={14} />
                    )}
                    {Math.abs(crypto.price_change_percentage_7d_in_currency || 0).toFixed(2)}%
                  </td>
                </div>
                <td className="marketCapColumn">{formatNumber(crypto.market_cap)}</td>
                <td className="volumeColumn">
                  <div className="volumeCell">
                    <div>{formatNumber(crypto.total_volume)}</div>
                    <div className="volumeDetails">{crypto.symbol.toUpperCase()}</div>
                  </div>
                </td>
                <td className="supplyColumn">
                  <div className="supplyCell">
                    <div>
                      {((crypto.circulating_supply || 0) / 1e6).toFixed(2)}M {crypto.symbol.toUpperCase()}
                    </div>
                    <div className="supplyBar">
                      <div className="supplyBarFill" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </td>
                <td className="chartColumn">
                  {drawChart(crypto.sparkline_in_7d?.price, crypto.price_change_percentage_7d_in_currency >= 0 ? "#16c784" : "#ea3943")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
