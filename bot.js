const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.user.tag + ' Ready!');
});

client.login(process.env.BOT_TOKEN);
