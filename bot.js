const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    	console.log(client.user.tag + ' Ready!');
	client.user.setActivity('Black Shop.', {
		type: "STREAMING",
		url: "https://www.twitch.tv/blackshop"
	});
});

var cooldown = new Set();
var points = {};

client.on('message', message => {
	if(message.author.bot) return;
	if(message.channel.type !== 'text') return;
	
	var prefix = '-';
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	
	if(message.channel.id == '522855663681011713' || message.channel.id == '523508359786266635' || message.channel.id == '522863535227666442' || message.channel.id == '522863573572255755' || message.channel.id == '522863680673677344') {
		   message.channel.send({
		   	file: "https://cdn.discordapp.com/attachments/522863573572255755/524701047646846987/5c9b75845f8fdb2e.png"
		   });
	}
	
	if(command == prefix + 'help') {
		if(!args[1]) {
			const help = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor('GREEN')
			.addField(`(1) ${prefix}ban`, '`The role of the bot must be higher than the person to be banned and must have permission to ban members.`')
			.addField(`(2) ${prefix}kick`, '`The role of the bot must be higher than the person to be kicked and must have permission to kick members.`')
			.addField(`(3) ${prefix}clear`, '`The member must have permission Manage Messages to use this command.`')
			.addField(`(4) ${prefix}customer`, '`The member must have role Seller Team to use this command.`')
			.addField(`(5) ${prefix}bc`, '`The member must have Administrator to use this command.`')
			.addField(`(6) ${prefix}points`, '`The member must have Manage Server permission to use this command.`')
			.addField(`(7) ${prefix}avatar`, '`Anyone can use this command.`')
			.addField(`(8) ${prefix}role`, '`The role of bot must be higher than the role mentioned and must have permission to give the roles.`')
			.addField(`(9) ${prefix}mute`, '`The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.`')
			.addField(`(10) ${prefix}unmute`, '`The mentioned member must have muted to unmute him.`')
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
		}else if(args[1] == 'points') {
			var points = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Points Command.')
			.setColor('GREEN')
			.setDescription('The member must have Manage Server to use this command.')
			.addField(`${prefix}points`, 'Show top 10 points.')
			.addField(`${prefix}points reset`, 'Reset all points.')
			.addField(`${prefix}points <member> +1`, 'Add to user points, you can add more.')
			.addField(`${prefix}points <member> -1`, 'Remove from user points, you can remove more.')
			.addField(`${prefix}points <member> 1`, 'Sets points for user.')
			.addField(`${prefix}points <member> reset`, 'Reset user points.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: points
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
		}else if(args[1] == 'clear') {
			const clear = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Clear Command.')
			.setColor('GREEN')
			.setDescription('The member must have permission Manage Messages to use this command.\n')
			.addField(`-clear <number>`, 'The number must from 2 to 100.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: clear
			});
		}else if(args[1] == 'customer') {
			const customer = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Customer Command.')
			.setColor('GREEN')
			.setDescription('The member must have role Seller Team to use this command.\n')
			.addField(`-customer <member>`, 'Give member role customer by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: customer
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
	
    	if(command == prefix + 'setplay') {
        	if(message.author.id !== '346066545107009537') return err(message, "Only ReFe can use this command.");
        	args = message.content.split(' ').slice(1).join(' ');
			if(!args) return err(message, "Please type the word to set.");
			if(args.length < 1 || args.length > 50) return err(message, "The words only between 1 to 50 characters.");
			message.delete();
			client.user.setActivity(args, {
				type: "PLAYING"
			});
			suc(message, `Successfully set (Playing) to (${args}).`);
    	}
	
	if(command == prefix + 'setlisten') {
       		if(message.author.id !== '346066545107009537') return err(message, "Only ReFe can use this command.");
	        args = message.content.split(' ').slice(1).join(' ');
		if(!args) return err(message, "Please type the word to set.");
		if(args.length < 1 || args.length > 50) return err(message, "The words only between 1 to 50 characters.");
		message.delete();
		client.user.setActivity(args, {
			type: "LISTENING"
		});
		suc(message, `Successfully set (Listening) to (${args}).`);
    	}
	
    	if(command == prefix + 'setwatch') {
        	if(message.author.id !== '346066545107009537') return err(message, "Only ReFe can use this command.");
        	args = message.content.split(' ').slice(1).join(' ');
		if(!args) return err(message, "Please type the word to set.");
		if(args.length < 1 || args.length > 50) return err(message, "The words only between 1 to 50 characters.");
		message.delete();
		client.user.setActivity(args, {
			type: "WATCHING"
		});
		suc(message, `Successfully set (Watching) to (${args}).`);
    	}
	
	if(command == prefix + 'setstream') {
        	if(message.author.id !== '346066545107009537') return err(message, "Only ReFe can use this command.");
        	args = message.content.split(' ').slice(1).join(' ');
		if(!args) return err(message, "Please type the word to set.");
		if(args.length < 1 || args.length > 50) return err(message, "The words only between 1 to 50 characters.");
		message.delete();
		client.user.setActivity(args, {
			type: "STREAMING",
            		url: "https://www.twitch.tv/blackshop"
		});
		suc(message, `Successfully set (Streaming) to (${args}).`);
	}
	
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
		var argsBC = message.content.split(' ').slice(1).join(' ');
		var x = 0;
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(cooldown.has(message.guild.id)) return err(message, "You must wait half hour to use this command again.");
		cooldown.add(message.guild.id);
		if(!argsBC) return err(message, "Type the message to send it.");
		message.delete();
		
		let timer = new Discord.RichEmbed()
		.setTitle(`:timer: Please wait a few seconds ..`)
		.setColor('#d3c325');
		message.channel.send({
			embed: timer
		}).then(message1 => {
			message.guild.members.filter(m => !m.user.bot).forEach(m => {
				m.send(argsBC).catch(err => x++);
			});
			setTimeout(() => {
				message1.edit({
					embed: new Discord.RichEmbed().setAuthor(`Successfully send the message to ${message.guild.members.filter(m => !m.user.bot).size} member(s)`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
				});
			}, 20000);
		});
		setTimeout(() => cooldown.delete(message.guild.id), 1800000);
	}
	
	if(command == prefix + 'points') {
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!args[1]) {
			if(!points) return err(message, "Added some points.");
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return err(message, "Added some points.");
			var x = 1;
			let pointsTop = new Discord.RichEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setColor('GREEN')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**${x++}.** <@${m.id}> | ${m.points}`).join('\n'))
			.setTimestamp()
			.setFooter(`By request of ${message.author.username}`, message.author.avatarURL);
			message.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points) return err(message, "No points to reset it.");
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return err(message, "No points to reset it.");
			points = {};
			suc(message, "Successfully reset all points.");
		}else if(userM) {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} Not have any points.`);
				suc(message, `${userM.user.username} have ${points[userM.user.id].points} points.`);
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.userbane} not have any points to reset it.`);
				points[userM.user.id].points = 0;
				suc(message, `Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return err(message, `${userM.user.username} has reach the maximum of points.`);
				if(!args[2]) return err(message, "Please type the number.");
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The maximum for add points 1million.");
				if(args[2] < 1) return err(message, "The minimum for add points 1.");
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				suc(message, `Successfully added ${args[2]} to ${userM.user.username} (${points[userM.user.id].points} Total).`);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} not have any points to remove.`);
				if(!args[2]) return err(message, "Please type the number.");
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The maximum for remove points 1million.");
				if(args[2] < 1) return err(message, "The minimum for remove points 1.");
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
				suc(message, `Successfully remove ${args[2]} from ${userM.user.username} (${points[userM.user.id].points} Total).`);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The miximum of points 1million.");
				if(args[2] < 1) return err(message, "The minimum of points 1.");
				if(points[userM.user.id].points == args[2]) return err(message, `${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
				suc(message, `Successfully set the points for ${userM.user.username} to ${args[2]}`);
			}else err(message, `Use ${prefix}help for more informations.`);
		}else err(message, `Use ${prefix}help for more informations.`);
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
	
	if(command == prefix + 'customer') {
		var sellersRole = message.guild.roles.get('501474737583554561');
		var customerRole = message.guild.roles.get('494159592683470849');
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
		if(!message.member.roles.has(sellersRole.id)) return err(message, "You dont have role Seller Team to use this command.");
		if(!userM) return err(message, "Mention the member to give him role Customer.");
		if(userM.user.bot) return err(message, "You cant give bot the role.");
		if(message.guild.member(userM.user).roles.has(customerRole.id)) return err(message, `${userM.user.username} already have role Customer.`);
		message.guild.member(userM.user).addRole(customerRole.id);
		suc(message, `Successfully give ${userM.user.username} role Customer.`);
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
	
	if(command == prefix + 'clear') {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return err(message, "I dont have Manage Messages permission.");
		if(!args[1]) args[1] = 100;
		if(args[1] && isNaN(args[1])) return err(message, "Must be a number.");
		if(args[1] > 100 || args[1] < 2) return err(message, "Choose number from 2 to 100.");
		message.channel.bulkDelete(args[1]).then(messages => {
			var suc = new Discord.RichEmbed()
    			.setAuthor(`Successfully delete ${messages.size} message.`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
			.setColor('GREEN');
			message.channel.send({
        			embed: suc
    			}).then(msg => msg.delete(2000));
		});
	}
});

function err(message, args) {
    var err = new Discord.RichEmbed()
    .setAuthor(args, "https://tse1.mm.bing.net/th?id=OIP.J-y_zWr6CiYBywhxuhKOVAHaHa&pid=15.1&P=0&w=300&h=300")
    .setColor('RED');
    message.channel.send({
        embed: err
    });
}
function suc(message, args) {
    var suc = new Discord.RichEmbed()
    .setAuthor(args, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
    .setColor('GREEN');
    message.channel.send({
        embed: suc
    });
}

client.login(process.env.BOT_TOKEN);
