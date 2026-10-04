import { useEffect, useState } from 'react';
import { cosmic, type Artwork } from '../services/cosmic';
import '../styles/_gallery.scss';
import { Link } from 'react-router';

export const Art = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <section className="gallery-container">
      <div className='gallery-header'>
        <h1>The Collection</h1>
      </div>

      {artworks.map((art) => (
        <div key={art.id} className="art-card">
          <Link to={`/product/${art.slug}`} className='art-product-link'>
            {art.metadata?.image && (
              <img 
                src={`${art.metadata.image.imgix_url}?w=600&auto=format,compress`} 
                alt={art.title} 
                className="art-image"
              />
            )}

            <div className="art-info">
              <h3>{art.title}</h3>

              {art.metadata?.price && (
                <span className="art-price">{art.metadata.price} kr</span>
              )}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};