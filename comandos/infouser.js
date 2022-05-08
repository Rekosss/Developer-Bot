const Discord = require('discord.js');
module.exports ={
	name: "user",
	run: async (client, message, args) =>{

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
        const embed = new Discord.MessageEmbed()
            .setTitle(`Informacion del usuario ${user.user.username}`)
            .setColor(`RED`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true})) 
            .addFields(
                {
                    name: "Apodo: ",
                    value: message.member.nickname ? message.member.nickname : "No tiene apodo", 
                    inline: true 
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar link: ',
                    value: `[Pinche Aquí](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Dato de creacion: ',
                    value: user.user.createdAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Fecha de entrada al Servidor: ',
                    value: user.joinedAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Roles del usuario: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        message.channel.send(embed)
        let cooldown= new Set();
if(cooldown.has(message.author.id)){
   message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
   return;
}
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);
}
}