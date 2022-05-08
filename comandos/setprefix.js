
const Discord = require('discord.js');
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes')
 module.exports = {
     name: "setprefix",
   alias: ["newprefix"],
   run: async (client, message, args) => {

    
  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "&"
  }
  
  if(!message.content.startsWith(prefix)) return;
  


if(!message.member.hasPermission('ADMINISTRATOR')){
  const conf = new Discord.MessageEmbed()
  .setDescription(`No tienes permisos suficientes.`)
  .setColor("RED")
  message.channel.send(conf);
}else

if(!args[0])
{
  const nprefix = new Discord.MessageEmbed()
  .setDescription(`Debes ingresar un prefix para realizar esta accion.`)
  .setColor("RED")
  message.channel.send(nprefix);
}else{

prefix_db.establecer(`${message.guild.id}`, args[0]);
          message.channel.send({
            embed: {
              color: "RED",
              title: "Prefix del servidor cambiado",
              description: `Nuevo prefix:` + args[0]
            }})}}}
   