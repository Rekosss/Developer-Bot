module.exports ={
  name: "membercount",
  run: async (client, message, args) =>{
    const Discord = require('discord.js');
		var server = message.guild;

    const count = new Discord.MessageEmbed()
		.addField(':star_struck: Miembros', server.memberCount)
		.setColor("RED")
		message.channel.send(count)
  }
}