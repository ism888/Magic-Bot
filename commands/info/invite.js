const { MessageEmbed } = require("discord.js");

module.exports = {
                    name: "invite",
                    description: "To add/invite the bot to your server",
                    usage: "[invite]",
                    aliases: ["inv"],
          run: async  (client, message, args) => {

                    //set the permissions id here (https://discordapi.com/permissions.html)
                    var permissions = 37080128;

                    let invite = new MessageEmbed()
                              .setTitle(`Invite ${client.user.username}`)
                              .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
                              .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
                              .setColor("#CBC3E3")
                    return message.channel.send(invite);
          }
}
