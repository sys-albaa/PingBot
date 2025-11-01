import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('kick')
  .setDescription('Espelle un utente dal server')
  .addUserOption(option => 
    option.setName('utente').setDescription('Utente da espellere').setRequired(true)
  )
  .addStringOption(option => 
    option.setName('motivo').setDescription('Motivo dell’espulsione')
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);

export async function execute(interaction) {
  const utente = interaction.options.getUser('utente');
  const motivo = interaction.options.getString('motivo') ?? 'Nessun motivo specificato';
  const membro = await interaction.guild.members.fetch(utente.id);
  await membro.kick(motivo);
  await interaction.reply(`👢 ${utente.tag} è stato espulso. Motivo: ${motivo}`);
}
