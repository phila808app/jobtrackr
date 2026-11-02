import * as applicationsService from '../services/applicationsService.js';


export const getAllApplications = async (req,res,next) =>{

    try{
        const applications = await applicationsService.getAll();
        return res.json(applications);
    }catch (error){
        next(error)
    }

};


export const findApplicationById = async (req,res,next) =>{

    try{
        const application = await applicationsService.findApplicationById(req.params.id);
        if (!application){
            return res.status(404).json({
                message: 'Application not found'
            })
        }
        return res.json(application);

    }catch(error){
        next(error)
    }
};

export const findByUserId = async (req,res,next) =>{
   
    try{
        const {user_id} = req.params;

        const application = await applicationsService.findByUserId(user_id);

        if (!application || application.length  === 0){
            return res.status(404).json({
                message: 'Application not found'
            })
        }

        return res.json(application);
    }catch(error){
        next(error)
    }
};

export const createApplication = async (req,res,next) =>{

    try {
        
         const userData = {
      user_id: req.body.user_id,   // or req.user.id if you have auth
      company: req.body.company,
      position: req.body.position,
    };

        const application = await applicationsService.createApplication(userData);
        return res.json(application);
    }catch (error){
        next(error)
    }
};

export const updateApplication = async (req,res,next) =>{

    try{
            const userData = {
            id: req.params.id,
            user_id: req.body.user_id,   
            company: req.body.company,
            position: req.body.position,
            status: req.body.status,
            notes: req.body.notes,
            };

        const updated =  await applicationsService.updateApplication(userData);
        return res.json(updated)

    }catch(error){
        next(error)

    }
}

export const deleteApplication = async (req,res,next) =>{

    try{
        const deleted = await applicationsService.deleteApplication(req.params.id);
        if (!deleted) {
            return res.status(404).json({message: 'Application not found'})
        }
        res.status(204).send();
    }catch(error){
        next(error)
    }
}
