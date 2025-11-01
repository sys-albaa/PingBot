import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('clear')
  .setDescription('Cancella un numero di messaggi')
  .addIntegerOption(option => 
    option.setName('numero').setDescription('Numero di messaggi da cancellare').setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {
  const numero = interaction.options.getInteger('numero');
  const messaggi = await interaction.channel.bulkDelete(numero, true);
  await interaction.reply({ content: `🧹 Cancellati ${messaggi.size} messaggi.`, ephemeral: true });
}
