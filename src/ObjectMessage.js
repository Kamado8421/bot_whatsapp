const ExtractMessage = require('./functions/abstraction/extrect_message');

async function ObjectMessage(messageBot, prefix) {
    try {
        // Aguardando a resolução da Promessa
        const msg_info = await ExtractMessage(messageBot, prefix);

        // Obtendo informações de msg e seu emissor abstraídas
        const sender = msg_info.from;
        const senderName = msg_info.senderName;
        const participant = msg_info.participant;
        const isBot = msg_info.isBot;
        const isAdmin = msg_info.isAdmin;
        const fromMe = msg_info.fromMe;
        const isRegisted = msg_info.isRegisted;
        const isGroup = msg_info.isGroup;
        const legend = msg_info.legend;
        const isCommand = msg_info.isCommand;

        const isVideo = msg_info.isVideo;
        const isImage = msg_info.isImage;
        const isSticker = msg_info.isSticker;

        const reaction = msg_info.reaction;
        const command = msg_info.command;
        const MESSAGE = msg_info.full_msg;
        const ARGUMENT = msg_info.args;

        let obj = {
            sender: sender,
            senderName: senderName,
            participant: participant,
            isBot: isBot,
            isAdmin: isAdmin,
            fromMe: fromMe,
            isRegisted: isRegisted,
            isGroup: isGroup,
            legend: legend,
            isCommand: isCommand,
            isVideo: isVideo,
            isImage: isImage,
            isSticker: isSticker,
            reaction: reaction,
            command: command,
            MESSAGE: MESSAGE,
            ARGUMENT: ARGUMENT
        };

        //console.log(obj)

        return obj;

    } catch (error) {
        console.error(error);
        return null;
    }
}

async function ObjectInfo(prefix, botName, admin_name, phone_admin, emoji){
    let obj = {
        prefix: prefix,
        botName: botName,
        admin_name: admin_name,
        phone_admin: phone_admin,
        emoji: emoji
    }

    return obj;

}


module.exports = {
    ObjectMessage,
    ObjectInfo
};
