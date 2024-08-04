const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to the Clicker Game!');
});

bot.command('points', (ctx) => {
  ctx.reply('Your points: 0');
});

bot.launch();

console.log('Bot is running...');
