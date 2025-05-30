import Redis from "ioredis";
import {Config} from "../constantes/config";

const connectionRedis = new Redis(
    Config.REDIS_PORT,
    Config.REDIS_HOST,
    {
        password: Config.REDIS_PASSWORD,
        maxRetriesPerRequest: null,
    },
)


export {
    connectionRedis
}
