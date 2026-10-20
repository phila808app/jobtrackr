import pool from '../db/database.js';

const user_details = 'id,username,email,created_at,updated_at';

// Find all users
export const findAll = async () => {
  const { rows } = await pool.query('SELECT id, username, email, created_at, updated_at FROM users ORDER BY id');
  return rows;
};

export const findById = async(id) =>{
  const { rows } = await pool.query('SELECT id, username, email, created_at, updated_at FROM users WHERE id = $1',[id]);
  return rows[0] || null;
};

export const findByEmail = async(email) =>{
    const {rows} = await pool.query(`SELECT ${user_details} FROM users WHERE email = $1`, [email]);
    return rows;
}