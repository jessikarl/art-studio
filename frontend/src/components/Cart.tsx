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

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout failed', error);
    }
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