import '../styles/_footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          
          <div className="footer-logo">
            <h1 className="studio-logo">
              Camilla Karin <span>Studio</span>
            </h1>

          </div>

          <div className='footer-row'>
            <div className='footer-col-1'>
              <p>Every piece tells a story.</p>
            </div>

            <div className='footer-col-2'>
              <h3>Inquiries & Contact</h3>

              <p>Email: <a href="mailto:studio@camillakarin.com">studio@camillakarin.com</a></p>
              <p>Instagram: <a href="https://instagram.com/camillakarin" target="_blank" rel="noreferrer">@camillakarin</a></p>

              <div className='copyright'>
                <p>
                  &copy; 2026 Camilla Karin Studio. All rights reserved.
                </p>
              </div>
            </div>
            


          </div>

        </div>
          
      </footer>

    </> 
  );
};