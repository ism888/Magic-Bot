module.exports = {
          name: 'test',
          aliases: ['tt'],
          description: "The test commad",
          usage: 'm!test',
          run: async (client, message, args) => {
                    message.reply('This command works!')
          }
}