'use strict';

module.exports = function () {
  const TelegramBot = require('node-telegram-bot-api')

  //ENTRE AS ASPAS DEVE SER INSERIDO O TOKEN ADQUIRIDO AO CRIAR UM BOT COM O BotFather
  const TOKEN = ''
  const CHAT_ID = ''
  const bot = new TelegramBot(TOKEN, { polling: true })

  bot.onText(/\/echo (.+)/, (msg, match) => {

    const resp = match[1];

    bot.sendMessage(CHAT_ID, resp);
  });

  var date = new Date;

  bot.on('new_chat_members', (msg) => {

    bot.sendMessage(msg.chat.id, `Olá ${msg.new_chat_participant.first_name}, seja bem vindo ao devBage!! ` +
      ` O objetivo do grupo é juntar todo o povo de TI da cidade e região em um único ` +
      ` lugar indiferente de Instituição/Empresa/etc.` +
      ` Nosso foco aqui é formar uma comunidade de TI para tirar duvidas, compartilhar conhecimento, ` +
      `organizar/divulgar eventos, entre outras coisas. Além disso temos o nosso código de conduta que ` +
      `pode ser acessado no link: https://github.com/devbage/codigo-de-conduta`)
  })

  bot.on('left_chat_member', (msg) => {

    console.log(msg);
    bot.sendMessage(msg.chat.id, `Está cedo para ir embora ${msg.left_chat_participant.first_name}! NÓS VAMOS TE RESGATAR !!! :( `)
  })

}
