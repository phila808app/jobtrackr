import * as usersService from '../services/usersService.js';

export const getAllUsers = async (req,res,next) =>{
    try{
        const {email} =  req.query;

        if (email){
            const user = await usersService.getByEmail(req.query.email);
            if(!user){
                return res.status(404).json({
                    message: 'User not found'
                });
            }
            return res.json(user)

        }

        const users = await usersService.getAll();
        return res.json(users);
        } catch (error){
        next(error)
    }
};


export const getUserById = async(req,res,next) =>{
    try{
        const user = await usersService.getById(req.params.id);
        if(!user){
            return res.status(404).json({
                message: 'Userid not found'
            })
        }
        res.json(user);
    }catch (error){
        next(error);
    }
};



