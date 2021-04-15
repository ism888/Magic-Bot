module.exports = {
          name: 'say',
          aliases: ['tell'],
          description: "Repeats what you say",
          usage: 'm!say <text>',
          run: async (client, message, args) => {
                    const content = args.join(" ")
                    if (!content) return message.reply('Please tell something for me to say!')

                    message.channel.send('**' + message.author.username + ' says: **' + content)
          }
}