const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Lancia una moneta"),
    async execute(interaction) {
        const result = Math.random() < 0.5 ? "🪙 Testa" : "🪙 Croce";
        await interaction.reply(result);
    }
};
