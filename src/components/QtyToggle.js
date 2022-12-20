import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

export const QtyToggle = ({qty, setIncrease, setDecrease}) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{qty}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}
