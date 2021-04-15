const { MessageEmbed } = require('discord.js')
module.exports = {
          name: 'uptime',
          category: 'info',
          aliases: [],
          description: 'Shows the uptime of the bot',
          usage: 'm!uptime',
          run: async (client, message, args) => {
                    const moment = require('moment');
                    require('moment-duration-format');
                    const duration = moment
                              .duration(client.uptime)
                              .format(' D [days], H [hrs], m [mins], s [secs]');

                    const embed = new MessageEmbed()
                              .setTitle('Uptime is: ' + duration)
                              .setTimestamp()
                              .setColor('#738ADB');

                    message.channel.send(embed)
          }
}