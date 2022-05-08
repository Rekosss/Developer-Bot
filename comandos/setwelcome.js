module.exports ={
  name: "setwelcome",
  run: async (client, message, args) =>{
    const Discord = require('discord.js');
    const db = require('megadb')
    const wel_db = new db.crearDB('canalWelcomes');
    const embed = new Discord.MessageEmbed()
    .setFooter(`Solicitado por: ${message.author.tag} ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
let canal = message.guild.channels.cache.find(canal => canal.id == args[0]) || message.mentions.channels.first();
if (!message.member.hasPermission('MANAGE_GUILD')) {
  const conf = new Discord.MessageEmbed()
  .setDescription(`No tienes permisos suficientes.`)
  .setColor("RED")
  message.channel.send(conf);
}
else{
  if(!canal)
        {
          const confe = new Discord.MessageEmbed()
          .setDescription(`Debes mencionar un canal para ejecutar esta accion.`)
          .setColor("RED")
          message.channel.send(confe);
        }else{
  let embed = new Discord.MessageEmbed()
.setTitle("⚙ Nueva Configuracion ⚙")
.setDescription("Canal de Bienvenidas seteado con exito!!!")
.addField("📂 Canal de los Bienvenidas 📂", canal, true)
.addField("🖇 Servidor 🖇", message.guild.name, true)
.addField("📌 ID Servidor 📌", message.guild.id, true)
.setColor("RED")
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL())
message.channel.send(message.author, embed).then(m => {
wel_db.establecer(`Canal-${message.guild.id}`, canal.id)


  })}}}}