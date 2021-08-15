const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')
module.exports= {
  kod: "p",
  async run(client, message,args){
    if (!args[0]) return message.channel.send('Lütfen bir kelime giriniz.')
    if (message.member.voice.channel)
    {
      try{
      const connection = await message.member.voice.channel.join()
      const sarki = await player(args.join(" "))
      sarki.play(connection)
      const embed = new MessageEmbed()
      .setDescription(`Video: **[${sarki.title}](${sarki.url})**\n`)
      .setTitle('Şarkı Bulundu: ' + sarki.title)
      .setImage(sarki.thumbnail)
      .addField('Video Açıklaması: ', `\n**${sarki.description}**\n`)
      .addField('Video Süresi: ', `\n**${sarki.time}**\n`)
      .addField('Kanal: ', `\n**[${sarki.channel}](${sarki.channelURL})**\n`)
      .setColor('RANDOM')
      setTimeout(function () {
        message.channel.send(embed)
      },1000)
      sarki.on('finish', () => {
        message.member.voice.channel.leave()
      })
    }
    catch(err)
    {
      message.channel.send('Şarkı Aranıyor.')
    }
  }

    else {
      {
        message.reply('Bir sesli kanala katılın.')
      }
    }
  }
}
