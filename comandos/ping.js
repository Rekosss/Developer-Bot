module.exports = {
    name: "ping",
run: async (client, message) => {
    message.channel.send(`Latencia de los comandos: **${new Date().getTime() - message.createdTimestamp} ms**\nLatencia de la API: **${client.ws.ping} ms**`)
}}