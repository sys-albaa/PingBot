import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const commands = [];

// Percorso della cartella commands
const commandsPath = path.join(process.cwd(), 'src', 'commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
  const folderPath = path.join(commandsPath, folder);
  const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(folderPath, file);
    // Import dinamico dei comandi
    const command = await import(`file://${filePath}`);
    commands.push(command.data.toJSON());
  }
}

// Inizializza REST con token
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log(`🔄 Aggiornamento comandi per il server ${process.env.GUILD_ID}...`);
    
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log(`✅ Comandi registrati correttamente!`);
  } catch (error) {
    console.error('❌ Errore durante il deploy dei comandi:', error);
  }
})();
