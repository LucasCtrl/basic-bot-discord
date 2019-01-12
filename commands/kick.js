exports.run = (bot, webhook, message, args) => {
  // Delete the message you send in the channel
  message.delete()

  // If the author of the command can't delete messages, the command does not work
  if (!message.member.hasPermission('KICK_MEMBERS')) {
    message.reply('You are not allowed to do that!').then(m => { setTimeout(() => { m.delete() }, 5000) })
    return
  }

  // Get the user and the reason
  const user = message.mentions.users.first()
  const member = message.guild.member(user)
  const reason = args.slice(1).join(' ')

  if (!member) return message.reply('Please mention an user').then(m => setTimeout(() => { m.delete() }, 5000))

  member.kick(reason)
    .then(() => {
      message.reply(`Successfully kicked ${user.tag}`)
    })
    .catch(err => {
      message.reply('I was unable to kick the member')
      console.error(err)
    })
}
