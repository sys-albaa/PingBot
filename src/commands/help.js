const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Mostra i comandi disponibili"),
    async execute(interaction) {
        await interaction.reply(
            "📜 Comandi disponibili:\n`/ping`, `/uptime`, `/coinflip`, `/addquote`, `/quote`"
        );
    }
};
