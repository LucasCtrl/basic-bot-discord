// Require all modules needed for the bot
const Discord = require('discord.js')
const Enmap = require('enmap')
const fs = require('fs')

const config = require('./config.json')

// Create an instance of a Discord client
const bot = new Discord.Client()

// Pass data through bot
bot.config = config
bot.commands = new Enmap()

// Call all events in ./events folder
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    const event = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    bot.on(eventName, event.bind(null, bot))
  })
})

// Call all commands in ./commands folder
fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let props = require(`./commands/${file}`)
    let commandName = file.split('.')[0]
    // console.log(`Attempting to load command ${commandName}`)
    bot.commands.set(commandName, props)
  })
})

// Log your bot using your bot token
bot.login(config.token)
