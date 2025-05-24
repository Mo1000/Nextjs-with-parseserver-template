import dotenv from "dotenv";

dotenv.config();
const getNodeEnv = () => {
    const npmScript = process.env.npm_lifecycle_script || '';
    const envMatch = npmScript.match(/NODE_ENV=(\w+)/);
    return envMatch ? envMatch[1] : 'development';
};


const PATH_PARSE_URL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL || '/api',
    BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

export const Config = {
    NODE_ENV: getNodeEnv(),
    BACKEND_URL,
    PATH_PARSE_URL,
    DATABASE_URI: process.env.DATABASE_URI || 'mongodb://localhost:27017/mydatabase',
    CLOUD_FOLDER: process.env.CLOUD_FOLDER || '.server/cloud/main.js',
    APP_ID: process.env.NEXT_PUBLIC_APP_ID || 'myAppId',
    MASTER_KEY: process.env.MASTER_KEY || 'myMasterKey',
    JAVASCRIPT_KEY: process.env.NEXT_PUBLIC_JAVASCRIPT_KEY || 'myJavascript',
    SERVER_URL: BACKEND_URL + PATH_PARSE_URL,
    PARSE_DASHBOARD_ID: process.env.PARSE_DASHBOARD_ID || 'myParseDashboardId',
    PARSE_DASHBOARD_PASSWORD: process.env.PARSE_DASHBOARD_PASSWORD || 'myParseDashboardPassword',
}
