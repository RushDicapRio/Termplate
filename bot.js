const { createClient } = require('./utils/client');
const settings = require('./settings.json');

function startBot() {
    const client = createClient();

    client.on('messageCreate', (message) => {
        if (message.author.bot) return;

        if (message.channel.id !== settings.channel) return;
 
    })

    client.login(settings.token);
}

exports.startBot = startBot;