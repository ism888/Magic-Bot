const { MessageEmbed } = require('discord.js');

module.exports = {
          name: 'rickroll',
          aliases: ['rr'],
          description: "Rick roll someone!",
          usage: 'm!rickrollhug @user',
          run: async (client, message, args) => {
                    const userToRoll = message.mentions.members.first()
                    if (!userToRoll) return message.reply('Mention a user to Rickroll! ');
                    const rollEmbed = new MessageEmbed()
                              .setTitle(`${message.author.username} rick rolls <@${userToRoll.user.id}>!`)
                              .setImage('https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif');
                    message.channel.send(userToRoll, rollEmbed);
          }
}