import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Artwork } from '../services/cosmic';

interface CartContextType {
  cart: Artwork[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (id: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Artwork[]>(() => {
    const savedCart = localStorage.getItem('art-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('art-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (artwork: Artwork) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === artwork.id)) return prev;
      return [...prev, artwork];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.metadata.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}