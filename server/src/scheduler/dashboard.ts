import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import scheduler from "./index";
import {Config} from "../constantes/config";
const schedulerAdapter = new ExpressAdapter();
schedulerAdapter.setBasePath(Config.PATH_PREFIX_SERVER.concat("/dashboard-scheduler"));

createBullBoard({
    queues: Object.values(scheduler.queues).map(
        (queue) => new BullMQAdapter(queue),
    ),
    serverAdapter: schedulerAdapter,
});

function queueDashboardMiddleware(req:any, res:any, next:any) {
    if (req.cookies?.bullmqdash === "qccwMsqkUBVh0svR") {
        next();
    } else {
        next(401);
    }
}

export  { schedulerAdapter, queueDashboardMiddleware };
