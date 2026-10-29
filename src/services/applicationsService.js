import * as applicationsModel from '../models/applicationsModel.js';


export const getAll = async () =>{
    const allApplications = await applicationsModel.findAll();
    return allApplications;
}
