import React from 'react';
import SuperMarkeTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BaseketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const SuperMarket = () => {
  return (
    <SuperMarkeTemplate
      items={<ShopItemList />}
      basket={<BaseketItemList />}
      total={<TotalPrice />}
    />
  )
}

export default SuperMarket