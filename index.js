const cluster = require('cluster');
const { startBot } = require('./bot');

if (cluster.isMaster) {
    cluster.fork();

    cluster.on('exit', function(worker, code, signal) {
        console.log("Le Bot a rédémarré !");

        cluster.fork();
    });
}

if (cluster.isWorker) {
    startBot();
}