# Introduction
This is a bot for highlight code and retrieves as an image. You can send your code to the bot and this is magically highlighted in an image that you can share with your mates!

# Usage
The bot is available in Telegram [here](https://t.me/pretty_code_bot)
Send your message as follows:
- First, the language
- Second, the code
- Example:
```
javascript
function greet(name) {
  console.log('Hello, ' + name)
}
```

# Setup
To run your Telegram bot based on this repo, follow the next steps:
1. Create a token for Telegram Bots API with [BotFather](https://t.me/BotFather)
2. Create your `.env` file based on `.env.example`
3. Change the env vars according to your bot
   1. **TELEGRAM_BOT_TOKEN**: Token retrieved by BotFather
   2. **WEBHOOK_URL**: Webhook where Telegram send the updates (new messages or actions from users)
   3. **SERVER_URL**: URL for mapping files (code screenshots) for send
   4. **PORT**: The port where you want the bot to start

# Run
## Install dependencies:
```bash
$ yarn
```
The server uses prismjs to highlight the code and puppeteer allows taking a screenshot of the result.

## Run on development
```bash
yarn dev
```
You could use ngrok for development purposes

## Run on production
First, we need to build the project:
```bash
yarn build
```
Second, start the server in the compiled folder:
```bash
node dist/index.js
```

# ToDo
- [ ] Add padding to the exported images
- [ ] Add custom themes
- [ ] Add more languages
- [ ] Capacity for edit images for edited messages
- [ ] Inline mode