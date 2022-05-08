const Discord = require('discord.js')
const megadb = require('megadb')
module.exports = {
    name:"messageUpdate",
run: async (oldMessage, newMessage) => {
let canal_db = new megadb.crearDB('Logs')
if(!oldMessage.content == newMessage.content) return;
if (!oldMessage.content) return;
if(oldMessage.author.bot) return;
if(newMessage.content === oldMessage.content) return;
const embed = new Discord.MessageEmbed()
    .setTitle("Mensaje editado")
    .setAuthor(oldMessage.author.tag, oldMessage.author.displayAvatarURL({dynamic:true}))
    .setThumbnail(oldMessage.author.displayAvatarURL({dynamic:true}))
    .setFooter(`ID: ${oldMessage.author.id}`, oldMessage.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    .setColor("BLUE")
    .addField("Mensaje anterior", oldMessage, true)
    .addField("Mensaje nuevo", newMessage, true)
    .addField("Canal:", oldMessage.channel, true)
let canal = await canal_db.obtener(`Log-${oldMessage.guild.id}`)
    let canal_guardado = newMessage.guild.channels.cache.get(canal)
    if(!canal_guardado) return;
    canal_guardado.send(embed)
} }