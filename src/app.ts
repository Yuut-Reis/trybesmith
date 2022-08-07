import express from 'express';
import productRoute from './routes/product.route';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
export default app;
