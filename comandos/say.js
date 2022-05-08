 let cooldown= new Set();

 module.exports = {
  name: "say",
  alias: [],
  descripcion: "Hace que el bot diga algo",
  run: (client, message, args) => {
let ekisde =  args.join(" ")

if(cooldown.has(message.author.id)){
  return message.channel.send(message.author.username+ " utilice el comando despues de 2 segundos!").then(m => {m.delete({ timeout: 3000})});
   
}
if (!ekisde) return message.reply(`No tengo nada que decir.`);

message.channel.send(ekisde, { disableMentions: 'all' })
     let ae = message.author;
      message.delete(ae)


cooldown.add(message.author.id);

setTimeout(() => {
  cooldown.delete(message.author.id);
}, 2000);
  }}