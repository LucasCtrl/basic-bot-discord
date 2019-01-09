// Need to have this line in 'app.js'
// const webhook = new Discord.Webhook(config.webhook.id, client.webhook.token)

exports.run = (bot, webhook, message) => {
  // Delete the message you send in the channel
  message.delete()

  // Send a message inside a webhook
  // You can use this website for more informations: https://birdie0.github.io/discord-webhooks-guide/
  webhook.send(`Hello i'm a webhook`)
}
