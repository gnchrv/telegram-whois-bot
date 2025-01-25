# A Simple Whois Bot for Telegram

This is a small bot designed to provide information about the user interacting with it and the Telegram chat where the interaction takes place. Can be useful to check the ID of your account or one of your chats.

Here’s an example of the bot’s response:

```jsonc
{
  // Information about the user
  "from": {
    "id": 000000,
    "is_bot": false,
    "first_name": "Harry",
    "last_name": "Potter",
    "username": "harrypotter",
    "language_code": "en",
    "is_premium": true
  },

  // Information about the chat
  "chat": {
    "id": -000000000000,
    "title": "Gryffindor Alumni",
    "type": "supergroup"
  }
}
```

### How to Use
1. Clone this repository
2. Install the dependencies by running `npm install -D`
3. Create the `.env` file in the root directory and add the token of your own Telegram bot:
```env
TELEGRAM_BOT_TOKEN='XXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```
4. Build the project by running `npm run build`
5. Launch the bot `npm start`
