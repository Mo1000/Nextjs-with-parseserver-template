import { QueueEvents} from "bullmq";
import {QueueEnum} from "../../enums/queue.enum";
import {connectionRedis} from "../../connection";

const testEvent = new QueueEvents(QueueEnum.test, {
    connection:connectionRedis,
});

export default {
    testEvent
}
