import * as usersModel from '../models/usersModel.js';


export const getAll = async () =>{
    return await usersModel.findAll();
}

// Get user by ID
export const getById = async (id) => {
  return await usersModel.findById(id);
};

export const getByEmail = async (email) =>{
    return await usersModel.findByEmail(email);
}