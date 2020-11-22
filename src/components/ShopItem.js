import React from 'react';
import './ShopItem.css'
import { observer } from 'mobx-react';

const ShopItem = ({ name, price, onPut }) => {
  return (
    <div className='ShopItem' onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}</div>
    </div >
  )
}

export default observer(ShopItem);