module.exports = {
  name: "server",
  alias: "infoserver",
  descripcion: "Comandos",
  run: async (client, message, args) => {

  const Discord = require("discord.js")
  var server = message.guild;
  const serverr = message.channel.guild;
  let guild = message.guild;
  const embed = new Discord.MessageEmbed()
  .setThumbnail(server.iconURL({dynamic: true}))
  .setAuthor(server.name, server.iconURL({dynamic: true}))
  .addField('ID', server.id, true)
  .addField('Region', server.region, true)
  .addField('Creado el', `${
    guild.createdAt.toDateString().split(" ")[2]
  }/${guild.createdAt.toDateString().split(" ")[1]}/${
    guild.createdAt.toDateString().split(" ")[3]
  }`, true)
  .addField("Owner/Dueño del servidor", "<@!" + serverr.ownerID + ">")
  .addField('Miembros', server.memberCount, true)
  .addField('Roles', `${message.guild.roles.cache.size}`, true)
  .setColor("RED")
      
  message.channel.send(embed);
}}