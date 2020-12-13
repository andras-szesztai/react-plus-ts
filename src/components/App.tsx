import React from "react"

import PizzaSvg from "../svg/pizza.svg"
import Pizza from "./Pizza"

import pizzas from "../data/pizzas.json"

import AppCSS from "./App.module.css"
import Cart from "./Cart"

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSvg width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />
        })}
      </ul>
    </div>
  )
}

export default App
