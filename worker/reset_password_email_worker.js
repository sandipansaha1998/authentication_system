const queue = require('../config/kue');
const resetPasswordMailer = require('../mailers/resetPassword');
console.log('inside worker')
queue.process('emails',function (job,done) {

    resetPasswordMailer.resetPasswordLink(job.data);
    done();
    console.log("Worker is processing a job")
  })