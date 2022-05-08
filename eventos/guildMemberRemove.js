const Discord = require('discord.js')
const megadb = require('megadb')
module.exports = {
    name:"guildMemberRemove",
run: async (member) => {
let a = new megadb.crearDB('canalWelcomes')
let ad = await a.obtener(`Canal-${member.guild.id}`)
    let b = await member.guild.channels.cache.get(ad)
    if(!b) return;
const embed = new Discord.MessageEmbed()
.setTitle("Exit")
.setDescription(`${member.user} se ha ido del servidor`)
.setColor("RED")
b.send(embed)
} }