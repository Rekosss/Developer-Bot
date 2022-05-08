const Discord = require('discord.js')
const megadb = require('megadb')
module.exports = {
    name:"guildMemberAdd",
run: async (member) => {
let canal_db = new megadb.crearDB('canalWelcomes')
const embed = new Discord.MessageEmbed()
.setTitle("Enter")
.setDescription(`${member.user} se ha unido al servidor`)
.setColor("GREEN")
let canal = await canal_db.obtener(`Canal-${member.guild.id}`)
    let canal_guardado = member.guild.channels.cache.get(canal)
    if(!canal_guardado) return;
    canal_guardado.send(embed)
} }