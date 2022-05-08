const Discord = require("discord.js");
const config = require("../config.json");
const fetch = require("node-fetch");
module.exports = {
	name: "activity",
    alias:"actividades",
	run: async (client, message, args) =>{
        const { channel } = message.member.voice;
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel){
        const embed = new Discord.MessageEmbed()
        .setTitle("ERROR")
        .setColor('RED')
        .setDescription(`Necesitas estar en un canal de voz.`)
         message.channel.send(embed)
        }else
        if(!args[0]) {

            const ayuda = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Debes ingresar una actividad.\nActividades Disponibles:\n**youtube**\n**poker**\n**ajedrez**\n**fishing**\n**betrayal**")
            
            message.channel.send(ayuda);
        }else if(args[0] === "poker") {
                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "755827207812677713",
                    target_type: 2,
                    temporary: false,
                    validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${config.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json())
                .then(invite =>{
                    if(!invite.code) return message.reply("No se pudo iniciar el minijuego")
                    message.channel.send(`https://discord.com/invite/${invite.code}`)
                })
                }
                if(args[0] === "youtube") {
                    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                        method: "POST",
                        body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${config.token}`,
                            "Content-Type": "application/json"
                        }
                    }).then(res => res.json())
                    .then(invite =>{
                        if(!invite.code) return message.reply("No se pudo iniciar el minijuego")
                        message.channel.send(`https://discord.com/invite/${invite.code}`)
                    })
                }
                if(args[0] === "fishing") {
                    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                        method: "POST",
                        body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${config.token}`,
                            "Content-Type": "application/json"
                        }
                    }).then(res => res.json())
                    .then(invite =>{
                        if(!invite.code) return message.reply("No se pudo iniciar el minijuego")
                        message.channel.send(`https://discord.com/invite/${invite.code}`)
            })}
            
            if(args[0] === "betrayal") {
                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "773336526917861400",
                    target_type: 2,
                    temporary: false,
                    validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${config.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json())
                .then(invite =>{
                    if(!invite.code) return message.reply("No se pudo iniciar el minijuego")
                    message.channel.send(`https://discord.com/invite/${invite.code}`)
                })
        }if(args[0] === "ajedrez") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832012774040141894",
                target_type: 2,
                temporary: false,
                validate: null
                }),
                headers: {
                    "Authorization": `Bot ${config.token}`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(invite =>{
                if(!invite.code) return message.reply("No se pudo iniciar el minijuego")
                message.channel.send(`https://discord.com/invite/${invite.code}`)
            })
    }}}