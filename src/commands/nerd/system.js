import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import os from 'os';

export const data = new SlashCommandBuilder()
  .setName('system')
  .setDescription('Mostra l’utilizzo di CPU e RAM del server');

export async function execute(interaction) {
  const cpuLoad = os.loadavg()[0].toFixed(2); // media 1 minuto
  const totalMem = (os.totalmem() / 1024 / 1024).toFixed(0);
  const freeMem = (os.freemem() / 1024 / 1024).toFixed(0);
  const usedMem = totalMem - freeMem;

  const embed = new EmbedBuilder()
    .setTitle('🖥️ Stato server')
    .setColor('Green')
    .addFields(
      { name: 'CPU Load (1 min)', value: cpuLoad.toString(), inline: true },
      { name: 'RAM usata', value: `${usedMem} MB / ${totalMem} MB`, inline: true }
    );

  await interaction.reply({ embeds: [embed] });
};
