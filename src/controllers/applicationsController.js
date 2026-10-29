import * as applicationsService from '../services/applicationsService.js';


export const getAllApplications = async (req,res,next) =>{

    try{
        const applications = await applicationsService.getAll();
        return res.json(applications);
    }catch (error){
        next(error)
    }

};
