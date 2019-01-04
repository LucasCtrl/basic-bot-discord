exports.run = (bot, message) => {
  // Delete the message you send in the channel
  message.delete()

  const embed = {
    'color': 14177041, // Color in decimal value, you can use https://www.spycolor.com to convert Hexadecimal color to decimal color, can be a string like '14177041'
    'title': 'This is your title, it can hold 256 characters',
    'url': 'https://discord.js.org/#/docs/main/indev/class/RichEmbed',
    'description': 'This is the main body of text, it can hold 2048 characters. This field support markdown.',
    'author': {
      'name': 'Author Name',
      'url': 'https://discordapp.com/',
      'icon_url': bot.user.avatarURL
    },
    'image': {
      'url': 'https://i.imgur.com/DcgXhfF.png'
    },
    'thumbnail': {
      'url': bot.user.avatarURL
    },
    'footer': {
      'text': 'This is the footer text, it can hold 2048 characters.',
      'icon_url': message.author.avatarURL
    },
    'timestamp': new Date(),
    'fields': [
      {
        'name': 'This is a field title, it can hold 256 characters',
        'value': 'This is a field value, it can hold 1024 characters. This field support markdown.'
      },
      {
        'name': 'Cat',
        'value': 'Hi! :wave:',
        'inline': true
      },
      {
        'name': 'Dog',
        'value': 'hello!',
        'inline': true
      }
    ]
  }
  message.channel.send({ embed })
}
