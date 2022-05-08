module.exports = {
	name: "mute",
  alias: "mut",
	descripcion: "Comandos",
	 run: async (client, message, args) => {
      const Discord = require("discord.js")
      const db = require("megadb")
      let db_muterole = new db.crearDB("canal_rolemute");


let permiso = message.member.hasPermission("BAN_MEMBERS");
let mencionado = message.mentions.members.first();
let razon = args.slice(1).join(' ');
const user = message.mentions.members.first();
if(!permiso)
{
const asd = new Discord.MessageEmbed()
.setDescription("No tienes permisos suficientes")
.setColor("RED")
message.channel.send(asd);
}else
if (!user) {
  return message.channel.send(
    "**Menciona al usuario para mutearlo**"
  );
}else
if(!razon) return message.channel.send('Especifica el motivo.');
  
if(!db_muterole.tiene(message.guild.id)) return message.channel.send("En este servidor no esta el rol mute Establecido, Uso: **setmuterole [@rol]**")

let rol = await
db_muterole.obtener(message.guild.id) 
if(!user === message.author.id) return message.channel.send ("No puede mutearte a ti mismo");
if(user.roles.cache.has(rol)) return message.channel.send("Este miembro ya esta muteado.")
user.roles.add(rol)
if(user.roles.highest.comparePositionTo(message.member.roles.highest) > 0)
            {
    const emo = new Discord.MessageEmbed()
    .setDescription("Esta persona tiene tu mismo o superior rol.")
    .setColor("RED")
    message.channel.send(emo);
    }else{
      if(message.author === user) return message.channel.send("No puedes mutearte tu mismo.")
else{
  
const embedmute = new Discord.MessageEmbed()
.setTitle(`Miembro muteado`)
.setColor("RED")
.addField(`Moderator:`, `${message.author.username}`)
.addField(`Miembro:`, `${user}`)
.addField(`Razon:`, `${razon}`)
message.channel.send(embedmute);
  
}}}}