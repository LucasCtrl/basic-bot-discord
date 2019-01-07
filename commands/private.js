exports.run = (bot, message) => {
  // Delete the message you send in the channel
  message.delete()

  // Send a basic message, then delete it after 5 seconds
  message.reply('You receive a private message').then(m => { setTimeout(() => { m.delete() }, 5000) })

  // Send a private message
  message.author.send('This is a private message')
}
