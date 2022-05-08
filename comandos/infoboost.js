module.exports ={
  name: "boosts",
  run: async (client, message, args) =>{

    const Discord = require('discord.js');

        var server = message.guild;
    let features = {
        ANIMATED_ICON: "Icono animado",
        BANNER: "Banner de servidor",
        COMMERCE: "Canal de tienda",
        DISCOVERABLE: "Servidor de Discord Discovery List",
        FEATURABLE: "Apto para estar en la lista de destacados",
        INVITE_SPLASH: "Fondo para invitaciones",
        PUBLIC: "El servidor es público",
        NEWS: "Canal de novedades",
        PARTNERED: "Servidor Asociado",
        VANITY_URL: "Invitacion personalizada",
        VERIFIED: "Servidor verificado",
        VIP_REGIONS: "Región V.I.P"
    };

    let nivel = {
        0: "Ninguno",
        1: "Nivel 1",
        2: "Nivel 2",
        3: "Nivel 3"
    };
    const embed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setAuthor("Estado de Boost en: " + server.name)
        .setThumbnail(!server.splashURL({ size: 2048, format: "jpg" })
            ? server.iconURL({ size: 2048, format: "jpg" })
            : server.splashURL({ size: 2048, format: "jpg" }))
        .addFields({
            name: ":star_struck: Nivel de Boost", value: nivel[server.premiumTier],
            inline: true
        })
        .addFields({
            name: ":star_struck: Cantidad de boosts", value: server.premiumSubscriptionCount === 0 ? "Sin boosts"
                : `${server.premiumSubscriptionCount} ${
                server.premiumSubscriptionCount === 1 ? "boost" : "boosts"}`,
            inline: true
        })
        .addFields({
            name: ":star_struck: Ventajas del servidor", value: `${server.features.length <= 0
                ? "Ninguna"
                : `\`${server.features.map(f => features[f]).join("`, `")}\``
                }`
            , inline: false
        })
        .setImage(server.bannerURL({ size: 2048, format: "jpg" }));
    message.channel.send(embed);
  }
}