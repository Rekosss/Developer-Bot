const Discord = require('discord.js');
const config = require("../config.json");
module.exports ={
    name: "reset",
    run: async (client, message, args) =>{
let id = [`914326320924737536`] 

if(!id.some(id => message.author.id == id)) { 

  const embed = new Discord.MessageEmbed() 
  .setDescription('Solo el developer del bot puede usar este comando.')
  .setColor("RED")
  return message.channel.send(embed) 
} 

message.channel.send('🕙 | Reinicio en progreso...').then(async msg => {
  msg.edit('🕙 | Reinicio en progreso...'); 
  client.destroy(); 
  await client.login(config.token); 
  await msg.edit('🕙 | Reinicio en progreso...'); 
  msg.edit(' ✅ | Reiniciado Correctamente!'); 
})}}
