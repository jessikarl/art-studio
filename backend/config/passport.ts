import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import pool from '../models/Database';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  }, 
  async (accessToken, refreshToken, profile, done) => {
    try {
      const googleId = profile.id;
      const email = profile.emails ? profile.emails[0].value : null;
      const fullName = profile.displayName;

      const [rows]: any = await pool.query('SELECT * FROM users WHERE google_id = ?', [googleId]);

      if (rows.length > 0) {
        return done(null, rows[0]);
      } else {
        const [result]: any = await pool.query('INSERT INTO users (google_id, email, full_name) VALUES (?, ?, ?)', [googleId, email, fullName]);
        const newUser = { id: result.insertId, google_id: googleId, email, full_name: fullName };
        return done(null, newUser);
      }
    
    } catch (error) {
        console.error('Error during Google authentication:', error);
      return done(error as Error, undefined);
    }

  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const [rows]: any = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
