import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    
    
    
});

const res = await pool.query('SELECT NOW()');
console.log(res.rows[0]);

await pool.end();