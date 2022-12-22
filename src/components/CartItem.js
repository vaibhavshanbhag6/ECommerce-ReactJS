import React from "react";
import FormatPrice from "./Helpers/FormatPrice";
import { QtyToggle } from "./QtyToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

const CartItem = ({ id, name, image, color, price, qty, max }) => {
  const { removeItem, updateQty } = useCartContext();

  const setDecrease = () => {
    if(qty > 1)
      updateQty(id, "DECREMENT_QTY");
  };

  const setIncrease = () => {
    if(qty<max)
      updateQty(id, "INCREMENT_QTY");
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <QtyToggle
        qty={qty}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * qty} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;