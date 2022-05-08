module.exports = {
  name: "eval",
  alias: ["eval"],
  descripcion: "Este comando muestra algo del bot",
  run: async (client, message, args) => {
             
const Discord = require('discord.js');

                  if (message.author.bot)return
          
 if (!["293547873222656003", "246978004268351488"].includes(message.author.id)) return message.channel.send('`Solo mi desarrollador puede hacer esto`');


let code = args.join(' ')
  if(!code) return message.channel.send('> Evalua un algo').then(m => m.delete({timeout: 4000}))


  try{
    if(args.join(' ').toLowerCase().includes('token')){
     return message.channel.send('Deja de romper las bolas.')
        }
 
    if(args.join(' ').toLowerCase().includes('login')){
           return message.channel.send('Deja de romper las bolas.')

    }
   
    if(args.join(' ').toLowerCase().includes('x')){
     return message.channel.send('Deja de romper las bolas.')
        }


  let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });

const embed1 = new Discord.MessageEmbed()
.setTitle('Evaluacion hecha!')
.addField("Tipo", `\`\`\`js\n${tipo}\`\`\``)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${resultado.slice(0, 1050)}\`\`\``)
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Ha aparecido un error!')
        .setColor('ff0000')
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err}\`\`\``)
    message.channel.send(embed2)


  }
  }
  }