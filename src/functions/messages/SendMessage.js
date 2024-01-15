class SendMessage {
    constructor(bot, messageBot, info){
        this.bot = bot;
        this.messageBot = messageBot;
        this.info = info;
        this.from = messageBot.key.remoteJid;
    }

    async enviar(msg){
        await this.bot.sendMessage(this.from, {text: `${this.info.emoji} ${msg}`}, {quoted: this.messageBot})
    }

    async enviar_verificado(msg){
        await this.bot.sendMessage(this.from, {text: `${this.info.emoji} ${msg}`}, {quoted: this.verifyed})
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