import React from "react"
import { Pizza } from "../types"
import withAddToCart, { AddToCartProps } from "./AddToCart"
import { useStateDispatch } from "./AppState"

import OfferCSS from "./SpecialOffer.module.css"

interface Props extends AddToCartProps {
  pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
  }
  return (
    <div className={OfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </div>
  )
}

export default withAddToCart(SpecialOffer)
