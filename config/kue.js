const kue = require('kue');
// creates a priority job queue
const queue = kue.createQueue();
module.exports = queue;