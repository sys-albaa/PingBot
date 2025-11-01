import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('unmute')
  .setDescription('Rimuove il timeout da un utente')
  .addUserOption(option => 
    option.setName('utente').setDescription('Utente da riattivare').setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const utente = interaction.options.getUser('utente');
  const membro = await interaction.guild.members.fetch(utente.id);

  await membro.timeout(null);
  await interaction.reply(`🔊 ${utente.tag} è stato riattivato.`);
}
