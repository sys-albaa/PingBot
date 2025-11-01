import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ban')
  .setDescription('Banna un utente dal server')
  .addUserOption(option => 
    option.setName('utente').setDescription('Utente da bannare').setRequired(true)
  )
  .addStringOption(option => 
    option.setName('motivo').setDescription('Motivo del ban')
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);

export async function execute(interaction) {
  const utente = interaction.options.getUser('utente');
  const motivo = interaction.options.getString('motivo') ?? 'Nessun motivo specificato';
  await interaction.guild.members.ban(utente.id, { reason: motivo });
  await interaction.reply(`⛔ ${utente.tag} è stato bannato. Motivo: ${motivo}`);
}
