module.exports = {
    name: "players",
    descripcion: "Comandos",
    run: async (client, message, args) => {
		const Discord = require('discord.js');

var query = require('samp-query');
        let Samp_IP = "IP";
        let Samp_Port = puerto;
function GetPlayersOnline(msg) 
{
	var options = {
		host: Samp_IP,
		port: Samp_Port
	}
	//console.log(options.host)
	query(options, function (error, response) {
		if(error)
		{
			console.log(error)
			const embedColor = 0xff0000;
			
			const logMessage = {
				embed: {
					title: 'ERROR',
					color: embedColor,
					fields: [
						{ name: 'Error:', value: error, inline: true },
					],
				}
			}
			message.channel.send(logMessage)
			
		}    
		else
		{   
			var str = "Server Info";
			var value = str.concat(' Players Online: ',response['online'],'/',response['maxplayers']); 
			const embedColor = 0xff0000;

			const logMessage = {
				embed: {
					title: 'Server Information',
					color: embedColor,
					fields: [
						{ name: 'Players Online', value: response['online'], inline: true },
						{ name: 'Max Players', value: response['maxplayers'], inline: true },
					],
				}
			}
			message.channel.send(logMessage)
		}    
	})

}
        GetPlayersOnline(message);
}}