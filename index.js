const dotenv = require("dotenv");


const { Collection, Formatters, Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const discord = require ("discord.js")



const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const currency = new Collection();

dotenv.config()



client.once("ready", async () => {
  console.log("Bot has Logged In :o");
  client.user.setStatus('dnd');
  client.user.setActivity('Amogus', { type: 'WATCHING' });
});

// client.on('messageCreate', async message => {
// 	if (message.author.bot) return;
// 	currency.add(message.author.id, 1);
// });



client.login(process.env.TOKEN);
