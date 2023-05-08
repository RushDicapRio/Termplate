const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

let client;

function createClient() {
    client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers
        ]
    });
    
    client.on('ready', () => {
        client.user.setActivity({
            name: "Nebula Streaming",
            type: ActivityType.Streaming,
            url: "https://twitch.tv/shoqapikghost",
        });

        console.log(`Connecté a ${client.user.tag}`);
    });

    return client;
}

exports.createClient = createClient;