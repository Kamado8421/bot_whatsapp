const connectBot = require('./src/connection');
const ObjectMessage = require("./src/ObjectMessage");
const verifyCommand = require('./src/switch_cmd/VerifyCommand');
const SendMessage = require('./src/functions/messages/SendMessage')
const config_woner = require('./src/functions/request_data/get_data');

const CONFIG = config_woner.config_woner;

const prefix = CONFIG.prefix;
const botName = CONFIG.botName;
const admin_name = CONFIG.admin_name;
const phone_admin = CONFIG.phone_admin;
const emoji = CONFIG.emoji;

async function start() {
    const bot = await connectBot();

    // ouvindo mensagens de chats
    bot.ev.on('messages.upsert', async (msg) => {
        const messageBot = await msg.messages[0];

        const message = await ObjectMessage(messageBot, prefix);
        const wpp = new SendMessage(bot, messageBot);
        verifyCommand(message, wpp);
        
        
    });
}

start();
