const connectBot = require('./src/connection');
const ExtractMessage = require('./src/functions/abstraction/extrect_message');

async function start(){
    const bot = await connectBot();

    // ouvindo messagens de chats
    bot.ev.on('messages.upsert', async (msg) => {

        const messageBot = await msg.messages[0];

        const msg_info = ExtractMessage(msg);

        // obtendo inforacoes de msg e seu emissor abstraída
        const sender = (await msg_info).from;
        const senderName = (await msg_info).senderName;
        const participant = (await msg_info).participant;
        const isBot = (await msg_info).isBot;
        const isAdmin = (await msg_info).isAdmin;
        const fromMe = (await msg_info).fromMe;
        const isRegisted = (await msg_info).senderRegisted;
        const isGroup = (await msg_info).isGroup;
        const isCommand = (await msg_info).isCommand;

        const isVideo = (await msg_info).isVideo;
        const isImage = (await msg_info).isImage;
        const isSticker = (await msg_info).isSticker;

        const reaction = (await msg_info).rection;
        const COMMAND = (await msg_info).command;
        const MESSAGE = (await msg_info).full_msg;
        const ARGUMENT = (await msg_info).args;


        try {
            console.log(messageBot);
        } catch (error) {
            console.error("Ocorreu um erro. Mas será ignorado:\n\n"+ error);
        }
        
    });
}

start();