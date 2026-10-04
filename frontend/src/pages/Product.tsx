import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useCart } from "../context/cartContext";
import { type Artwork, cosmic } from "../services/cosmic";
import "../styles/_product.scss";

export const Product = () => {
  const {id} = useParams();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {addToCart} = useCart();

  useEffect(() => {
    const getProductArtwork = async () => {
      try {
        const response = await cosmic.objects
          .findOne({ type: "artworks", slug: id })
          .props("id, title, slug, metadata");

        setArtwork(response.object);
      } catch (error) {
        console.error("Error fetching artwork:", error);
        setError("Could not load the artwork.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProductArtwork();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!artwork) {
    return <div>No artwork found.</div>;
  }

console.log("Actual Cosmic Data:", artwork);
  return (
    <section className="product-page">
      <Link className="back-link" to="/gallery">
        Back to Gallery
      </Link>

      <div className="product-container">
        <div className="product-image">
          {artwork.metadata?.image && (
            <img src={`${artwork.metadata.image.imgix_url}?w=600&auto=format,compress`} alt={artwork.title} />
          )}
        </div>

        <div className="product-content">
            <div className="product-details">
            <h1>{artwork.title}</h1>
            <p className="product-price">{artwork.metadata?.price} kr</p>
          </div>

          <div className="product-info">
            <p>Medium: {artwork.metadata?.medium}</p>
            <p>Dimensions: {artwork.metadata?.dimensions}</p>
          </div>

          <div className="product-description">
            <p>{artwork.metadata?.description}</p>
          </div>

          <button
            className="add-to-cart-button"
            onClick={() => addToCart(artwork)}
            disabled={!artwork.metadata?.is_available}
          >
            {artwork.metadata?.is_available ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>


      </div>
    </section>
  )



}
