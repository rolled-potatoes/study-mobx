import { makeAutoObservable } from "mobx";

class Counter {
  number = 0;
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  get double() {
    return this.number * 2;
  }
  increase = () => {
    this.number += 1;
  }
  decrease = () => {
    this.number -= 1;
  }
}

export default Counter;