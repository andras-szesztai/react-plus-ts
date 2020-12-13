import React, { useContext } from "react"

import { AppSetStateContext, useSetState } from "./AppState"

import PizzaCSS from "./Pizza.module.css"

interface Pizza {
  id: number
  name: string
  description: string
  price: number
}

interface Props {
  pizza: Pizza
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const setState = useSetState()
  const handleAddToCartClick = () => {
    setState((currState) => {
      const itemExists = currState.cart.items.find(
        (item) => item.id === pizza.id
      )
      return {
        ...currState,
        cart: {
          ...currState.cart,
          items: itemExists
            ? currState.cart.items.map((item) => {
                if (item.id === pizza.id) {
                  return { ...item, quantity: item.quantity + 1 }
                }
                return item
              })
            : [
                ...currState.cart.items,
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: 1,
                },
              ],
        },
      }
    })
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

export default Pizza
