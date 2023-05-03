const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secretest')
		.setDescription('biggest secret that exist'),
	async execute(interaction) {
		await interaction.reply('wait');
        await wait (5000);
        await interaction.editReply('https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif');
	},
};