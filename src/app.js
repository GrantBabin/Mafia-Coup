const Discord = require('discord.js');
const config = require('config');

const client = new Discord.Client();
const bot = new Bot(client, config);

client.login(config.botToken);
