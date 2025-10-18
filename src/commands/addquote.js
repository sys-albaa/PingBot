const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("addquote")
        .setDescription("Aggiungi una citazione")
        .addStringOption(option => 
            option.setName("testo")
                  .setDescription("La frase da aggiungere")
                  .setRequired(true)
        ),
    async execute(interaction) {
        const quoteText = interaction.options.getString("testo");

        const embed = new EmbedBuilder()
            .setColor(0x00ffcc)
            .setTitle("✨ Nuova Quote!")
            .setDescription(`"${quoteText}"`)
            .setFooter({ text: `Aggiunto da ${interaction.user.tag}` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
