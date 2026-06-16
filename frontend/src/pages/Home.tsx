import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-container">

          <h1>Camilla Karin Studio</h1>
          <p>Art for the soul</p>

          <div className="galleryButtonContainer">
            <div className="galleryButton">
                <Link to="/gallery" className="galleryButtonLink">
                    Explore the Gallery
                </Link>
            </div>
          </div>

        </div>

        <div className="best-sellers-container">
          <h2>Best Sellers</h2>
        </div>
        
        <div className="about-short-container">
          <h2>About the Artist</h2>
          <p>Camilla Karin is a contemporary artist known for her vibrant and emotive paintings that explore themes of identity, nature, and human connection. With a unique blend of abstract and figurative styles, Camilla's work captivates viewers with its bold colors and dynamic compositions. Her art has been exhibited in galleries worldwide, earning her critical acclaim and a dedicated following.</p>
          <Link to="/about" className="about-link">Read more about Camilla Karin</Link>
        </div>
        
      </div>
    
    </>

  );
    
};