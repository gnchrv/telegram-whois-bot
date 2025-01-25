import 'dotenv/config'
import { Bot, Context } from 'grammy'

// Intitialise a new bot
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN)

// Configure the bot
bot.use(async (context: Context) => {

    // Extract the information about the author and the chat
    const info = {
        from: context.from,
        chat: context.chat
    }

    // Stringify and format the information above
    const infoStr = JSON.stringify(info, null, 2)

    // Compose the message
    let message = `<b>About You and This Chat</b>\n`
    message += `Here’s the information shared with every bot you use, as well as details specific to this chat\n\n`
    message += `<pre><code class="JSON">${infoStr}</code></pre>`

    // Send the information back to the user
    await context.reply(message, { parse_mode: 'HTML' })
})

// Launch the bot
bot.start()