const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown:5,
	data: new SlashCommandBuilder()
		.setName('amumu')
		.setDescription('Tells you who is the best Amumu player ever'),
	async execute(interaction) {
		await interaction.reply('https://www.leagueofgraphs.com/summoner/champions/amumu/eune/sonilboss/soloqueue');
	},
};