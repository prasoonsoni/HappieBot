// Require the necessary discord.js classes
const fs = require('node:fs')
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('HappieBot is Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) {
        await interaction.reply(command + " is not a coomand.")
    }

    try {
        await command.execute(interaction);
    } catch (err) {
        console.log(err)
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Login to Discord with your client's token
client.login(token);