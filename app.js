const Discord = require('discord.js')
const bot = new Discord.Client()

const config = require('./config.json')

bot.on('ready', () => {
  console.log('I\'m online')
})

bot.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('Pong')
  }
})

bot.login(config.token)
