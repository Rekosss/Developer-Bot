module.exports ={
  name: "clear",
  run: async (client, message, args) =>{
  if(message.author.bot) return;
  if(!message.guild.me.permissionsIn(message.channel).has('MANAGE_MESSAGES')){
  return message.channel.send('No tengo permisos suficientes.').then(d => d.delete({timeout: 5000}))
}
if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply(`**No tienes permisos para usar este comando**`).then(d => d.delete({timeout: 5000}))
if(!args[0]) return message.reply("Debes poner un numero del 1 al 100").then(d => d.delete({timeout: 5000}))
if(isNaN(args[0])) return message.reply("Ingresa un numero real").then(d => d.delete({timeout: 5000}))
if(args[0] > 100) return message.reply("No puedes borrar mas de 100 mensajes").then(d => d.delete({timeout: 5000}))
if(args[0] < 1) return message.reply("La cantidad de mensajes ingresada es menor a 1").then(d => d.delete({timeout: 5000}))
message.channel.bulkDelete(args[0]) 
message.delete()
.then(message => message.channel.send(`Se eliminaron ${args[0]} mensajes.`)).then(d => d.delete({timeout: 5000}))
.catch(() => message.channel.send("Algo fallo al intentar borrar los mensajes, porfavor, intentalo nuevamente.")).then(d => d.delete({timeout: 5000}))
}
}