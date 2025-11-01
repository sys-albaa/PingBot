require("dotenv").config();
const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
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
const commands = [];

for (const file of commandFiles) {
  const command = require(file);
  if (!command.data || !command.execute) continue;
  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

// ----------------- Registrazione comandi globali -----------------
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("⏳ Registrazione comandi...");
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    console.log("✅ Comandi registrati!");
  } catch (error) {
    console.error("❌ Errore durante il deploy dei comandi:", error);
  }
})();

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

// ----------------- Login -----------------
client.login(process.env.TOKEN);
