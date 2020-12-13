import React, { createRef } from "react"
import { FiShoppingCart } from "react-icons/fi"

import { AppStateContext } from "./AppState"

import CartCSS from "./Cart.module.css"

interface Props {}

interface State {
  isOpen: boolean
}

class Cart extends React.Component<Props, State> {
  #containerRef: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.#containerRef = createRef()
  }

  handleOutsideClick = (e: MouseEvent) => {
    if (
      this.#containerRef.current &&
      !this.#containerRef.current.contains(e.target as Node)
    ) {
      this.setState({ isOpen: false })
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick)
  }

  handleClick = () => this.setState((prev) => ({ isOpen: !prev.isOpen }))

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity
          }, 0)
          return (
            <div ref={this.#containerRef} className={CartCSS.cartContainer}>
              <button
                onClick={this.handleClick}
                className={CartCSS.button}
                type="button"
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
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
