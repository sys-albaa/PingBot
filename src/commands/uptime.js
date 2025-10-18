const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("uptime")
        .setDescription("Mostra da quanto tempo il bot è online"),
    async execute(interaction) {
        const uptimeSeconds = Math.floor(process.uptime());
        const hours = Math.floor(uptimeSeconds / 3600);
        const minutes = Math.floor((uptimeSeconds % 3600) / 60);
        const seconds = uptimeSeconds % 60;

        await interaction.reply(`⏳ Uptime: ${hours}h ${minutes}m ${seconds}s`);
    }
};
