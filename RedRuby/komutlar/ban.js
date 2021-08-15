module.exports= {
  kod: "b",
  async run(client, message,args){
    if (!message.guild) return;
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban()
            .then(() => {
            const log = message.guild.channels.cache.get("872152868029857832")
             log.send(`${user.tag} kişisi banlanmıştır.`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
        } else {
          message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor.");
        }
      } else {
        message.reply("Yasaklanacak kişiyi yazmadın.");
      }
  }
}
