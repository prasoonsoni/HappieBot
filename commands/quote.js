const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = require('node-fetch-commonjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Replies with Quote!'),
    async execute(interaction) {
        const response = await fetch("https://zenquotes.io/api/quotes");
        const data = await response.json();
        const quote = data[0].q
        await interaction.reply(quote);
    },
};

