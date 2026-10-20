import 'dotenv/config';

export const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT,10) || 5000,

    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 5432,
    DB_NAME: process.env.DB_NAME || 'jobtrackr',
    DB_USER: process.env.DB_USER || 'jobtrackr',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
}
