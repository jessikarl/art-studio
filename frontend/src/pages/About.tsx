import '../styles/_about.scss';
import imageArtist from '../assets/jonathan-borba-lsGZlrdvd_c-unsplash.jpg';

export const About = () => {
    return (
        <div className="about-container">
      
            <div className="image-artist">
                <img src={imageArtist} alt="Camilla Karin" />
            </div>

            <div className="about-content">
                <h3>The process</h3>
                <h1>Camilla Karin</h1>

                <p>
                    Camilla Karin Studio is a contemporary art studio based in Eskilstuna, Sweden. The studio was founded by Camilla Karin, a passionate artist with a vision to create unique and captivating artworks that resonate with art enthusiasts worldwide.
                </p>
                <p>
                    At Camilla Karin Studio, we believe in the power of art to inspire, provoke thought, and evoke emotions. Our mission is to create art that transcends boundaries and connects people on a deeper level. We strive to push the boundaries of creativity and explore new artistic horizons.
                </p>
                <p>
                    Our studio offers a diverse range of artworks, including paintings, sculptures, and mixed media pieces. Each artwork is meticulously crafted with attention to detail and a deep understanding of artistic techniques. We take pride in our ability to create art that is not only visually stunning but also meaningful and thought-provoking.
                </p>
                <p>
                    We are committed to providing exceptional customer service and ensuring that our clients have a seamless experience when purchasing our artworks. Whether you are an art collector, a gallery owner, or simply an art enthusiast, we are here to assist you in finding the perfect piece that resonates with your taste and style.
                </p>
                <p>
                    Thank you for visiting Camilla Karin Studio. We invite you to explore our collection and discover the beauty and creativity that our studio has to offer.
                </p>
            </div>

        </div>
    );
};