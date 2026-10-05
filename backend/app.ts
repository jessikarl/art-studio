import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from './config/passport';
import checkoutRoutes from './routes/checkoutRoutes';
import { testDatabaseConnection } from './models/Database';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/checkout', checkoutRoutes);

app.use('/api/orders', orderRoutes);

app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/api/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login' }), (req, res) => {
  res.redirect('http://localhost:5173'); // Redirect to your frontend after successful login
});

app.get('/api/auth/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

app.post('/api/auth/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: 'Logged out successfully' });
  });
});

app.listen(3000, async () => {
  console.log('Backend running on port 3000');
  await testDatabaseConnection();
}); 