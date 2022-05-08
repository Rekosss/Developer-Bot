module.exports ={
  name: "channel",
  run: async (client, message, args) =>{
    const Discord = require('discord.js')
  let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  if(!channel) return message.channel.send(":clown: | ¡Especifica un canal!")
  const cha = new Discord.MessageEmbed()
  .addField(`:feather: Nombre:`, `- ${channel.name}`)
  .addField(`:feather: Mencion:`, `- \`${channel}\``)
  .addField(`:feather: ID:`, `- ${channel.id}`)
  .addField(`:feather: Tipo`, `- ${channel.type}`)
  .addField(`:feather: ¿NSFW?`, `- ${channel.nsfw}`)
  .addField(`:feather: Esta en:`, `- ${channel.parent.name}`)
  .setColor("RED");
  message.channel.send(cha);
  }
}