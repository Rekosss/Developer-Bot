const Discord = require("discord.js");
  module.exports = {
      name: "unban",
      alias: ["ub"],
      run: async (client, message, args) => {
  
          if(!message.member.hasPermission("BAN_MEMBERS"))
          return message.channel.send('No tienes permisos suficientes.')
  
          if(!message.guild.me.hasPermission("BAN_MEMBERS"))
          return message.channel.send('No tengo el permiso para banear miembros.')
  
          let userID = args[0]
          if(!userID)return message.channel.send('Porfavor, ingresa una id valida')
  
  
  
  message.guild.fetchBans().then(bans=> { 
      if(bans.size == 0) return message.channel.send("No hay ningun ban en este servidor.")
  let unbanuser = bans.find(b => b.user.id == userID)
  if(!unbanuser) return message.channel.send("Esta persona no esta baneada")
  message.guild.members.unban(unbanuser.user)
  const embedunban = new Discord.MessageEmbed()
          .setTitle(`Usuario Desbaneado`)
          .addField(`Moderador:`, `${message.author.username}`)
          .addField(`Miembro:`, `<@${userID}>`)
          .setColor("RED")
          message.channel.send(embedunban);
              }
          
      
  )}
  }