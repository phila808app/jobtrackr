import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    
});

try{
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected', res.rows[0]);
}catch(error){
    console.log('Database connection error :', error)
    throw error;
}


export default pool;