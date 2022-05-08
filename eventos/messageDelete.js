const Discord = require('discord.js')
const db = require('megadb')
const logs = new db.crearDB('Logs')
module.exports = {
	name: 'messageDelete',
	run: async(message, client) => {
    if(message.author.bot) return;
        client.snipes.set(message.channel.id, {
          content: message.content,
          delete: message.author,
          canal: message.channel,
          member: message.member,
          image: message.attachments.first() ? message.attachments.first().proxyURL : null
        })
let a = await 
logs.obtener(`Log-${message.guild.id}`) 
 let canal = client.channels.cache.get(a);
 if(!canal) return;
 if(message.content) {
  const embed = new Discord.MessageEmbed()
  .setTitle("Mensaje Eliminado")
  .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
  .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
  .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
  .setTimestamp()
  .setColor("RED")
  .addField("Mensaje", message.content, true)
  .addField("Canal:", message.channel, true);
  canal.send(embed)
 }
if(message.attachments.size > 0){//si hay mas de 0 imagenes hara lo siguiente
  let Attachs = (message.attachments).array()//obtiene un array de todas las imagenes
  Attachs.forEach(m => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Imagen Eliminada")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
    .setThumbnail(message.author.avatarURL)
    .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
    .setColor("RED")
    .addField("Canal:", message.channel, true)
    .setImage(m.proxyURL)//consigue la url de la imagen
    canal.send(embed)
  })}}}