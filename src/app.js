import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

//importing route files
import usersRoutes from './routes/users.js';

const app = express();

//middleware

app.use(helmet()); 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//health check enpoint

app.get('/', (req, res) =>{
    res.status(200).json({status: 'OK', timestamp: new Date()});
});

//api routes

app.use('/api/users',usersRoutes);


export default app;
