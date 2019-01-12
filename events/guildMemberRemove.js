module.exports = (bot, webhook, member) => {
  // This event was executed when an user leave a server
  console.log(`${member.user.tag} just leave ${member.guild.name}`)
}
