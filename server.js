const zmq = require("zeromq");

const sock = new zmq.Push();

run();

async function run() {
    
    await sock.bind("tcp://127.0.0.1:7000")
    console.log("El servidor esta listo escuchando en el puerto 7000");
    console.log("Presione cualquier tecla para comenzar a enviar los trabajos...");
    process.stdin.once("data", send)


}

async function send() {

    console.log("Enviando trabajos...");
    
    for (let i = 0; i < 100; i++) {
        await sock.send(`Trabajo ${i}`);
        console.log(`Enviando trabajo ${i}`);

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log("Trabajos enviados");
    process.exit();
}
