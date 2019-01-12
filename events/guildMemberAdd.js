module.exports = (bot, webhook, member) => {
  // This event was executed when an user join a server
  console.log(member)
  console.log(`${member.user.tag} just join ${member.guild.name}`)
}
