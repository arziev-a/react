import { data } from "./data.js";
import Shopping from "./shoppingCart.js";
import { useState } from "react";
import "./App.css";
function App() {
  const [newData, setNewData] = useState(data);
  const [selectedItems, setSelectedItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increment = (id) => {
    const newArr = [...newData];
    const foundIndex = newData.findIndex((item) => item.id === id);
    newArr[foundIndex]["count"]++;
    setNewData(newArr);
    let countIt = 0;
    for (let i of newData) {
      if (i["count"]) {
        countIt++;
      }
    }
    setSelectedItems(countIt);
    let totalP = 0;
    for (let i of newData) {
      totalP += i.count * i.price;
    }
    setTotalPrice(totalP);
  };
  const decrement = (id) => {
    const newArr = [...newData];
    const foundIndex = newData.findIndex((item) => item.id === id);
    if (newArr[foundIndex]["count"]) {
      newArr[foundIndex]["count"]--;
    }
    setNewData(newArr);

    let countIt = 0;
    for (let i of newData) {
      if (i["count"]) {
        countIt++;
      }
    }
    setSelectedItems(countIt);
  };
  const countItems = () => {
    let countIt = 0;
    for (let i of newData) {
      if (i["count"]) {
        countIt++;
      }
    }
    setSelectedItems(countIt);
  };
  return (
    <div className="border main-container mt-5 mb-5">
      <div className="navbar">Total Items {selectedItems}</div>
      <Shopping data={newData} increment={increment} decrement={decrement} />
      <footer className="mb-3 mr-3">
        <div>Total Price is {totalPrice}$</div>
      </footer>
    </div>
  );
}

export default App;
