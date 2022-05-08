const db = require("megadb")
module.exports = {
    name: "addspam",
    alias: [],
    descripcion: ".",
    run: (client, message, args) => {
    const Spamss = new db.crearDB('Spamss');

  let ekisde =  args.join(" ")
  
  if (!ekisde) return message.reply(`No puedes dejar esto en blanco.`)
  else Spamss.establecer(`${message.guild.id}`,`messi-${args.join(" ")}`)
  return message.channel.send (ekisde+" agregado con exito")
  
    }}

