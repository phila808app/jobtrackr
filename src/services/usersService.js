import * as usersModel from '../models/usersModel.js';


export const getAll = async () =>{
    const rawData = await usersModel.findAll();

    console.log(rawData);
    
    const safeUsers = rawData.map(({password_hash, ...user})=>
        user
    );



    const formatted_users = safeUsers.map((user)=>{
        return{
            userid: user.id,
            username: user.username,
            created_at: user.created_at,
            updated_at: user.updated_at
        }
    });
    return formatted_users;
}

// Get user by ID
export const getById = async (id) => {

  const user = await usersModel.findById(id);
  if(!user){

    return null;
  }

    const {id: userid, username,created_at,updated_at } = user;

    return { userid,username,created_at,updated_at

    };
  
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getByEmail = async (email) =>{

    if(!email || email.trim() === ''){
        const error = new Error('Email address is required');
        error.status = 400;
        throw error;
    }

    if (!emailRegex.test(email)){
        const error = new Error('Invalid email format');
        error.status = 400;
        throw error;
    }
    const user = await usersModel.findByEmail(email);

    if (!user){
        return null;
    }
    const {id: userid,email: useremail,username,updated_at,created_at} = user;
    
    return {userid,username,email,updated_at,created_at};
}

export const create = async (userData) =>{

    return usersModel.createUser(userData);
};


export const update = async (id, userData) => {
    return await usersModel.updateUser(id,userData);
}

export const delete_user = async (id) =>{
    return await usersModel.deleteUser(id);
}