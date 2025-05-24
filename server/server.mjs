// Express + Next JS server combination - server.js
import {ParseServer} from "parse-server";
import express from "express";
import next from "next";
import {fileURLToPath} from "url";
import {dirname} from "path";
import ParseDashboard from "parse-dashboard";
import dotenv from "dotenv";
import {Config} from "../src/constantes/config.mjs";


dotenv.config();

const NODE_ENV = Config.NODE_ENV;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const databaseURI = Config.DATABASE_URI, // Connection string for your MongoDB database
    cloud = Config.CLOUD_FOLDER, // Path to your Cloud Code
    appId = Config.APP_ID,
    masterKey = Config.MASTER_KEY, // Keep this key secret!
    javascriptKey = Config.JAVASCRIPT_KEY,
    serverURL = Config.SERVER_URL;
const serverParse = new ParseServer({
    cloud,
    databaseURI,
    appId,
    masterKey,
    javascriptKey,
    serverURL,
    mountPath:Config.PATH_PARSE_URL,
    directAccess: true,
    enforcePrivateUsers: true,
    allowClientClassCreation: true,
    allowExpiredAuthDataToken: false,
    encodeParseObjectInCloudFunction: true,
});

const optionsDashboard = {
    allowInsecureHTTP: true,
    cookieSessionSecret: "test",
};
const dashboard = new ParseDashboard(
    {
        apps: [
            {
                serverURL,
                appId,
                masterKey,
                javascriptKey,
                appName: "Next Parse",
            },
        ],
        users: [
            {
                user: Config.PARSE_DASHBOARD_ID,
                pass: Config.PARSE_DASHBOARD_PASSWORD,
            },
        ],
        trustProxy: 1,
    },
    optionsDashboard
);

// Next.js server
const dev = NODE_ENV !== "production";

const app = next({dev});
const handle = app.getRequestHandler();

const server = express();

// Serve the Parse API on the /parse URL prefix
server.use(Config.PATH_PARSE_URL, serverParse.app);
server.use("/dashboard-api", dashboard);

// Let Next.js handle all other routes
server.use((req, res) => {
    return handle(req, res);
});

// Start both servers
const startServer = async () => {
    try {
        await serverParse.start();
        await app.prepare();

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("Express Server running on http://localhost:3000");
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
