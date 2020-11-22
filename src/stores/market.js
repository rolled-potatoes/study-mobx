import { makeAutoObservable } from "mobx";

class MarketStore {
  selectedItems = [];

  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }
  put = (name, price) => {
    const { number } = this.root.counter;
    console.log(number);
    const exists = this.selectedItems.find(item => item.name === name)
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1
      })
      return;
    }
    exists.count += 1;
  }

  take = (name) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count -= 1;
    if (itemToTake.count === 0) {
      this.selectedItems = this.selectedItems.filter(item => item.name !== name)
    }
  }
  get total() {
    return this.selectedItems.reduce((acc, cur) => {
      return acc + cur.price * cur.count
    }, 0)
  }
}

export default MarketStore; 