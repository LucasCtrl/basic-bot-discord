exports.run = (bot, webhook, message) => {
  // Delete the message you send in the channel
  message.delete()

  // Send 'Pong!' and the latency between the bot and the API
  message.reply(`Pong! :ping_pong: ${Math.round(bot.ping)} ms`).catch(console.error)
}
