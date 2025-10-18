const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quote")
        .setDescription("Mostra un messaggio casuale della chat"),
    async execute(interaction) {
        try {
            const messages = await interaction.channel.messages.fetch({ limit: 100 });
            const userMessages = messages.filter(m => !m.author.bot && m.content);

            if (userMessages.size === 0) {
                return interaction.reply("❌ Non ci sono messaggi validi da quotare!");
            }

            const randomMsg = userMessages.random();

            const embed = new EmbedBuilder()
                .setColor(0xffcc00)
                .setTitle("💬 Quote casuale")
                .setDescription(randomMsg.content)
                .setFooter({ text: `Autore: ${randomMsg.author.tag}` })
                .setTimestamp(randomMsg.createdAt);

            await interaction.reply({ embeds: [embed] });
        } catch (err) {
            console.error(err);
            await interaction.reply("⚠️ Errore durante il recupero dei messaggi.");
        }
    }
};
