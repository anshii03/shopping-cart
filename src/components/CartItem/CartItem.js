import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext";

export function CartItem(props) {

    const { removeFromCart } = useShoppingCart()

    const { product, quantity } = props;

    if (product == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={product.imageUrl}
                alt="product"
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {product.name}{" "}
                    {product.quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {product.price}
                </div>
            </div>
            <div> {product.price * quantity}</div>
            <Button
                className=""
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(product._id)}
            >
                &times;
            </Button>
        </Stack>
    )
}