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
			.setColor('GREEN')
			.addField(`(1) ${prefix}ban`, '`The role of the bot must be higher than the person to be banned and must have permission to ban members.`')
			.addField(`(2) ${prefix}kick`, '`The role of the bot must be higher than the person to be kicked and must have permission to kick members.`')
			.addField(`(3) ${prefix}role`, '`The role of bot must be higher than the role mentioned and must have permission to give the roles.`')
			.addField(`(4) ${prefix}mute`, '`The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.`')
			.addField(`(5) ${prefix}unmute`, '`The mentioned member must have muted to unmute him.`')
			.setTimestamp()
			.setFooter(`Use ${prefix}help <command> for more informations.`, "https://media1.picsearch.com/is?6-_gwqS1fu7CGInI2gbrjFizd6p1YVcMfLWzrF66i2Y&height=289");
			message.channel.send({
				embed: help
			});
		}else if(args[1] == 'role') {
			const role = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription('The role of bot must be higher than the role mentioned and must have permission to give the roles.\n')
			.addField(`${prefix}role <member> <role>`, '`if the member has the role, the bot will be remove it, but if haven\'t the role, the bot will give him.`')
			.addField(`${prefix}role humans add <role>`, '`Give all human(s) the role.`')
			.addField(`${prefix}role humans remove <role>`, '`Remove the role from all human(s).`')
			.addField(`${prefix}role bot add <role>`, '`Give all bot(s) the role.`')
			.addField(`${prefix}role bot remove <role>`, '`Remove from all bot(s) the role.`')
			.addField(`${prefix}role all add <role>`, '`Give all member(s) the role.`')
			.addField(`${prefix}role all remove <role>`, '`Remove from all member(s) the role.`')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: role
			});
		}else if(args[1] == 'ban') {
			const ban = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Ban Command.')
			.setColor('GREEN')
			.setDescription('The role of the bot must be higher than the person to be banned and must have permission to ban members.\n')
			.addField(`-ban <member> <reason>`, 'Banned the member by id or mention and you dont need to type the reason.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: ban
			});
		}else if(args[1] == 'kick') {
			const kick = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Kick Command.')
			.setColor('GREEN')
			.setDescription('The role of the bot must be higher than the person to be kicked and must have permission to kick members.\n')
			.addField(`-kick <member>`, 'Kicked the member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: kick
			});
		}else if(args[1] == 'mute') {
			const mute = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Mute Command.')
			.setColor('GREEN')
			.setDescription('The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.\n')
			.addField(`-mute <member>`, 'Muted member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: mute
			});
		}else if(args[1] == 'unmute') {
			const unmute = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Unmute Command.')
			.setColor('GREEN')
			.setDescription('The mentioned member must have muted to unmute him.\n')
			.addField(`-unmute <member>`, 'Unmuted member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: unmute
			});
		}else {
			err(message, "Unkown command.");
		}
	}
	
	if(message.content == 'رابط') message.author.send('https://discord.gg/vK7Nash').catch(error => err(message, "You must open your DM for link."));
	
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
			if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
			if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
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
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
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
							embed: new Discord.RichEmbed().setAuthor(`Successfully give ${membersRole} human(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
						});
					}, 15000);
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
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
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from ${membersRole} human(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 15000)
					});
				});
			}else err(message, `Use ${prefix}help for more informations.`);
		}else if(args[1] === 'bots') {
			if(!args[2]) return err(message, `Use ${prefix}help for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return err(message, `No bot haven't ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var botsRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
						message.guild.member(b).addRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully give ${botsRole} bot(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 10000);
					});
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return err(message, `No bot have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var botsRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
						message.guild.member(b).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from ${botsRole} bot(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 10000)
					});
				});
			}else err(message, `Use ${prefix}help for more informations.`);
		}else if(args[1] === 'all') {
			if(!args[2]) return err(message, `Use ${prefix}help for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return err(message, `No one haven\'t ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
						message.guild.member(m).addRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully give all role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 20000);
					});
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return err(message, `No one have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
						message.guild.member(m).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from all role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 20000)
					});
				});
			}else err(message, `Use ${prefix}help for more informations.`);
		}
	}
	
	if(command == prefix + 'bc') {
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
		var argsBC = message.content.split(' ').slice(1).join(' ');
		if(!argsBC) return err(message, "Type the message to send.");
		let timer = new Discord.RichEmbed()
		.setTitle(`:timer: Please wait a few seconds ..`)
		.setColor('#d3c325');
		message.channel.send({
			embed: timer
		}).then(msg => {
			message.guild.members.filter(m => !m.user.bot).forEach(m => {
				m.send(argsBC.replace(/[user]/g, m)).catch(err => console.log(err));
			});
			setTimeout(() => {
				msg.edit({
					embed: new Discord.RichEmbed().setAuthor(`Successfully sent the message to ${message.guild.members.filter(m => !m.user.bot).size}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
				});
			}, 20000);
		});
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
	
	if(command == prefix + 'avatar') {
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(userM) {
			var avatarUr = userM.user.avatarURL;
			var nameMe = userM.user.username;
			var colorRole = userM.highestRole.hexColor;
		}else {
			var avatarUr = message.author.avatarURL;
			var nameMe = message.author.username;
			var colorRole = message.member.highestRole.hexColor;
		}
		var avatar = new Discord.RichEmbed()
		.setAuthor(`${nameMe}'s Avatar`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
		.setColor(colorRole)
		.setImage(avatarUr);
		message.channel.send({
			embed: avatar
		});
	}
});

client.login(process.env.BOT_TOKEN);
