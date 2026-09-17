import { useEffect, useState } from 'react';
import { cosmic, type Artwork } from '../services/cosmic';
import { useCart } from './../context/cartContext';
import '../styles/_gallery.scss';

export const Art = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const getArtworks = async () => {
      try {
        const response = await cosmic.objects
          .find({ type: 'artworks' })
          .props('id,title,slug,metadata');

        setArtworks(response.objects || []);
      } catch (err) {
        console.error('Could not fetch artworks:', err);
        setError('Something went wrong while loading the gallery.');
      } finally {
        setLoading(false);
      }
    };

    getArtworks();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading artworks...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <section className="gallery">
      {artworks.map((art) => (
        <div key={art.id} className="art-card">
          {art.metadata?.image && (
            <img 
              src={art.metadata.image.imgix_url} 
              alt={art.title} 
              className="art-image"
            />
          )}

          <div className="art-info">
            <h3>{art.title}</h3>
            
            <p className="art-meta">
              {art.metadata?.medium} - {art.metadata?.dimensions}
            </p>

            {art.metadata?.price && (
              <span className="art-price">{art.metadata.price} kr</span>
            )}
          </div>

          <div className='art-cart-button'>
            <button onClick={() => addToCart(art)}>Add to Cart</button>
          </div>  
        </div>
      ))}
    </section>
  );
};