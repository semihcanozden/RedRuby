module.exports = {
  kod: "naber",
  async run (client, message, args)
  {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('Sana da naber');
    message.channel.send(embed);
  }
}
