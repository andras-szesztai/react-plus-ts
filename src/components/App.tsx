import React, { useEffect } from "react"

import PizzaSvg from "../svg/pizza.svg"
import AppStateProvider from "./AppState"
import Pizza from "./Pizza"
import Cart from "./Cart"

import pizzas from "../data/pizzas.json"

import AppCSS from "./App.module.css"
import SpecialOffer from "./SpecialOffer"

const App = () => {
  const specialOffer = pizzas.find((pizza) => pizza.specialOffer)
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSvg width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOffer && <SpecialOffer pizza={specialOffer} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />
          })}
        </ul>
      </div>
    </AppStateProvider>
  )
}

export default App
