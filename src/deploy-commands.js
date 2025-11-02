require("dotenv").config();
const { REST, Routes } = require("discord.js");
const fs = require("fs");
const path = require("path");

const commands = [];

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
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log(`⏳ Registrazione di ${commands.length} comandi...`);
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    console.log("✅ Comandi registrati con successo!");
  } catch (err) {
    console.error("❌ Errore durante il deploy:", err);
  }
})();
