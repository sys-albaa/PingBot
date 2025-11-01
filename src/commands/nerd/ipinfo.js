import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import fetch from 'node-fetch';

export const data = new SlashCommandBuilder()
  .setName('ipinfo')
  .setDescription('Mostra informazioni su un indirizzo IP')
  .addStringOption(option =>
    option.setName('ip')
      .setDescription('Indirizzo IP da controllare')
      .setRequired(true)
  );

export async function execute(interaction) {
  const ip = interaction.options.getString('ip');

  try {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();

    if (data.status !== 'success') {
      return interaction.reply({ content: '❌ IP non valido o non trovato.', ephemeral: true });
    }

    const embed = new EmbedBuilder()
      .setTitle(`🌐 Info su ${ip}`)
      .setColor('Blue')
      .addFields(
        { name: 'Paese', value: `${data.country} (${data.countryCode})`, inline: true },
        { name: 'Città', value: data.city || 'N/A', inline: true },
        { name: 'ISP', value: data.isp || 'N/A', inline: true },
        { name: 'Organizzazione', value: data.org || 'N/A', inline: true },
        { name: 'Zona oraria', value: data.timezone || 'N/A', inline: true },
        { name: 'Lat/Lon', value: `${data.lat}, ${data.lon}`, inline: true }
      );

    await interaction.reply({ embeds: [embed] });
  } catch (err) {
    await interaction.reply({ content: `❌ Errore: ${err.message}`, ephemeral: true });
  }
};
