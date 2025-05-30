import {Worker } from "bullmq";

import testJob from "../job/test";
import {WorkerEnum} from "../../enums/worker.enum";
import {connectionRedis} from "../../connection";


const testWorker = new Worker(WorkerEnum.test, testJob, {
    connection: connectionRedis,
});


export default {
    testWorker
}
