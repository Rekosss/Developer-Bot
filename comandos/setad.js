  module.exports = {
	name: "setad",
	alias: ["setad"],
	descripcion: "confesion set",
	 run: async (client, message, args) => {
        const Discord = require('discord.js');
        const db = require('megadb')
        const ad = new db.crearDB('CanalAd');
        let channel = message.mentions.channels.first() 

        if (!message.member.hasPermission('ADMINISTRATOR'))
        {
          const conf = new Discord.MessageEmbed()
          .setDescription(`No tienes permisos suficientes.`)
          .setColor("RED")
          message.channel.send(conf);
        }else
        if(!channel)
        {
          const confe = new Discord.MessageEmbed()
          .setDescription(`Debes mencionar un canal para ejecutar esta accion.`)
          .setColor("RED")
          message.channel.send(confe);
        }else{
        let embed = new Discord.MessageEmbed()
    .setTitle("⚙ Nueva Configuracion ⚙")
    .setDescription("Canal de anuncios seteado con exito!!!")
    .addField("📂 Canal de los anuncios 📂", channel, true)
    .addField("🖇 Servidor 🖇", message.guild.name, true)
    .addField("📌 ID Servidor 📌", message.guild.id, true)
    .setColor("RED")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(message.author, embed).then(m => {
    ad.establecer(`Ad-${message.guild.id}`, `${channel.id}`)
      
  })}}}
