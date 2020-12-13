import React from "react"
import { FiShoppingCart } from "react-icons/fi"

import { AppStateContext } from "./AppState"

import CartCSS from "./Cart.module.css"

interface Props {}

interface State {
  isOpen: boolean
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleClick = () => this.setState((prev) => ({ isOpen: !prev.isOpen }))

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          return (
            <div className={CartCSS.cartContainer}>
              <button
                onClick={this.handleClick}
                className={CartCSS.button}
                type="button"
              >
                <FiShoppingCart />
                <span>{state.cart.items.length} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        }}
      </AppStateContext.Consumer>
    )
  }
}

export default Cart
