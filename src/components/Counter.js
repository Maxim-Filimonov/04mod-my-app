import React from "react";
import "./css/Counter.css";

import Button from "./Button";

// EXAMPLE OF REDUX like FUNCTION with only business logic
// function updateQuantityRedux({ items, uid, updateValueFn }) {
//   const newItems = items.slice();
//   const index = newItems.findIndex(item => item.uid === uid);
//   const value = updateValueFn(newItems[index]);

//   let qty = parseInt(value);
//   if (qty < 0 || isNaN(qty)) {
//     qty = 0;
//   }
//   if (qty > 1000) {
//     qty = 1000;
//   }

//   newItems[index].qty = qty;
//   return { items: newItems };
// }

const Counter = ({ value, uid, items, setItems }) => {
  // const [qty, setQty] = useState(value)

  // const setQtyWithCheck = (value) => {
  //   let qty = parseInt(value);
  //   if (qty < 0 || isNaN(qty)) {
  //     qty = 0;
  //   }
  //   setQty(qty);
  // }

  // const qtyInputChange = (ev) => {
  //   setQtyWithCheck(ev.target.value);
  // };
  // const qtyAdd = () => setQtyWithCheck(qty + 1)
  // const qtySub = () => setQtyWithCheck(qty - 1)
  const setQtyWithCheck = (updateValueFn) => {
    const newItems = items.slice();
    const index = newItems.findIndex(item => item.uid === uid);
    const value = updateValueFn(newItems[index]);
    let qty = parseInt(value);
    if (qty < 0 || isNaN(qty)) {
      qty = 0;
    }
    if (qty > 1000) {
      qty = 1000;
    }

    newItems[index].qty = qty;

    setItems(newItems);
  }

  const qtyAdd = () => setQtyWithCheck((item) => item.qty + 1)
  const qtySub = () => setQtyWithCheck((item) => item.qty - 1)
  const qtyInputChange = (ev) => setQtyWithCheck((_item) => ev.target.value)


  return (
    <div className="Counter">
      <div className="Counter_into">
        <Button value="-" onClickHandler={qtySub} />
        <input
          className="Counter_input"
          value={value}
          onChange={qtyInputChange}
        />
        <Button value="+" onClickHandler={qtyAdd} />
      </div>
    </div>
  );
};

export default Counter;
