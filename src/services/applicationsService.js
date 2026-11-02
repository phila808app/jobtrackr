import * as applicationsModel from '../models/applicationsModel.js';


export const getAll = async () =>{
    const allApplications = await applicationsModel.findAll();

    return allApplications;
}


export const findApplicationById = async (id)=>{
    const application = await applicationsModel.findById(id);

    return application;    
}



export const findByUserId = async (user_id) =>{
    return await applicationsModel.findByUserId(user_id);
    

}

export const createApplication = async (userData)=> {
    return await applicationsModel.createApplication(userData);
    
}


export const updateApplication = async (userData) =>{
    return await applicationsModel.updateApplication(userData);
    
}

export const deleteApplication = async (id) =>{

    return await applicationsModel.deleteApplication(id);


}