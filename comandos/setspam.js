const db = require(`megadb`)
const Spams = new db.crearDB('Spams')
const Discord = require("discord.js")
module.exports = {
	name: "setspam",
	descripcion: "setea el canal de spams",
	 run: async (client, message, args) => {
    let channela = message.mentions.channels.first() || client.channels.cache.get(args[0])
    let channel = message.mentions.channels.first() 

        if(!message.guild.me.permissionsIn(message.channel).has('MANAGE_CHANNELS')){
            return message.channel.send('No tengo permisos suficientes.')
          }
          
          if(!message.member.permissionsIn(message.channel).has('ADMINISTRATOR'))
            {
              const conf = new Discord.MessageEmbed()
              .setDescription(`No tienes permisos suficientes.`)
              .setColor("RED")
              message.channel.send(conf);
            }else
          
    if(!channela)
        {
          const confe = new Discord.MessageEmbed()
          .setDescription(`Debes mencionar un canal para ejecutar esta accion.`)
          .setColor("RED")
          message.channel.send(confe);
    }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("⚙ Nueva Configuracion ⚙")
    .setDescription("Canal de spams seteado con exito!!!\nrecuerda que si creas el rol nofilter este sistema no se activara")
    .addField("📂 Canal de los logs 📂", channel, true)
    .addField("🖇 Servidor 🖇", message.guild.name, true)
    .addField("📌 ID Servidor 📌", message.guild.id, true)
    .setColor("RED")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(message.author, embed).then(m => {
    Spams.set(`Spam-${message.guild.id}`, channel.id)
    })}}}