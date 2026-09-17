import { useCart } from '../context/cartContext';

export const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-empty">
        <h2>Your Cart</h2>
        <p>You have nothing in your cart yet.</p>
      </section>
    );
  }

  const handleCheckout = () => {
    console.log("Ready to checkout! Items:", cart);
  };

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            {item.metadata?.image && (
              <img 
                src={item.metadata.image.imgix_url} 
                alt={item.title} 
                className="cart-item-image"
                width="80" 
              />
            )}
            
            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p>{item.metadata?.price} kr</p>
            </div>

            <button 
              className="remove-btn" 
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: {total} kr</h3>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </section>
  );
};