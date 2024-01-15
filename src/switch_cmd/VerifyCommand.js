async function verifyCommand(msg, wpp, {prefix, botName, admin_name, phone_admin, emoji}, send_error){

    try {

        if(!msg.isCommand) return;
        if(!msg.isRegisted) return send_error.isNotRegisted();

        switch(msg.command){
            case 'menu':
                console.log("Seu menu!");
                break;
            case 'ping':
                wpp.enviar("🏓Pong - "+admin_name);
                break;
            default:
                console.log("Comando Inválido!");

        }
        
    } catch (error) {
        console.error(error)
    }
} 

module.exports = verifyCommand;