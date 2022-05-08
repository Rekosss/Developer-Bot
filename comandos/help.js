const Discord = require('discord.js'); 

module.exports = (client, message, args) => { 

    const indice = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setColor("RED")
    .setDescription('Bot oficial Nekrow Hosting')
    .setFooter(`Reacciones:
    🎮 = Comandos de STAFF
    📜 = Comandos de interacciones
    🌎 = Indice
    `)
    const help_staff = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setDescription('Comandos STAFF')
    .setColor("RED")
    .addFields(
        {
            name: "kick", value: "Expulsa a un usuario del servidor"
        },
        {
            name: "ban", value: 'Banea a un usuario del servidor'
        },
        {
            name: "mute", value: 'Mutea a un usuario'
        },
        {
            name: "unmute", value: 'Desmutea a un usuario'
        },
        {
            name: "Setad", value: 'Setea el canal de anuncios'
        },
        {
            name: "setlogs", value: 'Setea el canal de logs'
        },
        {
            name: "setwelcome", value: 'Setea el canal de bienvenidas/despedidas'
        },
        {
            name: "setprefix", value: 'Setea el prefix del bot'
        },
        {
            name: "setspam", value: 'Setea el canal de spam y activa el mismo'
        },
        {
            name: "giveaway", value: 'Inicia un sorteo'
        }
    )
    .setFooter(`Reacciones:
    🎮 = Comandos de STAFF
    📜 = Comandos de interacciones
    🌎 = Indice
    `)
    const help_inter = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setDescription('Comandos Interacciones')
    .setColor("RED")
    .addFields(
        {
            name: "8ball", value: "Hazle una pregunta a la bola magica y ella te respondera"
        },
        {
            name: "impostor", value: 'Descubre si un usuario es el impostor'
        },
        {
            name: "youtube", value: 'Busca una cancion en youtube'
        },
        {
            name: "activity", value: 'Juega a un juego en un canal de voz'
        },
        {
            name: "avatar", value: 'Muestra el avatar de un usuario'
        },
        {
            name: "say", value: 'Habla usando el bot'
        },
        {
            name: "server", value: 'Mira la informacion del servidor'
        },
        {
            name: "ping", value: 'Revisa el ping del bot'
        },
        {
            name: "membercount", value: 'Muestra la cantidad de miembros en el servidor'
        },
        {
            name: "user", value: 'Revisa la informacion de un usuario'
        },
        {
            name: "web", value: 'Muestra la url de nuestra web'
        },
        {
            name: "snipe", value: 'Recupera el ultimo mensaje borrado en el canal'
        },
        {
            name: "bot", value: 'Muestra la informacion del bot'
        },
        {
            name: "boosts", value: 'Muestra el estado de los boosts del servidor'
        },
        {
            name: "channel", value: 'Muestra la informacion del canal'
        }
    )
    .setFooter(`Reacciones:
    🎮 = Comandos de STAFF
    📜 = Comandos de interacciones
    🌎 = Indice
    `)
    message.channel.send(indice).then(m => {
        m.react('🎮')
        m.react('📜')
        m.react('🌎')
        m.awaitReactions((reaction, user) => {
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(message.author.id !== user.id) return; 
     
            if(reaction.emoji.name === '🎮') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(help_staff); 
            }
            if(reaction.emoji.name === '📜') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(help_inter); 
            }
            if(reaction.emoji.name === '🌎') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                m.edit(indice); 
            }
        })
    })
}