module.exports ={
  name: "ad",
  alias:["anuncio"],
  run: async (client, message, args) =>{

        const Discord = require('discord.js');
        const db = require('megadb')
        const ad = new db.crearDB('CanalAd');


    const member = message.member
    let fs = await ad.get(`Ad-${member.guild.id}`);
    if (!message.member.hasPermission('ADMINISTRATOR'))
    {
      const conf = new Discord.MessageEmbed()
      .setDescription(`No tienes permisos suficientes.`)
      .setColor("RED")
      message.channel.send(conf);
    }else
        if(!fs)
        {
          const confe = new Discord.MessageEmbed()
          .setDescription("No hay un canal seleccionado para esta accion, utiliza ``setad``.")
          .setColor("RED")
          message.channel.send(confe);
        }else{

          
        let texto =  args.join(" ")
        let texto1 =  args.join(" ")
        if(!texto1)
        {
          const cm = new Discord.MessageEmbed()
          .setDescription(`Debes escribir titulo.`)
          .setColor("RED")
          message.channel.send(cm);
        }else
        if(!texto)
        {
          const cm = new Discord.MessageEmbed()
          .setDescription(`Debes escribir un mensaje para realizar esta accion.`)
          .setColor("RED")
          message.channel.send(cm);
        }else{

        const embed = new Discord.MessageEmbed()
        .setTitle(texto1)
        .setDescription(texto) 
        .setColor('RED') 
        client.channels.cache.get(fs).send(embed)
        message.delete({timeout:0})

        message.channel.send("**Anuncio enviado correctamente**")

  }}}
}