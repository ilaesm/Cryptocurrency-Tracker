import React from 'react'
import './Coins.css'

const CoinItem = (props) => {
  //Determines red or green color based on a negative or postive change in price. 
const ColorP = ({children}) => {
  if (props.coins.price_change_percentage_24h > 0) {
    return <p style={{color: '#009C3F'}}>{children}</p>
  }
  return <p style={{color: '#D92A3F'}}>{children}</p>
 
}

  return (
    <div className = 'coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className = 'img-symbol'>
            <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p>

        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <ColorP>{props.coins.price_change_percentage_24h.toFixed(2)}%</ColorP>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem