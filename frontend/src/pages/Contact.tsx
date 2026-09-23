import '../styles/_contact.scss';

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-info">
          <h3 className="subheading">Inquiries</h3>
          
          <h1 className="heading">
            Write to<br />the studio
          </h1>
          
          <p className="intro">
            For original purchases, commissions, gallery enquiries, or simply to say hello. Camilla replies within a few days, between paintings.
          </p>
          
          <div className="details">
            <div className="detail-item">
              <h4>Email</h4>
              <p>studio@camillakarin.com</p>
            </div>
            
            <div className="detail-item">
              <h4>Studio</h4>
              <p>Kungsgatan 2, Eskilstuna 63517, Sweden</p>
            </div>
            
            <div className="detail-item">
              <h4>Instagram</h4>
              <p>@camillakarin</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Inquiry about..." 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};