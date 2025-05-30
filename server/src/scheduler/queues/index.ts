import {Queue} from "bullmq";
import {QueueEnum} from "../../enums/queue.enum";
import {connectionRedis} from "../../connection";

const testQueue = new Queue(QueueEnum.test, { connection:connectionRedis });


export default {
    testQueue
}
