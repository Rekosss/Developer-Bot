const Discord = require("discord.js");
const db = require('megadb')
const role = new db.crearDB('canal_rolemute')
module.exports = {
    nombre: "ua",
    alias: ["unmute"],
    run: async (client, message, args, msg) => {

        if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("No tienes permisos suficientes.")

        if(!message.guild.me.hasPermission("MANAGE_ROLES"))return message.channel.send("No tengo permisos para ejecutar este comando nesecito los permisos `MANAGE_ROLES`.")

        if(!role.tiene(message.guild.id))return message.channel.send("El rol mute no esta establecido usa el comando `muterole <@rol>`.")
        let persona = message.mentions.members.first()
        if(!persona)return message.channel.send("Menciona al usuario.")


        let role1 = await role.obtener(message.guild.id)

        if(!persona.roles.cache.has(role1))return message.channel.send("Este miembro no esta muteado.")
        if(persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0)
        {
const emo = new Discord.MessageEmbed()
.setDescription("Esta persona tiene tu mismo o superior rol.")
.setColor("RED")
message.channel.send(emo);
}else{
        persona.roles.remove(role1)
        const embedmute = new Discord.MessageEmbed()
        .setTitle(`Miembro desmuteado`)
        .setColor("RED")
        .addField(`Moderator:`, `${message.author.username}`)
        .addField(`Miembro:`, `${persona}`)
        message.channel.send(embedmute);
    }}}