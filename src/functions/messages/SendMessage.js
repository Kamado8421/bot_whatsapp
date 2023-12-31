class SendMessage {
    constructor(bot, messageBot){
        this.bot = bot;
        this.messageBot = messageBot;
        this.from = messageBot.key.remoteJid;
    }

    async enviar(msg){
        await this.bot.sendMessage(this.from, {text: msg}, {quoted: this.messageBot})
    }

    async reagir(emoji){
        const reactionMessage = {
            react: {
                text: emoji, 
                key: this.messageBot.key
            }
        }
        
        await sock.sendMessage(id, reactionMessage)
    }
}

module.exports = SendMessage;