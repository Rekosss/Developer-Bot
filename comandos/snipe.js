const Discord = require(`discord.js`);
module.exports = {
    name: "snipe",
    run: async (client, message) =>{
    let cooldown= new Set();

        const channel = message.mentions.channels.first() || message.channel;
        const msg = client.snipes.get(channel.id)
        if(!msg){
            message.channel.send("No se ha borrado ningun mensaje")
        }
        else{
            if(msg.content.includes('&setinfo')){
             return message.channel.send('No puedes snipear esto.')
                }else{
            const embed = new Discord.MessageEmbed()
            .setAuthor(msg.delete.tag, msg.delete.displayAvatarURL({dynamic:true}))
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setFooter(`Solicitado por: ${message.author.tag} ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
            .setTimestamp()
            .setColor("RED")
            .addField("Contenido:", msg.content||msg.image)
            .addField("Canal:", message.channel, true)
            message.channel.send(embed)
                }}}}