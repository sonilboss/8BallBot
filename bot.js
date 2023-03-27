const token = 'MTA4ODAxMzQyNjU5MDIzMjY0Ng.GtR5uD.0wryED1BWQ4rwA7OryZv5xs_YS00I8aD9Xz_DM'

console.log("I am a bot, bip bop")
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.DirectMessages,
GatewayIntentBits.GuildMessages,
],
partials: ['MESSAGE', 'CHANNEL']
});

client.login(token);

client.once(Events.ClientReady, onReady);

function onReady(c) {
console.log(`Ready! Logged in as ${c.user.tag}`);
};

client.on(Events.MessageCreate, onMessage);


    function onMessage(msg){
        if(msg.content.includes("du er grim")){
            msg.reply("Hold din fucking kæft dit røvhul")
        }
    

}