
const db = require('megadb')
const MeowDB = require("meowdb");
const { Client, MessageEmbed , MessageAttachment, MessageActionRow, MessageButton } = require("discord.js");
const Discord = require("discord.js")
const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES','GUILD_VOICE_STATES', 'GUILD_MEMBERS','GUILD_MESSAGE_REACTIONS'] }, partials: ['MESSAGE', 'REACTION', 'CHANNEL'] })
require("discord-buttons")(client);
const config = require("./config.json");
const fs = require("fs")
let prefix_db = new db.crearDB('prefixes')
const ee = require('quick.db')
let prefix = config.prefix;
client.snipes = new Map()
let cooldown= new Set();
const Spams = new db.crearDB('Spams');
const queue = new Map();

client.on('ready', () => {
  console.log(`
  ██████╗░███████╗██╗░░░██╗███████╗██╗░░░░░░█████╗░██████╗░███████╗██████╗░  ██████╗░░█████╗░████████╗
  ██╔══██╗██╔════╝██║░░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗██╔════╝██╔══██╗  ██╔══██╗██╔══██╗╚══██╔══╝
  ██║░░██║█████╗░░╚██╗░██╔╝█████╗░░██║░░░░░██║░░██║██████╔╝█████╗░░██████╔╝  ██████╦╝██║░░██║░░░██║░░░
  ██║░░██║██╔══╝░░░╚████╔╝░██╔══╝░░██║░░░░░██║░░██║██╔═══╝░██╔══╝░░██╔══██╗  ██╔══██╗██║░░██║░░░██║░░░
  ██████╔╝███████╗░░╚██╔╝░░███████╗███████╗╚█████╔╝██║░░░░░███████╗██║░░██║  ██████╦╝╚█████╔╝░░░██║░░░
  ╚═════╝░╚══════╝░░░╚═╝░░░╚══════╝╚══════╝░╚════╝░╚═╝░░░░░╚══════╝╚═╝░░╚═╝  ╚═════╝░░╚════╝░░░░╚═╝░░░\nDeveloper Bot ready`);
  let statuses = [`&help |  ${client.guilds.cache.size} Servidores`,`V.1.5`,`Rekøss#4749`,`Nørus#6151`]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)]

    client.user.setActivity(status, { type: 'WATCHING' })
  }, 6000)
});

			//COMMAND HENLDER/

      const {
        readdirSync
    } = require("fs");
    console.log("Welcome to SERVICE HANDLER /--/ By https://milrato.eu /--/ Discord: Tomato#6966".yellow);
    module.exports = (client) => {
        try {
            let amount = 0;
            readdirSync("./commands/").forEach((dir) => {
                const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
                for (let file of commands) {
                    let pull = require(`../commands/${dir}/${file}`);
                    if (pull.name) {
                        client.commands.set(pull.name, pull);
                        amount++;
                    } else {
                        console.log(file, `error -> missing a help.name, or help.name is not a string.`.brightRed);
                        continue;
                    }
                    if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
                }
            });
            console.log(`${amount} Commands Loaded`.brightGreen);
        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    };
    

//Mencion//
        client.on ("message", async message => {
          let prefix;
          if(prefix_db.tiene(`${message.guild.id}`)) {
          prefix = await prefix_db.obtener(`${message.guild.id}`)
          }else{
          prefix = "&"
          }
              if (message.author.bot)return
      let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
      if (message.content.match(RegMention)) {
        message.channel.send(`Hola ${message.author} yo soy ${client.user.username}, mi prefix en el server es  ${prefix}  para mas informacion pon \`${prefix}help\` gracias`);
      }
      function quitarTilde(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}
async function verificarSPAM() {
  let a = await 
Spams.obtener(`Spam-${message.guild.id}`) 
 let canal = client.channels.cache.get(a);
 if(!canal) return;
 if(message.author.bot) return;
  if(message.member.roles.cache.some(r=>["nofilter"].includes(r.name))) return;
        let SPAM = [
          "pussy",
          "shucks",
          "fuck",
          "nigger",
          "shite",
          "semen",
          "nenazo",
          "down",
          "esperma",
          "puta",
          "puto",
          "mierda",
          "nazi",
          "culo",
          "teta",
          "concha",
          "vagina",
          "pete",
          "mierda",
          "chota",
          "choto",
          "pingo",
          "pingot",
          "bobo",
          "pelotudo",
          "putisima",
          "irak",
          "suicidio",
          "orgasmo",
          "culiar",
          "culear",
          "sexo",
          "pene",
          "boludazo",
          "veneco",
          "gilipollas",
          "mamada",
          "mamar",
          "travesti",
          "violador",
          "botnet",
          "spoofing",
          "spoofed",
          "ddos",
          "chupame",
          "verga",
          "v3rga",
          "v3rg4",
          "hitler",
          "vandal",
          "naz1",
          "loli",
          "peluchin",
          "teton",
          "mogolico",
          "forro",
          "dox",
          "peron",
          "videla",
          "d0un",
          "d0wn",
          "xnxx",
          "xvideos",
          "pornhub",
          "maricon",
          "g0rd0",
          "pederasta",
          "pija",
          "poronga",
        ];
        
        if(SPAM.some((x) => quitarTilde(message.content.toLowerCase()).match(x))) {
            const advert = new Discord.MessageEmbed()
                .setTitle(':shield: | SPAM')
                .addField("Canal:", `<#${message.channel.id}>`, true)
                .addField("Usario:", `<@${message.author.id}>`, true)
                .addField("Mensaje:", message.content, true)
                .addField("Fecha:", new Date());
                client.channels.cache.get(a).send(advert).catch(console.error);
            
            message.delete();
                
        }
}
verificarSPAM();
  });
//////////////////////////////////////////////Event Handler//////////////////////////////////////////
const eventFiles = fs.readdirSync('./eventos').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./eventos/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args, client));
	} else {
		client.on(event.name, (...args) => event.run(...args, client));
	}
}
  client.login(config.token);
