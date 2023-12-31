class MessageAbstract {
    constructor(isRegisted, senderName, fromMe, args, participant, from, isImage, isGroup, isAdmin, isSticker, isVideo, reaction, isCommand, command, legend) {
        this.isRegisted = isRegisted;   
        this.senderName = senderName;
        this.fromMe = fromMe;
        this.args = args;
        this.participant = participant;
        this.from = from;
        this.isImage = isImage;
        this.isGroup = isGroup;
        this.isAdmin = isAdmin;
        this.isSticker = isSticker;
        this.isVideo = isVideo;
        this.reaction = reaction;
        this.isCommand = isCommand;
        this.command = command;
        this.legend = legend
        this.isBot = fromMe;
    }
}

function isMessageType(msg, type) {
    return msg?.message && msg.message[type] ? true : false;
}

function extractLegend(msg) {
    return isMessageType(msg, 'videoMessage') ? msg.message.videoMessage.caption :
           isMessageType(msg, 'imageMessage') ? msg.message.imageMessage.caption :
           null;
}

async function ExtractMessage(msg, prefix) {
    const from = msg.key.remoteJid;
    const fromMe = msg?.key?.fromMe;
    const participant = msg?.key?.participant;
    const pushName = msg?.pushName;
    const args = msg?.message?.extendedTextMessage?.text;

    const isGroup = from.endsWith("@g.us");
    const isAdmin = false;
    const isSticker = isMessageType(msg, 'stickerMessage');
    const isVideo = isMessageType(msg, 'videoMessage');
    const isImage = isMessageType(msg, 'imageMessage');
    const reaction = msg?.message?.reactionMessage?.text;

    const legend = extractLegend(msg);

    const words = args ? args.split(" ") : [];
    const legends = legend ? legend.split(" ") : [];

    const isCommand = (words.length > 0 && words[0].startsWith(prefix)) || (legends.length > 0 && legends[0].startsWith(prefix));
    const command = isCommand ? (words.length > 0 ? words[0].slice(prefix.length) : legends[0].slice(prefix.length)) : null;

    const message_abstracted = new MessageAbstract(true, pushName, fromMe, args, participant, from, isImage, isGroup, isAdmin, isSticker, isVideo, reaction, isCommand, command, legend);

    return message_abstracted;
}

module.exports = ExtractMessage;
