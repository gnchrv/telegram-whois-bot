# A Simple Whois Bot for Telegram

This is a small bot designed to provide information about the user interacting with it and the Telegram chat where the interaction takes place. Here’s an example of the bot’s response.

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
