const Discord = require(`discord.js`);
module.exports = {
	name: "web",
	descripcion: "Comandos",
	 run: async (client, message, args) => {
     const asdasd = new Discord.MessageEmbed()
  
    .setTitle("Web")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
    .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
    .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    .setColor("RED")
    .addField("(proximamente)", true)
    MessageChannel.send(asdasd)
     }}