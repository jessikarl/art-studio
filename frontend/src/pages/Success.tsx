import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useCart } from "../context/cartContext";
import "../styles/_success.scss"; 

export const Success = () => {
    const {clearCart} = useCart();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [paymentStatus, setPaymentStatus] = useState("Verifying payment...");

    useEffect(() => {
        clearCart();

        const verifyOrder = async () => {
            if (!sessionId) {
                setPaymentStatus ("No session ID found.");
                return;
            }

            try {
                const response = await fetch("http://localhost:3000/api/checkout/verify-order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ sessionId: sessionId }),
                });
                const data = await response.json();

                if (data.success) {
                    setPaymentStatus("Payment successful!");
                } else {
                    setPaymentStatus("Payment verification failed.");
                }
            } catch (error) {
                setPaymentStatus("An error occurred while verifying the payment.");
            }
        };
        verifyOrder();

    }, [ sessionId]);

    return (
        <section className="success-container">
            <div className="success-message">
                <h2>Thank you for your purchase!</h2>
                <p>Your order has been confirmed.</p>
                <p>{paymentStatus}</p>
                
                <Link to="/" className="continue-button">
                    Return to homepage
                </Link>
            </div>
        </section>
    );
};