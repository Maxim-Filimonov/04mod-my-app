import React from "react";
import "./css/Basket.css";

import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";
import BasketPromoInfo from "./BasketPromoInfo";
import BasketTotal from "./BasketTotal";
import BasketPromoCode from "./BasketPromoCode";
import Button from "./Button";

const Basket = (props) => {
  const [items, setItems] = React.useState(props.items);

  const countItemsInBasket = items.reduce((acc, next) => acc + next.qty, 0);
  const amountTotal = items.reduce(
    (acc, next) => acc + next.price * next.qty,
    -500
  );

  const onAddClick = () => {
    console.log("CLICKED");
    const newItems = [{
      uid: "some-random-uid-" + new Date(),
      qty: 1,
      price: 101,
      description: "Новый товар"
    }, ...items];
    console.log("added", newItems);
    setItems(newItems);
  }

  return (
    <div className="Basket">
      <BasketHeader count={countItemsInBasket} />

      <div className="Basket__items">
        {items.map((item) => (
          <BasketItem items={items} setItems={setItems} {...item} key={item.uid} />
        ))}

        <BasketPromoInfo code={"REACTSPECIALIST"} />
        <BasketTotal value={amountTotal} currency={"₽"} />
      </div>

      <BasketPromoCode code={""} />
      <Button
        value="Продолжить покупку"
        onClickHandler={() => alert("Продолжить")}
        proceed={true}
      />
      <Button onClickHandler={onAddClick} value="Добавить" />
    </div>
  );
};

export default Basket;
