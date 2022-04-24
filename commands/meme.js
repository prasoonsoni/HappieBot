const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = require('node-fetch-commonjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Replies with Meme!'),
    async execute(interaction) {
        const response = await fetch("https://meme-api.herokuapp.com/gimme");
        const data = await response.json();
        const meme = data.preview[3];
        await interaction.reply(meme);
    },
};

