const zmq = require("zeromq");
const sock = new zmq.Pull();

run();

async function run() {

    await sock.connect("tcp://localhost:7000");
    console.log("El cliente esta listo para recibir trabajos");

    for await (const msg of sock) {
        console.log(`Se recibe el mensaje ${msg.toString()}`);
    }

}
