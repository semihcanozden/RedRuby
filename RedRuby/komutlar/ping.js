module.exports = {
  kod:"ping",
  async run (client, message,args)
  {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('PING OLCULUYOR')
    .addField('BotPingi: ', client.ws.ping + ' ms')
    .addField('Mesaj gecikme süresi: ', `${Date.now() - message.createdTimestamp} ms`)
    message.channel.send(embed)
  }
}
