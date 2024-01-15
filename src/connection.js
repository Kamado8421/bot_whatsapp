const {
    default:makeWASocket, 
    DisconnectReason,
    useMultiFileAuthState
} = require('@whiskeysockets/baileys');


// path da pasta para autenticação de sessão
const AUTH_CONNECTION_PATH = 'assets/qrcode';


async function connectBot(){

    const { state, saveCreds } = await useMultiFileAuthState(AUTH_CONNECTION_PATH);
   
    // configurando bot
    const bot = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        defaultQueryTimeoutMs: undefined
    });

    // tentando reconectar caso percamos a conexão
    bot.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
            console.log('Ocorreu um erro na conexão. Tentaremos reconectar!')
            
            if(shouldReconnect) {
                connectBot();
            }

        } else if(connection === 'open') {
            console.log('Conectado!!');
        }
    });
    
    // salvando sessao
    bot.ev.on('creds.update', saveCreds);
    

    return bot;
}

module.exports = connectBot;