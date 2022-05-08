const ytdl = require("discord-ytdl-core");
const yt = require("ytdl-core");
const { MessageEmbed, Util } = require("discord.js");
const forHumans = require("../wtf.js");
const youtubeScraper = require("yt-search")
const queue = new Map();

module.exports ={
    name: "play",
    alias: ['skip', 'stop'],
    run: async (client, message, args, cmd) => {
        const config = {
            token: process.env.TOKEN,
            prefix: process.env.PREFIX,
          };
        client.config = config;


  const channel = message.member.voice.channel;

  const error = (err) => message.channel.send(err);
  const send = (content) => message.channel.send(content);
  const deletequeue = (id) => queue.delete(id);

  const server_queue = queue.get(message.guild.id);
  var song;
  if (cmd === 'play'){
  if (!channel) return error("Necesitas estar en un canal de voz");

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("No tengo permisos para unirme al canal");

  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error("No tengo permisos para hablar en el canal");

  const query = args.join(" ");

  if (!query) return error("No pusiste ninguna cancion para reproducir");

  if (query.includes("www.youtube.com")) {
    try {
      const ytdata = await await yt.getBasicInfo(query);
      if (!ytdata) return error("No encontre ninguna cancion con esa URL");
      song = {
        name: Util.escapeMarkdown(ytdata.videoDetails.title),
        thumbnail:
          ytdata.player_response.videoDetails.thumbnail.thumbnails[0].url,
        requested: message.author,
        videoId: ytdata.videoDetails.videoId,
        duration: forHumans(ytdata.videoDetails.lengthSeconds),
        url: ytdata.videoDetails.video_url,
        views: ytdata.videoDetails.viewCount,
      };
    } catch (e) {
      console.log(e);
      return error("Ha ocurrido un error.");
    }
  } else {
    try {
      const fetched = await (await youtubeScraper(query)).videos;
      if (fetched.length === 0 || !fetched)
        return error("No encuentro la cancion que solicitaste'");
      const data = fetched[0];
      song = {
        name: Util.escapeMarkdown(data.title),
        thumbnail: data.image,
        requested: message.author,
        videoId: data.videoId,
        duration: data.duration.toString(),
        url: data.url,
        views: data.views,
      };
    } catch (err) {
      console.log(err);
      return error("Ha ocurrido un error.");
    }
  }
    //server_queue = queue.get(message.guild.id);

  if (server_queue) {
    server_queue.queue.push(song);
    return send(
      new MessageEmbed()
        .setAuthor(
          "La cancion fue añadida a la cola",
          "https://img.icons8.com/color/2x/cd--v3.gif"
        )
        .setColor("F93CCA")
        .setThumbnail(song.thumbnail)
        .addField("Nombre de la cancion", song.name, false)
        .addField("Vistas", song.views, false)
        .addField("Duracion", song.duration, false)
        .addField("Requerida por", song.requested.tag, false)
        .setFooter("Posicionada " + server_queue.queue.length + " en la cola")
    );
  }else{

    const structure = {
      channel: message.channel,
      vc: channel,
      queue: [],
      playing: true,
      volume: 50,
      connection: null,
    };

    queue.set(message.guild.id, structure);
    structure.queue.push(song);


    try {
      const join = await channel.join();
      structure.connection = join;
      play(structure.queue[0]);
    } catch (e) {
      console.log(e);
      deletequeue(message.guild.id);
      return error("Ha ocurrido un error.");
    }

  }
  async function play(track) {
    try {
      const data = queue.get(message.guild.id);
      if (!track) {
        data.channel.send("La cola de canciones esta limpia, abandonando canal");
        message.guild.me.voice.channel.leave();
        return deletequeue(message.guild.id);
      }
      data.connection.on("disconnect", () => deletequeue(message.guild.id));
      const source = await ytdl(track.url, {
        filter: "audioonly",
        quality: "highestaudio",
        highWaterMark: 1 << 25,
        opusEncoded: true,
      });
      const player = data.connection
        .play(source, { type: "opus" })
        .on("finish", () => {
          var removed = data.queue.shift();
          if(data.loop == true){
            data.queue.push(removed)
          }
          play(data.queue[0]);
        });
      message.channel.send(
        new MessageEmbed()
          .setAuthor(
            "Reproduciendo",
            "https://img.icons8.com/color/2x/cd--v3.gif"
          )
          .setColor("RED")
          .setThumbnail(track.thumbnail)
          .addField("Nombre de la cancion", track.name, false)
          .addField("Vistas", track.views, false)
          .addField("Duracion", track.duration, false)
          .addField("Solicitada por", track.requested, false)
          .setFooter("Reproductor de musica Nekrow Hosting")
          );
        } catch (e) {
          console.error(e);
        }}}
        const server_queuee = queue.get(message.guild.id);
        const skip_song = (message, server_queuee) => {
          if (!message.member.voice.channel) return message.channel.send('Necesitas estar en un canal para ejecutar este comando.');

          if(!server_queuee){
              return message.channel.send(`No hay canciones en la cola.`);
          }
          server_queuee.connection.dispatcher.end();
      }
      const stop_song = (message, server_queuee) => {
        if (!message.member.voice.channel) return message.channel.send('Necesitas estar en un canal para ejecutar este comando.');
        server_queuee.queue = [];
        server_queuee.connection.dispatcher.end();
    }
        if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'stop') stop_song(message, server_queue);      
      }}
      