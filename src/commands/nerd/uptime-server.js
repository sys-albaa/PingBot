import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import os from 'os';

export const data = new SlashCommandBuilder()
  .setName('uptime-server')
  .setDescription('Mostra da quanto tempo è acceso il server Debian');

export async function execute(interaction) {
  const uptimeSec = os.uptime();
  const hours = Math.floor(uptimeSec / 3600);
  const minutes = Math.floor((uptimeSec % 3600) / 60);
  const seconds = Math.floor(uptimeSec % 60);

  const embed = new EmbedBuilder()
    .setTitle('⏱️ Uptime server')
    .setColor('Purple')
    .setDescription(`${hours}h ${minutes}m ${seconds}s`);

  await interaction.reply({ embeds: [embed] });
};
