import pool from '../db/database.js';

export const findAll = async () =>{

    const {rows} = await pool.query(`
        SELECT * FROM applications ORDER BY id`);
        return rows;

};


export const findByUserId = async (userid) =>{

    const {rows} = await pool.query(`
        SELECT * FROM applications WHERE userid = $1`,[userid]);
        return rows[0] || null;
};


export const findById = async (id) =>{

}

export const createApplication = async (userData) =>{}

export const updateApplication = async (userData) =>{}

export const deleteApplication = async (id) =>{}
