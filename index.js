import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const port = 5000;
const app = express();


// const ns = [
//   { rat: 5, id: 1 },
//   { rat: 4, id: 2 },
//   { rat: 5, id: 3 },
//   { rat: 3, id: 4 },
// ];


// const total = ns.reduce((a, b) => a + b.rat, 0);

// const avg = total/ ns.length;





mongoose.connect('mongodb+srv://abhishekkamati304:abhishek10855@cluster0.8y1oi0l.mongodb.net/Shopy').then((val) => {

  app.listen(port, () => {
    console.log('connected server is running');
  })
});

app.use(cors({
  credentials: true,
  origin: "",
}));
app.use(morgan('dev'));
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  // abortOnLimit: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));






app.get('/', (req, res) => {


  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs server of shopy'
  });
});




app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

