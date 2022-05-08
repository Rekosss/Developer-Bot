module.exports = {
	name: "newnick",
	alias: ["nnick"],
	descripcion: "New Nick",
	 run: async (client, message, args) => {

     const Discord = require("discord.js")

if(!message.guild.me.hasPermission("MANAGE_NICKNAMES"))
    {
    const emo = new Discord.MessageEmbed()
    .setDescription("No tengo el permiso para Gestionar Apodos")
    .setColor("#00FF00")
    message.channel.send(emo);
        }else{
if(!message.member.hasPermission("MANAGE_NICKNAMES"))
    {
    const asd = new Discord.MessageEmbed()
    .setDescription("No tienes el permiso para Gestionar Apodos")
    .setColor("#00FF00")
    message.channel.send(asd);
        }else{
let persona = message.mentions.members.first() 
if(!persona) 
    {
    const emo = new Discord.MessageEmbed()
    .setDescription("Debes mencionar una persona y ingresar el apodo, Ejemplo: `newnick [Persona] [Apodo]`")
    .setColor("#00FF00")
    message.channel.send(emo);
        }else if(persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0)
            {
    const emo = new Discord.MessageEmbed()
    .setDescription("Esta persona tiene tu mismo o superior rol.")
    .setColor("#00FF00")
    message.channel.send(emo);
        }else{
let apodo = args.slice(1).join(' ')
persona.setNickname(apodo) 
message.channel.send(`Listo, el nuevo apodo de ${persona} es **${apodo}**`)
   }}}}}