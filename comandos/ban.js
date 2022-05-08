const Discord = require("discord.js")
module.exports = {
    name: "ban",
    run: async (client, message, args) => {
  
      const embed = new Discord.MessageEmbed()
      .setFooter(`Solicitado por: ${message.author.tag} ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
  
      //SÃ­ el campo estÃ¡ vacÃ­o no ejecutarÃ¡ la siguiente acciÃ³n.
  if (!args[0]) {
      embed.setDescription('Debes mencionar o introducir la id de un usuario.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
  }
  
  //Creamos la variable para poder obtener y buscar miembros.
  let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
  if (!member || member.id == message.author.id) {
      embed.setDescription('Debes mencionar o introducir la id de un usuario.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed)
  }
  
  // SÃ­ no tienes el permiso de BAN_MEMBERS no puede ejecutar la siguiente acciÃ³n.
  if (!message.member.permissions.has('BAN_MEMBERS')) {
      embed.setDescription('No tienes permisos suficientes.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed)
  }
  
  if (message.guild.members.resolve(member.id)) { // retorna un miembro o undefined si no fue encontrado en el servidor-
      // Declaramos SÃ­ el usuario mencionado tiene un nivel jerarquico mayor o igual al autor del baneo.
      if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
          embed.setDescription('Este usuario tiene un rol superior o igual al tuyo.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
          embed.setColor('RED')
          return message.channel.send(embed)
      }
  }
  // Declaramos una variable para almacenar la razÃ³n.
  let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar" //Al no llenar el campo de razÃ³n salta "RazÃ³n no especificada"
  //Cumpliendo con lo anterior procede a realizar el baneo con su respectiva razÃ³n.
  message.guild.members.ban(member.id, { reason: razon })
  embed
      .setThumbnail(member.displayAvatarURL())
      .setTitle('Usuario Baneado')
      .addField(`Usuario`, `<@${member.id}>`)
      .addField('Razon', razon)
      .setColor('RED')
      .setTimestamp()
      .setFooter(`Solicitado por: ${message.author.tag} ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))

  if (!!member.user) member.user.send(embed).catch(e => e);
  message.channel.send(embed)
}}