import { useAuth } from "../context/authContext";
import "../styles/_account.scss";

export const Account = () => {
    const {user} = useAuth();

    return (
        <section className="account-container">
            <h2>My Account</h2>

            <div className="profile-details">
                <h3>Profile Information</h3>
                <p className="profile-info"><span>Name:</span> {user?.full_name}</p>
                <p className="profile-info"><span>Email:</span> {user?.email}</p>
            </div>

            <div className="order-details">
                <h3>Order History</h3>
                <p className="order-info"><span>Orders:</span></p>
            </div>
        </section>
    )
}