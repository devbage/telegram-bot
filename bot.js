'use strict';

module.exports = function()
{
    const TelegramBot = require( `node-telegram-bot-api` )

    const TOKEN = `INSIRA AQUI O TOKEN` //ENTRE AS ASPAS DEVE SER INSERIDO O TOKEN ADQUIRIDO AO CRIAR UM BOT COM O BotFather
    const bot = new TelegramBot( TOKEN, { polling: true } )

    
      bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1]; 
      
        bot.sendMessage(chatId, resp);
      });

      var date = new Date;
      console.log(date.toString());//Exibe no console todo o retorno de Date
      
      //Evento que pega o texto '/hora' no chat e retorna uma resposta/
      bot.onText(/\/hora/, (msg) => {
        const chatId = msg.chat.id;
        const resp = date.toString();
      
        bot.sendMessage(chatId, resp);
      });

    //Ao entrar um novo membro no grupo captura o primeiro nome e junta em uma mensagem de boas vindas
    bot.on('new_chat_members', (msg) => {
        bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, seja bem vindo ao devBage!!
    O objetivo do grupo é juntar todo o povo de TI da cidade e região em um único lugar indiferente de Instituição/Empresa/etc.
    Nosso foco aqui é formar uma comunidade de TI para tirar duvidas, compartilhar conhecimento, organizar/divulgar eventos, entre outras coisas. Além disso temos o nosso código de conduta que pode ser acessado no link: 
    https://github.com/devbage/codigo-de-conduta`)
    })

    //Ao sair um membro do grupo, captura o primeiro nome e junta em uma mensagem de despedida
    bot.on('left_chat_member', (msg) => {
        bot.sendMessage(msg.chat.id, `Está cedo para ir embora ${msg.from.first_name}! :( `)
    })

}