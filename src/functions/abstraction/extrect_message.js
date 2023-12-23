class MessageAbstract {
    constructor(senderName, fromMe, args, participant, from, isImage){
        this.senderName = senderName;
        this.fromMe = fromMe;
        this.args = args;
        this.participant = participant;
        this.from = from;
        this.isImage = isImage;

        this.isGroup = null;
        this.isAdmin = null;
        this.isSticker = null;
        this.isVideo = null;
        this.senderRegisted = null;
        this.full_msg = null;
        this.rection = null;
        this.isCommand = null;
        this.command = null;
        this.isBot = this.fromMe ? true : false;
    }
}

async function ExtractMessage(msg){
    const from = msg.key.remoteJid;
    const fromMe = msg.key.fromMe;
    const participant = msg.key.participant;
    const pushName = msg.pushName;
    const args = msg?.message?.ExtendedargsMessage?.args;

    const message_abstracted = new MessageAbstract(pushName, fromMe, args, participant, from, false);

    return message_abstracted;
}

module.exports = ExtractMessage;