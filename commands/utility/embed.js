const { MessageEmbed } = require('discord.js')

module.exports = {
          name: 'embed',
          aliases: ['tte'],
          description: "Makes your text an embed",
          usage: 'm!embed <color> <text>',
          run: async (client, message, args) => {
                    let color = args[0]
                    if(!color) return message.reply('You did not state the color of the embed. ')
                    let text = args.slice(1).join(" ")
                    if (!text) return message.reply('You did not state the text of the embed. ')

                    const embed = new MessageEmbed()
                     .setTitle(text)
                     .setColor(color);

                     message.channel.send(embed)
          }
}