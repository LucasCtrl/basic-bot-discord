exports.run = async (bot, webhook, message, args) => {
  // Delete the message you send in the channel
  await message.delete()

  // If the author of the command can't delete messages, the command does not work
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    message.reply('You are not allowed to do that!').then(m => { setTimeout(() => { m.delete() }, 5000) })
    return
  }

  // Get amount of message to delete and user
  const user = message.mentions.users.first()
  const amount = parseInt(args[0])

  // Help message
  const embed = {
    'color': 11342935,
    'title': 'Purge command',
    'description': 'Allow you to delete a list of messages',
    'fields': [
      {
        'name': 'Usage',
        'value': bot.config.prefix + 'purge <AMOUNT> <MENTION>',
        'inline': false
      },
      {
        'name': 'Informations',
        'value': '`<AMOUNT>` Number of messages to delete (between 1 and 100) **required**\n`<MENTION>` Mention a person to delete only their messages **optional**',
        'inline': false
      }
    ]
  }
  // If amount is not indicated, send the help message
  if (!amount) return message.channel.send({ embed })

  // Fetch 100 messages (will be filtered and lowered up to max amount requested)
  await message.channel.fetchMessages({
    limit: 100
  }).then((messages, messageToDelete) => {
    // Fetch all message to delete (with amount)
    messageToDelete = messages.array().slice(0, amount)
    // If an user was provided, delete all message (with amount)
    if (user) {
      const filterBy = user ? user.id : bot.user.id
      messageToDelete = messages.filter(m => m.author.id === filterBy).array().slice(0, amount)
    }
    // With no users, delete all message (with amount)
    message.channel.bulkDelete(messageToDelete).catch(error => console.log(error.stack))
  })
}
