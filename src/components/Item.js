import React, {useState} from "react";

function Item({ name, category }) {
  const [classy, setClass] = useState(false);
  const cartClass = classy? "in-cart" : ""
  const inCart = classy? "Remove From Cart" : "Add to Cart"
  const addRem = classy? "remove" : "add"

  function handleClick() {
    setClass(change => !change)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addRem} onClick={handleClick}>{inCart}</button>
    </li>
  );
}

export default Item;
