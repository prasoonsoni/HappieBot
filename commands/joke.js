const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = require('node-fetch-commonjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Replies with Joke!'),
    async execute(interaction) {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        const joke = data.value;
        await interaction.reply(joke);
    },
};