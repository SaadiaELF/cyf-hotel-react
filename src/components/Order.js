import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(() => {
      return orders + 1;
    });
  }

  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
