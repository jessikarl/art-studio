# Camilla Karin Studio
A e-commerce platform for an art gallery. 

## Tech stack & dependencies 
* **Frontend:** Node.js , React, TypeScript, SCSS
* **Backend:** Node.js, Express, Google Oauth
* **Database:** MySQL
* **CMS:** Cosmic.js 
* **Payment:** Stripe 

## System requierments  
* **Node.js** v18.0.0 or higher 
* **MySQL** v.8.0 or higher 

## Installation & Setup 

### 1. Clone the repository 
```bash
git clone https://github.com/jessikarl/art-studio
```

### 2. Database Setup 
1. Create a local MySQL database named "ArtStudio"
2. Import the database schema using the database_dump.sql file. Located in the root directory.

### 3. Backend Setup 
```bash 
cd backend 
npm install
```

Create a ".env" file in the "backend" directory with the following:
```bash
STRIPE_SECRET_KEY=your-stripe-key 

VITE_BUCKET_SLUG=art-gallery-production
VITE_BUCKET_READ_KEY=your_cosmic_key
VITE_BUCKET_WRITE_KEY=your_cosmic_key

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_database_user 
DB_PASSWORD=your_database_password
DB_NAME=ArtStudio

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

SESSION_SECRET=your_session_secret 
```

Start the server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd frontend
npm install
```

Create a ".env" file in the "frontend" directory with the following:
```bash
VITE_BUCKET_SLUG=art-gallery-production
VITE_BUCKET_READ_KEY=your_cosmic_key
VITE_BUCKET_WRITE_KEY=your_cosmic_key
```

Start the server:
```bash
npm run dev
```

## Requirements 
1. Koppling till en betallösning
2. Inloggning via OAuth, Google eller liknande tillämpas.
3. En egendesignat databas med minst två tabeller. Ska vara normaliserad till lämplig nivå
och lämpliga constraints i form av foreign keys etc. används
4. Minst ett externt system används via ett API. JSON, XML eller något annat format som
läses och/eller skrivs. En embed är inte tillräckligt.
5. Routing och snygga url:er. Alla anrop går via en dispatcher (index.php) och controllers
hanterar url-strukturen. Eller liknande, inga anrop till specifika .php-filer.
6. Front end utan omladdningar av sida. Innehåll hämtas samt skrivs till databasen genom
json eller xml via JavaScript. Vissa omladdningar får göras, mellan delar av tjänsten.
Jämför med ”Skriva poster på Facebook”.







