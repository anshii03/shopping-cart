import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import "./Product.css"

export function Product(props) {

    const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity, removeFromCart } = useShoppingCart()
    // Object destructuring
    const { details } = props;

    const quantity = getItemQuantity(details._id)

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={details.imageUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{details.name}</Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(details)}>
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button onClick={() => decreaseCartQuantity(details._id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(details)}>+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(details._id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}