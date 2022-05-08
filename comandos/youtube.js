const YouTube = require('youtube-node');
let youTube = new YouTube();


youTube.setKey('youtube key'); 
module.exports = {
    name: "youtube",
    run: async (client, message, args, msg) => {
let nombreyt = args.join(" ") 
if(!nombreyt) return  message.channel.send('Debes ingresar algo para buscar.'); 

message.channel.send(':arrows_counterclockwise: Buscando..!') 
.then(m => {
    youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link); 

        }
    })
})
}}