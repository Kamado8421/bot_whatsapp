async function getRandom(messages){
    const randomIndex = await Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    return randomMessage;
}

class ErrorMessage {
    constructor(wpp, info){
        this.wpp = wpp;
        this.info = info;
    }

    async isNotRegisted(){

        let command = `${this.info.prefix}cad <username>`

        const messages = [
            `Opss! Verifiquei aqui que você não é registrado em meus serviços! ${command}  pode resolver`,
            `Não o conheço... Parece que você não está em meus registros :( ${command}cad <username> pode resolver.`
        ]

        let msg = getRandom(messages);

        this.wpp.enviar(msg);

    }

    async isNotAdmin(){
        const messages = [

        ]

        let msg = getRandom(messages);

        this.wpp.enviar(msg);

    }
}

module.exports = ErrorMessage;