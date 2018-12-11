const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.user.tag + ' Ready!');
});

function err(message, args) {
    const err = new Discord.RichEmbed()
    .setAuthor(args, "https://tse1.mm.bing.net/th?id=OIP.J-y_zWr6CiYBywhxuhKOVAHaHa&pid=15.1&P=0&w=300&h=300")
    .setColor('RED');
    message.channel.send({
        embed: err
    });
}
function suc(message, args) {
    const suc = new Discord.RichEmbed()
    .setAuthor(args, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
    .setColor('GREEN');
    message.channel.send({
        embed: suc
    });
}

var prefix = '-';

client.on('message', message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	
	if(command == prefix + 'help') {
		if(!args[1]) {
			const help = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.addField(`${prefix}ban`, '`The role of the bot must be higher than the person to be banned and must have permission to ban members.`')
			.addField(`${prefix}kick`, '`The role of the bot must be higher than the person to be kicked and must have permission to kick members.`')
			.addField(`${prefix}role`, '`The role of bot must be higher than the role mentioned and must have permission to give the roles.`')
			.addField(`${prefix}mute`, '`The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.`')
			.addField(`${prefix}unmute`, '`The mentioned member must have muted to unmute him.`')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL)
		}else if(args[1] == 'role') {
			message.channel.send('Help role soon.');
		}else if(args[1] == 'ban') {
			message.channel.send('Help ban soon.');
		}else if(args[1] == 'kick') {
			message.channel.send('Help kick soon.');
		}else if(args[1] == 'mute') {
			message.channel.send('Help mute soon.');
		}else if(args[1] == 'unmute') {
			message.channel.send('Help unmute soon.');
		}else {
			err(message, "Unkown command.");
		}
	}
	
	if(message.content == 'رابط') message.author.send('https://discord.gg/sG8ZXsA').catch(error => err(message, "You must open your DM for link."));
	
	if(command == prefix + 'role') {
		if(!message.member.hasPermission('MANAGE_ROLES')) return;
        	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
    		if(!args[1]) return err(message, `Use ${prefix}help for more inforamtions.`);
		if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return err(message, `Use ${prefix}help for more inforamtions.`);
		if(userM) {
			var argsRole = message.content.toLowerCase().split(' ').slice(2);
		}else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
			var argsRole = message.content.toLowerCase().split(' ').slice(3);
		}
		var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
		if(userM) {
			if(!getRole) return err(message, "Unkown role.");
			if(getRole.name === '@everyone') return err(message, "Unkown role.");
			if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest then my role.`);
			if(!message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).addRole(getRole.id);
				suc(message, `Successfully give ${userM.user.username} role ${getRole.name}`);
			}else if(message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).removeRole(getRole.id);
				suc(message, `Successfully remove from ${userM.user.username} role ${getRole.name}`);
			}
		}else if(args[1] == 'humans') {
			if(!args[2]) return err(message, `Use ${prefix}help for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest then my role.`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return err(message, `No one haven't ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var membersRole = message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
						message.guild.member(m).addRole(getRole.id);
					});
					setTimeout(() => {
						message1.edit({
							embed: new Discord.RichEmbed().setAuthor(`Successfully give ${membersRole} member(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
						});
					}, 15000);
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest then my role.`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return err(message, `No one have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var membersRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
						message.guild.member(m).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from ${membersRole} member(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 15000)
					});
				});
			}else err(message, `Use ${prefix}help for more informations.`);
		}else if(args[1] === 'bots') {
		let notArgs = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL)
			if(!args[2]) return message.channel.send(notArgs);
			if(!args[3]) return message.channel.send(notArgs);
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(args[2] === 'add') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
				if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
				let botsSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)
				message.channel.send(botsSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))
					let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let give = msg.createReactionCollector(giveHim, { time: 60000 });
					let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
					give.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
							message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
								message.guild.member(b).addRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
								}, 10000)
							});
						});
					});
					dontGive.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}else if(args[2] === 'remove') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
				if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
				let humansSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)
				message.channel.send(humansSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))
					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let remove = msg.createReactionCollector(removeRole, { time: 60000 });
					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
							message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
								message.guild.member(b).removeRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
								}, 10000)
							});
						});
					});
					dontRemove.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}
		}else if(args[1] === 'all') {
			let notArgs = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL)
			if(!args[2]) return message.channel.send(notArgs);
			if(!args[3]) return message.channel.send(notArgs);
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(args[2] === 'add') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
				let allSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)
				message.channel.send(allSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))
					let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let give = msg.createReactionCollector(giveAll, { time: 60000 });
					let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
					give.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
							message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
								message.guild.member(m).addRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
								}, 10000)
							});
						});
					});
					dontGive.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}else if(args[2] === 'remove') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
				let allSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)
				message.channel.send(allSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))
					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.
					let remove = msg.createReactionCollector(removeRole, { time: 60000 });
					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
					remove.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
							message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
								message.guild.member(m).removeRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
								}, 10000)
							});
						});
					});
					dontRemove.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}
		}
	}
	
	if(command == prefix + 'ban') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return err(message, "I dont have Ban Members permission.");
		if(!args[1]) return err(message, "Mention the member to give him ban.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give ban to yourself.");
		if(message.guild.member(client.user).highestRole.position <= message.guild.member(userM.user).highestRole.position) return err(message, `I cant banned ${userM.user.username}.`);
		var reason = message.content.split(' ').slice(2).join(' ');
		if(!reason) reason = 'No reason given.';
		message.guild.member(userM.user).ban({
			reason: reason
		});
		suc(message, `Successfully banned ${userM.user.username}.`);
	}
	
	if(command == prefix + 'mute') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
		if(!args[1]) return err(message, "Mention the member to give him mute.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give mute to yourself.");
		if(userM.user.bot) return err(message, "You cant give mute to bot.");
		if(message.guild.member(userM.user).hasPermission('ADMINISTRATOR')) return err(message, `I cant give to ${userM.user.username} mute.`);
		var muteRole = message.guild.roles.find(r => r.name == 'Muted');
		if(!muteRole) return err(message, "I cant find role with name Muted.");
		if(message.guild.member(userM.user).roles.has(muteRole.id)) return err(message, `${userM.user.username} already muted.`);
		message.guild.member(userM.user).addRole(muteRole.id);
		suc(message, `Successfully give ${userM.user.username} Muted.`);
	}
	
	if(command == prefix + 'unmute') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
		if(!args[1]) return err(message, "Mention the member to unmute him.");
		if(!userM) return err(message, "I cant find the member.");
		var muteRole = message.guild.roles.find(r => r.name == 'Muted');
		if(!message.guild.member(userM.user).roles.has(muteRole.id)) return err(message, `${userM.user.username} is not muted.`);
		message.guild.member(userM.user).removeRole(muteRole.id);
		suc(message, `Successfully remove muted from ${userM.user.username}.`);
	}
	
	if(command == prefix + 'kick') {
		if(!message.member.hasPermission('KICK_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return err(message, "I dont have Kick Members permission.");
		if(!args[1]) return err(message, "Mention the member to give him kick.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give kick to yourself.");
		if(message.guild.member(client.user).highestRole.position <= message.guild.member(userM.user).highestRole.position) return err(message, `I cant kicked ${userM.user.username}.`);
		message.guild.member(userM.user).kick();
		suc(message, `Successfully kicked ${userM.user.username}.`);
	}
});

client.login(process.env.BOT_TOKEN);
