
export const notFound = (req,res,next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

export const errorHandler = (err, req,res,next) =>{
    const statusCode  = err.status || res.statusCode || 500;
    console.error(err.stack);

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV !== 'production' && { stack :err.stack},
    });

};