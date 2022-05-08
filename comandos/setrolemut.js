module.exports = {
	name: "setmuterol",
  alias: "muterole",
	descripcion: "Comandos",
	 run: async (client, message, args) => {

const db = require("megadb")
  let db_muterole = new db.crearDB("canal_rolemute");
  let role = message.mentions.roles.first();

          let permiso = message.member.hasPermission("ADMINISTRATOR");
          if(!permiso) {
            const conf = new Discord.MessageEmbed()
            .setDescription(`No tienes permisos suficientes.`)
            .setColor("RED")
            message.channel.send(conf);
          }else
        
          if (!role) 
          {
            const confe = new Discord.MessageEmbed()
            .setDescription(`Debes mencionar un canal para ejecutar esta accion.`)
            .setColor("RED")
            message.channel.send(confe);
          }else{
          db_muterole.establecer(`${message.guild.id}`, `${role.id}`);
          message.channel.send({
            embed: {
              color: "RED",
              title: "Nuevo Rol de Muteados",
              description: `Rol: <@&${role.id}>`
            }
          })}}}

