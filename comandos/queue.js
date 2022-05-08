//este comando no es funcional
const { MessageEmbed } = require("discord.js");
const queue = new Map();
module.exports ={
    name: "queue",
    run: async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Tienes que estar en un canal de voz para ejecutar este comando"
    );
    const server_queuee = queue.get(message.guild.id);
  var status;
  var np;
  var count = 0;
  if(!server_queuee){
    return message.channel.send(`No hay canciones en la cola.`);
}else{
    status = server_queuee.queue
      .map((x) => {
        count += 1;
        return (
          "• " +
          "`" +
          count +
          "." +
          "`" +
          x.name +
          " -Solicitada por " +
          `<@${x.requested.id}>`
        );
      })
      .join("\n");
    }
  if (!server_queuee) np = status;
  else np = server_queuee.queue[0].name;
  if (server_queuee) thumbnail = server_queuee.queue[0].thumbnail;
  else thumbnail = message.guild.iconURL();
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Cola de musica",
        "https://img.icons8.com/color/2x/rhombus-loader.gif"
      )
      .setThumbnail(thumbnail)
      .setColor("GREEN")
      .addField("Reproduciendo", np, true)
      .setDescription(status)
  );
}}