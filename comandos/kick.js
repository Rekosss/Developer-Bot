const Discord = require("discord.js")
module.exports = {
    name: "kick",
    run: async (client, message, args) => {
  
      let target = message.mentions.members.first();
      let user = message.mentions.users.first();
      if(!message.member.hasPermission("KICK_MEMBERS")) 
      {
        let embed = new Discord.MessageEmbed()
        .setTitle("**Aviso**")
        .setDescription(`**${message.author.username}, No tienes permisos para usar este comando**`)
        .setColor("RED")
        .setFooter(`Comando solicitado por ${message.author.username}`);
        message.channel.send(embed)
      }
      else if(!args[1]) {
        let embed = new Discord.MessageEmbed()
        .setTitle("**Uso Del Comando**")
        .setDescription(`**${message.author.username} usa &kick <usuario> <razon>**`)
        .setColor("RANDOM")
        .setFooter(`Comando solicitado por ${message.author.username}`);
        message.channel.send(embed)
      }
    
      else if(!target) {
        let embed = new Discord.MessageEmbed()
        .setTitle("**Aviso**")
        .setDescription(`**${message.author.username} Menciona al usuario primero.**`)
        .setColor("RED")
        .setFooter(`Comando solicitado por ${message.author.username}`);
        message.channel.send(embed)
      }
      else if(target.roles.highest.comparePositionTo(message.member.roles.highest) > 0)
      {
       const emo = new Discord.MessageEmbed()
      .setDescription("Esta persona tiene tu mismo o superior rol.")
      .setColor("RED")
      message.channel.send(emo);
      }else if(message.author === user) return message.channel.send("No puedes expulsarte tu mismo.")
else
      {
        let embed = new Discord.MessageEmbed()
        .setTitle("Action: Kick")
        .setDescription(`Kickeado ${target}`)
        .setColor("RED")
        .setFooter(`Kickeado por ${message.author.username}`);
      
        message.channel.send(embed)
        target.kick(args[1]);
      }
    }
  }