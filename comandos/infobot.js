module.exports ={
  name: "bot",
  run: async (client, message, args) =>{
              const Discord = require('discord.js')
                  const embed = new Discord.MessageEmbed()
              .setAuthor("Nekrow Hosting", client.user.avatarURL())
              .setThumbnail("https://cdn.discordapp.com/attachments/827398198603153408/870809677145964644/latest.png")
              .addField("Desarrollador", `Nørus#61519`)
              .addField("Servidores", ` ${client.guilds.cache.size}`)
              .addField("Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
              .addField("Lenguaje", " JavaScript")
              .addField("Libreria", " Discord.js v12.2.0")
              message.channel.send(embed)
              }
  }