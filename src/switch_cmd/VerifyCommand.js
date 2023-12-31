async function verifyCommand(msg, wpp){

    if(!msg.isCommand) return;

    switch(msg.command){
        case 'menu':
            console.log("Seu menu!");
            break;
        case 'ping':
            wpp.enviar("Pong");
            break;
        default:
            console.log("Comando Inválido!")
    }
} 

module.exports = verifyCommand;