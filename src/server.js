//starting the server

import app from './app.js';
import { config } from './config/env.js';

const PORT = config.PORT || 5000;

//start server

const server = app.listen(PORT, ()=>{
    console.log(`Server Running in ${config.NODE_ENV} mode on port ${PORT}` )
})

process.on('SIGTERM', ()=>{
    console.log('Received SIGTERM. closing server...');
    server.close(() =>{
        console.log('Process Terminated');
    });
});

export default server;