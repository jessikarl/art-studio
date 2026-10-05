import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import "../styles/_account.scss";

export const Account = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserOrders = async () => {
            if (!user) return;
            try {
                const response = await fetch("http://localhost:3000/api/orders", {
                    credentials: "include",
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrders(data);
                }
            } catch (error) {
                console.error("Error fetching user orders:", error);
            }
        };

        fetchUserOrders();
    }, [user]);

    return (
        <section className="account-container">
            <h2>My Account</h2>

            <div className="account-layout">

                <div className="profile-details">
                    <h3>Profile Information</h3>
                    <p className="profile-info"><span>Name:</span> {user?.full_name}</p>
                    <p className="profile-info"><span>Email:</span> {user?.email}</p>
                </div>

                <div className="order-details">
                    <h3>Order History</h3>

                    {orders.length === 0 ? (
                        <p>No orders found.</p>
                    ) : (
                        <div className="order-info">
                            {orders.map((order) => (
                                <div key={order.id} className="order-item">
                                    <p><span>Order ID:</span> #{order.id}</p>
                                    <p><span>Date:</span> {order.created_at.substring(0, 10)}</p>
                                    <p><span>Total:</span> {order.total_amount / 100} SEK</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            
        </section>
    );
};