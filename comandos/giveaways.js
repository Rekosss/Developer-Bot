const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const Discord = require("discord.js");
module.exports = {
  name: "giveaway",
  description: "Crea un sorteo sencillo",
  usage: "<tiempo> <canal> <premio>",
  category: "fun",
  run: async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(`No tienes permisos suficientes`);
    if (!args[0]) return message.channel.send(`No especificaste tu tiempo!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `No usaste el formato correcto **[tiempo][canal][premio]**`
    );
    if (isNaN(args[0][0])) return message.channel.send(`Eso no es un numero!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `No pude encontrar ese canal en el servidor!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Sin premio especificado!`);
    message.channel.send(`*Sorteo creado en ${channel}*`);
    let Embed = new MessageEmbed()
      .setAuthor(`${prize}`)
      .setDescription("Reacciona con ``🎉`` para participar")
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RED`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reacciones: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `No reaccionó suficiente gente para el sorteo!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Ganador de **${prize}** es...\n ${winner} Felicidades!!🥳🥳 `
      );
    }, ms(args[0]));
  },
};
