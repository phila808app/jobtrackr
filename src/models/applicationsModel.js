import pool from '../db/database.js';

export const findAll = async () =>{

    const {rows} = await pool.query(`
        SELECT * FROM applications ORDER BY id`);
        return rows;

};


export const findByUserId = async (user_id) =>{

    const {rows} = await pool.query(`
        SELECT * FROM applications WHERE user_id = $1`,[user_id]);
        return rows;
};


export const findById = async (id) =>{

    const {rows} = await pool.query(`
        SELECT * FROM applications WHERE id = $1`,[id]);
        return rows[0] || null;

}

export const createApplication = async (userData) =>{
    
    const {rows} = await pool.query(`
        INSERT INTO applications (user_id,company,position)
        VALUES ($1,$2,$3)
        RETURNING id, user_id, company, position, status, date_applied, notes, created_at, updated_at`,
    [userData.user_id, userData.company, userData.position]);
    return rows[0];      
};

export const updateApplication = async (userData) =>{
    const {rows} = await pool.query(`
        UPDATE applications
        SET company = $1, 
        position = $2, 
        status = $3,
        notes = $4, 
        updated_at = NOW()
        
        WHERE id = $5 AND user_id = $6
        RETURNING id,user_id, company, position, status, date_applied, notes, created_at, updated_at`,
        [userData.company, userData.position, userData.status, userData.notes, userData.id, userData.user_id]
    );
    return rows[0];
};

export const deleteApplication = async (id) =>{
    const result = await pool.query(`
        DELETE FROM applications WHERE id = $1`,[id]
    );
    return result.rowCount > 0;
};
