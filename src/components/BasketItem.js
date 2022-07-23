import React from 'react'
import "./css/BasketItem.css"

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
import Button from './Button'

const BasketItem = ({
  uid,
  title,
  description,
  price,
  qty,
  setItems,
  items,
}) => {

  const onDelete = () => {
    const newItems = items.filter(item => item.uid !== uid);
    setItems(newItems);
  }
  return (
    <div className='BasketItem'>
      <ItemInfo title={title} description={description} />
      <ItemPrice value={price} currency={'₽'} />
      <Counter items={items} setItems={setItems} value={qty} uid={uid} />
      <ItemPrice value={qty * price} currency={'₽'} />
      <Button value={"X"} onClickHandler={onDelete}></Button>
    </div>
  )
}

export default BasketItem