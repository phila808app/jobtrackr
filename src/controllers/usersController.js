import * as usersService from '../services/usersService.js';

export const getAllUsers = async (req,res,next) =>{
    try{
        const users = await usersService.getAll();
        return res.json(users);
    } catch (error){
        next(error)
    }
};


export const getUserById = async(req,res,next) =>{
    try{
        const user = await usersService.getById(req.params.id);
        res.json(user);
    }catch (error){
        next(error);
    }
};

export const getUserByEmail = async(req,res,next) =>{
    try{
        const userEmail = await usersService.getByEmail(req.params.email);
        return res.json(userEmail);
    }catch (error){
        next(error);
    }
};

