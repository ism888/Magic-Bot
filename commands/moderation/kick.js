const { MessageEmbed } = require('discord.js')
module.exports = {
          name: 'kick',
          category: 'moderation',
          aliases: [],
          description: 'Kicks the mentioned member',
          usage: 'm!kick @user <reason>',
          run: async (client, message, args) => {
                    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have permission to use this command. \`KICK_MEMBERS\`');
                    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have permission to kick members. ')

                    const mentionedMember = message.mentions.members.first();
                    let reason = args.slice(1).join(" ");
                    if (!reason) reason = "No reason was provided";
                    const kickEmbed = new MessageEmbed()
                              .setTitle(`You were kicked from ${message.guild.name}`)
                              .setDescription(`Reason: ${reason}`)
                              .setColor('#f02711')
                              .setTimestamp()
                              .setFooter(client.user.tag, client.user.displayAvatarURL());

                    // :kick @user reason
                    if (!args[0]) return message.channel.send('You need to state a user to kick. \`m!kick <@user> <reason>\` ');
                    if (!mentionedMember) return message.channel.send('User mentioned is not in the server. ');
                    if (!mentionedMember.kickable) return message.channel.send('I Cannot kick that member. ');
                    try {
                              await mentionedMember.send(kickEmbed);
                    } catch (err) {
                              console.log('I was unable to dm the member. ' + err);
                    }
                    try {
                              await mentionedMember.kick(reason);
                    } catch (err) {
                              console.log(err);
                              return message.channel.send('I was unable to kick the user. ');
                    }
          }
}