import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('mute')
  .setDescription('Mette in timeout un utente')
  .addUserOption(option => 
    option.setName('utente').setDescription('Utente da mutare').setRequired(true)
  )
  .addIntegerOption(option => 
    option.setName('minuti').setDescription('Durata in minuti del timeout').setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const utente = interaction.options.getUser('utente');
  const minuti = interaction.options.getInteger('minuti');
  const membro = await interaction.guild.members.fetch(utente.id);
  const durata = minuti * 60 * 1000;

  await membro.timeout(durata, 'Timeout assegnato');
  await interaction.reply(`🔇 ${utente.tag} è stato messo in timeout per ${minuti} minuti.`);
}
