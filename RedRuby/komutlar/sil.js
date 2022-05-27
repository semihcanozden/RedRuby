module.exports = {
  kod: "delete",
  async run (client, message, args)
  {
    if (isNaN(args)) return message.reply('Lütfen bir sayı giriniz.')
    if(args< 2 || args >100) return message.reply('Lütfen 2-100 arasında bir sayı giriniz.')
    message.channel.bulkDelete(Number(args))
    const {MessageEmbed}=require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Başarıyla mesajlar silindi.')
    .setDescription('Silinen mesaj sayısı: ' + args)
    message.channel.send(embed).then(mesaj => {
      setTimeout(function(){
        mesaj.delete()
      },2500);
    })
  }
}
