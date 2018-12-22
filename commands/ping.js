exports.run = (bot, message) => {
  message.delete()
  message.reply(`Pong ! :ping_pong: ${Math.round(bot.ping)} ms`).catch(console.error)
}
