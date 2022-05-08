module.exports ={
  name: "8ball",
  run: async (client, message, args) =>{

    const Discord = require("discord.js");

    var rpts = ["Si", "No", "Tal vez", "Nose", "¡Claro!", "Si <3", "No >:("];

    let pregunt = args.slice(1).join(' ');
    if(!pregunt)
            {
          const conf = new Discord.MessageEmbed()
          .setDescription(`Debes ingresar una pregunta.`)
          .setColor("RED")
          message.channel.send(conf);
        }else{
	
	const embed = new Discord.MessageEmbed()
		.setTitle('Command | 8Ball')
    .setColor("RED")
		.setThumbnail(message.author.avatarURL)
		.addField('Su pregunta es:', args, true)
		.addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
	message.channel.send(embed)
  }}
}