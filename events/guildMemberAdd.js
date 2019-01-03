module.exports = (bot, member) => {
  // This event was executed when an user join a server
  console.log(`${member.user.tag} just join ${member.guild.name}`)
}
