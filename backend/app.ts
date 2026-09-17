import express from 'express';
import cors from 'cors';
import checkoutRoutes from './routes/checkoutRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
}));

app.use(express.json());

app.use('/api/checkout', checkoutRoutes);

app.listen(3000, () => {
  console.log('Backend running on port 3000');
}); 