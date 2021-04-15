const client = require('../index')
const prefix = require('../config.json').prefix

client.on('ready', () => {
          let serversIn = client.guilds.cache.size
          client.user.setActivity(`${serversIn} servers | ${prefix}help`, {type: 'WATCHING'})
          console.log(`${client.user.username} ✅`)
})