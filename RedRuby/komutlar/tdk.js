module.exports = {
  kod: "tdk",
  async run(client, message, args)
  {
    const tdk = require('trsozluk')
    const { MessageEmbed } = require('discord.js')
    if(!args[0]) return message.reply("Lütfen TDK'da aratmak istediğiniz kelimeyi girin.")
    try
    {
      const kelime = await tdk(args[0])
      const embed = new MessageEmbed()
      .setDescription(args[0] + ' kelimesinin bilgileri.')
      .addField('Anlam: ', kelime.anlam)
      .addField('İkincil anlam: ', kelime.anlam2)
      .addField('Kelimenin lisanı: ', kelime.lisan)
      .addField('Kelime kullanımı: ', kelime.ornek)
      .addField('Kelimenin atasözü kullanımı: ', kelime.atasozu)
      .addField('Kelime çoğul mu?: ', kelime.cogul)
      .addField('Kelime özel mi?: ', kelime.ozel)
      .addField('Kelimenin telaffuzu: ', kelime.telaffuz)
      .setColor('RANDOM')
      message.channel.send(embed)
    }
    catch(e)
    {
      message.channel.send('Yazdığınız kelimeyi sözlükte bulamadık.')
    }
  }
}
