import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart"

export const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (product) => {

        const id = product._id;

        setCartItems(currItems => {

            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1, product }]
            }
            else {
                return currItems.map(item => {
                    if (item.id === product._id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id).quantity === 1) {
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                increaseCartQuantity,
                decreaseCartQuantity,
                getItemQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartQuantity,
                cartItems
            }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

