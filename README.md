# PingBot

🤖 **PingBot** is a versatile Discord bot designed to provide useful and entertaining commands for your Discord server. Built with **Discord.js v14** and featuring modern slash command support.

---

## ✨ Features

- **`/ping`** → Responds with "Pong!" to test bot responsiveness
- **`/uptime`** → Displays how long the bot has been online
- **`/coinflip`** → Flips a coin (Heads or Tails)
- **`/help`** → Shows all available commands
- **`/addquote`** → Adds a new quote to the collection (`/addquote "your text"`)
- **`/quote`** → Displays a random quote from the collection

---

## 📁 Project Structure

```
pingbot/
├── src/
│   ├── commands/
│   │   ├── ping.js
│   │   ├── uptime.js
│   │   ├── coinflip.js
│   │   ├── help.js
│   │   ├── addquote.js
│   │   └── quote.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Prerequisites

- [Node.js LTS](https://nodejs.org) (recommended version ≥ 22.x)
- NPM (automatically installed with Node.js)
- A Discord bot created on [Discord Developer Portal](https://discord.com/developers/applications)

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_bot_client_id_here
   GUILD_ID=your_server_id_here
   ```

4. **Register slash commands:**
   ```bash
   node src/deploy-commands.js
   ```

5. **Start the bot:**
   ```bash
   npm start
   ```

---

## 🔧 Configuration

### Bot Setup
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to the "Bot" section
4. Create a bot and copy the token
5. Enable the following bot permissions:
   - Send Messages
   - Use Slash Commands
   - Read Message History

### Server Setup
1. Invite your bot to your Discord server
2. Use the OAuth2 URL generator with the following scopes:
   - `bot`
   - `applications.commands`

---

## 📝 Usage

Once the bot is running, you can use any of the available slash commands in your Discord server:

- Type `/` in any channel to see available commands
- Use `/help` to get a list of all commands
- Commands are automatically registered and ready to use

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ for the Discord community**