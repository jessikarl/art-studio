export const Contact = () => {
  return (
    <>
    <h3>Inquiries</h3>
    <h1>Write to the studio</h1>
    <p>For original purchases, commissions, gallery enquiries, or simply to say hello. Camilla replies within a few days, between paintings.</p>
    <h3>Email:</h3>
    <p>studio@camillakarin.com</p>
    <h3>Studio:</h3>
    <p>Kungsgatan 2, Eskilstuna 63517, Sweden</p>
    <h3>Instagram:</h3>
    <p>@camillakarin</p>

    <div>
      <form action="submit">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
};