// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('HappieBot is Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'meme') {
        await interaction.reply('Sending Meme!');
    } else if (commandName === 'joke') {
        await interaction.reply('Sending Joke!');
    } else if (commandName === 'quote') {
        await interaction.reply('Sending Quote!');
    }
});

// Login to Discord with your client's token
client.login(token);