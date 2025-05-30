const defaultJobOptions = {
    removeOnComplete: {
        age: 60 * 60, // keep up to 1 hour
        count: 128,
    },
    removeOnFail: {
        age: 7 * 24 * 3600, // keep up to 3 days
    },
};
export {
    defaultJobOptions
}
