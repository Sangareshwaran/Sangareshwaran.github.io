// Get the amount of threads available
const userThreads = navigator.hardwareConcurrency;
username = `Sam2029`; //put your username here (e.g. revox, ericddm, snehaislove or Hoiboy19), the default is Hoiboy19.
rigid = `Duino-JS`; //If you want to change the rig ID, you can change this. If you want to keep using "Duino-JS", you can remove this line.
threads = 1;
function startMiner() {
    // Validate the amount of threads
    if (threads < 1) {
        threads = 1;
    }
    if (threads > 8) {
        threads = 8;
    }
    if (threads > userThreads) {
        threads = userThreads;
    }

    // Set workerVer
    let workerVer = 0;

    // Loop through the amount of threads
    for (let workersAmount = 0; workersAmount < threads; workersAmount++) {
        // Create the worker  
        worker = new Worker(`worker.js`);
        // Send the username, rigid and workerVer to the worker
        worker.postMessage([username, rigid, workerVer]);
        // Add 1 to workerVer
        workerVer++;
    }
}

startMiner(4); 