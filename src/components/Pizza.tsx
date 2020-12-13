import React from "react"

import { useStateDispatch } from "./AppState"
import { Pizza } from "../types"

import PizzaCSS from "./Pizza.module.css"
import withAddToCart, { AddToCartProps } from "./AddToCart"

interface Props extends AddToCartProps {
  pizza: Pizza
}

const PizzaComponent: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
  }
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </li>
  )
}

export default withAddToCart(PizzaComponent)
