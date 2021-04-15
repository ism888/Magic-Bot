const { MessageEmbed } = require('discord.js')
module.exports = {
          name: 'ban',
          category: 'moderation',
          aliases: [],
          description: 'Bans the mentioned member',
          usage: 'm!ban @user <reason>',
          run: async (client, message, args) => {
                    //Check perms
                    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have permission to use this command. \`BAN_MEMBERS\`');
                    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have permission to ban members. ')

                    // Variables
                    let reason = args.slice(1).join(" ");
                    const mentionedMember = message.mentions.members.first();

                    //Input Checking
                    if (!reason) reason = 'No reason provided. ';
                    if (!args[0]) return message.channel.send('You must mention a user to ban. \`!ban <@user> <reason> \` ');
                    if (!mentionedMember) return message.channel.send('User mentioned is not in the server. ');
                    if (!mentionedMember.bannable) return message.channel.send('I Cannot ban that member. ')


                    //Executing
                    const banEmbed = new MessageEmbed()
                              .setTitle(`You were banned from ${message.guild.name}`)
                              .setDescription(`Reason: ${reason}`)
                              .setColor('#f02711')
                              .setTimestamp()
                              .setFooter(client.user.tag, client.user.displayAvatarURL());

                    await mentionedMember.send(banEmbed).catch(err => console.log(err));
                    await mentionedMember.ban({
                              days: 7,
                              reason: reason
                    }).catch(err => console.log(err)).then(() => message.channel.send('Successfully banned ' + mentionedMember.user.tag));
          }
}