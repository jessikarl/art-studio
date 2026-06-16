import '../styles/_footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">

        {/*footer heading*/}
        <div className="footer-container">
          <div className="footer-logo">
            <h1 className="studio-logo">
              Camilla Karin <span>Studio</span>
            </h1>

          </div>

          {/*columns*/}
          <div className='footer-row'>
            <div className='footer-col-1'>
              <p>Every piece tells a story.</p>

              {/* <a href="/about">Read about the artist</a> */}
            </div>

            <div className='footer-col-2'>
              <h3>Inquiries & Contact</h3>
                <p>Email: studio@camillakarin.com</p>
                <p>Instagram: @camillakarin</p>
                
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