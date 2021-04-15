const { MessageEmbed } = require('discord.js')

module.exports = {
  name: '8ball',
  aliases: [],
  description: 'Ask me a question and i will answer it',
  usage: 'm!8ball <QUESTION>',
  run: async(client, message, args) => {

    if (!args[0]) {
            message.channel.send('Please ask a full question!');
        } // return if no question is commenced
        const replies = [
      "As I see it, yes.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don’t count on it.",
      "It is certain.",
      "It is decidedly so.",
      "Most likely.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Outlook good.",
      "Reply hazy, try again.",
      "Signs point to yes.",
      "Very doubtful.",
      "Without a doubt.",
      "Yes.",
      "Yes – definitely.",
      "You may rely on it."
    ]; // random responses

        const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
        const question = args.join(' '); // join the args(Array<string>) to a question string
            const embed = new MessageEmbed() // create embed
                .setTitle('🎱 The 8 Ball says...')
                .setColor('BLACK')
                .setFooter('Magical 8ball')
                .addField('Question:', `\`${question}\``)
                .addField('Answer:', `\`${replies[result]}\``);
            await message.channel.send(embed); // send embed message

  }
}
