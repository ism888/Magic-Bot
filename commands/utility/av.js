const { MessageEmbed } = require('discord.js')

module.exports = {
          name: 'av',
          aliases: ['avatar', 'pfp'],
          description: "Shows the avatar oof the mentioned user.",
          usage: 'm!av @user',
          run: async (client, message, args) => {
                    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                    if (!mentionedMember) mentionedMember = message.member;

                    const avEmbed = new MessageEmbed()
                              .setDescription(`[**AvatarURL**](${mentionedMember.user.displayAvatarURL()})`)
                              .setTitle(`${mentionedMember.user.tag}'s avatar!`)
                              .setImage(mentionedMember.user.displayAvatarURL({ size: 2048, dynamic: true }))
                              .setAuthor(mentionedMember.user.tag, mentionedMember.user.displayAvatarURL({ dynamic: true }))
                              .setColor('SILVER')
                              .setTimestamp();

                    message.channel.send(avEmbed)

          }
}