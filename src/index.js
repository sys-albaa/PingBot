require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// ----------------- Caricamento comandi -----------------
client.commands = new Map();

function getCommandFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap(entry => {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) return getCommandFiles(res);
    return entry.name.endsWith(".js") ? [res] : [];
  });
  return files;
}

const commandFiles = getCommandFiles(path.join(__dirname, "commands"));
for (const file of commandFiles) {
  const command = require(file);
  if (command.data && command.execute) {
    client.commands.set(command.data.name, command);
  }
}

// ----------------- Evento ready -----------------
client.once("ready", () => {
  console.log(`🤖 Bot online come ${client.user.tag}`);
});

// ----------------- Gestione comandi -----------------
client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: "⚠️ Errore durante l'esecuzione del comando.", ephemeral: true });
  }
});

client.login(process.env.TOKEN);
