import { useEffect, useState } from 'react';
import { Product } from "../components/Product/Product";
import Spinner1 from "../components/Common/Spinner/Spinner1";
import { Col, Row } from "react-bootstrap"

export function Products() {

    const [productsData, setProductsData] = useState(null);
    const [isLoading, changeIsLoading] = useState(true)
    const showSpinner = useSpinnerHook()

    function showProducts() {
        return (
            <div>
                <h2>This is products component</h2>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {productsData.map(item => (
                        <Col key={item.id}>
                            <Product details={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

    useEffect(() => {
        fetch('http://localhost:8001/api/products')
            .then(res => res.json())
            .then(products => {
                console.log("Products", products)
                setProductsData(products)
                changeIsLoading(false);
            });
    }, [])

    return (
        <div>
            {
                isLoading ? showSpinner() : showProducts()
            }
        </div>
    )
}

function useSpinnerHook() {

    function showSpinner1() {
        return (
            <Spinner1 />
        )
    }

    return showSpinner1;
}
