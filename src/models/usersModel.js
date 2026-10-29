import pool from '../db/database.js';

const user_details = 'id,username,created_at,updated_at';

// Find all users
export const findAll = async () => {
  const { rows } = await pool.query('SELECT * FROM users ORDER BY id');
  return rows;
};

export const findById = async(id) =>{
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1',[id]);
  return rows[0] || null;
};

export const findByEmail = async(email) =>{
    const {rows} = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return rows[0] || null;
};

export const createUser = async (userData) =>{

   const {rows} =  await pool.query(
    `INSERT INTO users(username,email,password_hash)
      VALUES ($1,$2,$3)
      RETURNING id,username,email,created_at,updated_at`,
      [userData.username, userData.email, userData.password_hash]
    ); 
      return rows[0]; 
};

export const updateUser = async (id, userData) =>{

  const {rows} = await pool.query(
    `UPDATE users
    SET username= $1, email = $2, password_hash = $3, updated_at = NOW()
    WHERE id = $4
    RETURNING id, username, email, created_at, updated_at`,
    [userData.username, userData.email, userData.password_hash, id]
  );
  return rows[0];
}


export const deleteUser =  async (id) =>{
  const result = await pool.query(
    `DELETE FROM users WHERE id = $1`, [id]
  );
  return result.rowCount > 0;
};