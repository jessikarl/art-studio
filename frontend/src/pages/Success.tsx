import { useEffect } from "react";
import { Link } from "react-router";
import { useCart } from "../context/cartContext";
import "../styles/_success.scss"; 

export const Success = () => {
    const {clearCart} = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <section className="success-container">
            <div className="success-message">
                <h2>Thank you for your purchase!</h2>
                <p>Your order has been confirmed.</p>
                
                <Link to="/" className="continue-button">
                    Return to homepage
                </Link>
            </div>
        </section>
    );
};