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

export const deleteApplication = async (user_id, id) =>{

    const application = await applicationsModel.findApplicationById(id);
    if(!application){
        throw new Error('Application not found');
    }

    if (application.user_id !== user_id ){
        throw new Error('you cannot delete this application'); 
    }

    return await applicationsModel.deleteApplication(id);


}