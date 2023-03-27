require("dotenv").config();

let ballReply = ["yes","no","maybe","consider it your last","don't do it","do it","your mom"]


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

client.login(process.env.BOT_TOKEN)

client.once(Events.ClientReady, onReady);

function onReady(c) {
console.log(`Ready! Logged in as ${c.user.tag}`);
};


client.on(Events.MessageCreate, onMessage);
    function onMessage(msg){
        if(msg.content.includes("!ask")){
            let i = Math.floor(Math.random() * ballReply.length);
            msg.reply(ballReply[i])
        }
        if(msg.content.includes("!roll")){
            let i = Math.floor(Math.random() * (max - min + 1) + min)
            msg.reply(i)

        }
}