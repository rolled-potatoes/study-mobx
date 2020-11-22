import React from 'react';
import SuperMarkeTemplate from './SuperMarketTemplate';
import ShopItemList from '../shop/List';
import BaseketItemList from '../basket/List';
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