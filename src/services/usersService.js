import * as usersModel from '../models/usersModel.js';


export const getAll = async () =>{
    const rawData = await usersModel.findAll();
    
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

export const getByEmail = async (email) =>{

    if(!email || email.trim() === ''){
        throw new Error('Email address is required');
    }
    const user = await usersModel.findByEmail(email);

    if (!user){
        return null;
    }
    const {id: userid,email: useremail,username,updated_at,created_at} = user;
    
    return {userid,username,email,updated_at,created_at};
}