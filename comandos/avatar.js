module.exports ={
	name: "avatar",
	run: async (client, message, args) =>{
		const Discord = require("discord.js");
		
        let miembro = message.mentions.users.first()
        if (!miembro) {
            const embed = new Discord.MessageEmbed()
                .setImage(`${message.author.displayAvatarURL({size: 2048, dynamic: true})}`)
                .setColor("RED")
                .setFooter(`Avatar de ${message.author.tag}`);
            message.channel.send(embed);

        } else {
            const embed = new Discord.MessageEmbed()
                .setImage(`${miembro.displayAvatarURL({size: 2048, dynamic: true})}`)
                .setColor("RED")
                .setFooter(`Avatar de ${miembro.tag}`);

            message.channel.send(embed);

        };
}
}
