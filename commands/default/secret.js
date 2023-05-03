const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secret')
		.setDescription('It will tell a secret to only you!'),
	async execute(interaction) {
		await interaction.reply({content:'https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif',ephemeral:true});
	},
};