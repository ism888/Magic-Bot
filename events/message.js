const client = require('../index')
const prefix = require('../config.json').prefix

client.on('message', async message => {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;
          if (!message.guild) return;
          const args = message.content.slice(prefix.length).split(/ +/);
          const cmd = args.shift().toLowerCase();
          if (cmd.length == 0) return;
          let command = client.commands.get(cmd)
          if (!command) command = client.commands.get(client.aliases.get(cmd));
          if (command) command.run(client, message, args)
})