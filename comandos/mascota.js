const Discord = require('discord.js')
const db = require('megadb')
const db_mascota = new db.crearDB('mascotas')
const { Client, MessageEmbed , MessageAttachment } = require("discord.js");
let cooldown= new Set();
module.exports ={
  name: "mascota",
  run: async (client, message, args) => {

   if(cooldown.has(message.author.id)){
    return message.channel.send(message.author.username+ " utilice el comando despues de 30 segundos!").then(m => {m.delete({ timeout: 3000})});
     
   }
if(!args[0]) {

const ayuda = new MessageEmbed()
.setTitle("Ayuda de mascotas!")
.setDescription("`mascota adoptar <nombre>` | Para adoptar tu mascota! \n `mascota perfil` | Para ver el perfil de tu mascota!\n `mascota jugar` | Para jugar y ganar experiencia!")

message.channel.send(ayuda);
return
}

if(args[0] === "adoptar") {
 let usuario = message.author;
 let nombre = args.slice(1).join(" ");

if(db_mascota.tiene(`${usuario}`)) return message.reply('Ya tiene una mascota en el sistema!')

if(!nombre) return message.channel.send('por favor ingresar un nombre a tu mascota!')

db_mascota.establecer(`${usuario}-nombre`, nombre, "-")
db_mascota.establecer(`${usuario}.xp`, 0)


message.channel.send(`Tu mascota con el nombre de ${nombre} fue registrado!`)


}

if(args[0] === "perfil") {

 let usuario = message.author;

if(!db_mascota.tiene(`${usuario}`)) return message.reply('Lo siento pero no tiene ninguna mascota para acceder a este comando')


const perfil = new Discord.MessageEmbed()
.setTitle("Perfil de la Mascota!")
.setDescription(`El dueño de la Mascota es ${usuario.username}`)
.addField("Nombre:",`${await db_mascota.obtener(`${usuario}.nombre`)}`, true)
.addField("Xp acomulado:", `${await db_mascota.obtener(`${usuario}.xp`)}`, true)
.setColor("RED")

message.channel.send(perfil)


}

if(args[0] === "jugar"){

let usuario = message.author;

if(!db_mascota.tiene(`${usuario}`)) return message.reply(`${usuario.username} No tiene mascota para interactuar!`)


 const jugar = new Discord.MessageEmbed()
 .setAuthor("Tu mascota ha jugado un rato")
 .setDescription(`${await db_mascota.obtener(`${usuario}.nombre`)} Ha jugado y ha ganado 25 puntos de xp!`)
 .setColor("RED")

db_mascota.sumar(`${usuario}.xp`, 25)

message.channel.send(jugar)
     let ae = message.author;
      message.delete(ae)



cooldown.add(message.author.id);

setTimeout(() => {
  cooldown.delete(message.author.id);
}, 30000);
  }}
  

}