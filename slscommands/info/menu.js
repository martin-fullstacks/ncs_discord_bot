module.exports = {
    name: "menu",
    description: "Messsage to pop the menu.",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],

    run: async (client, interaction, args) => {
        const {
            MessageActionRow,
            MessageSelectMenu,
            MessageEmbed,
        } = require("discord.js");

        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Choose a category.")
                .addOptions([
                    {
                        label: "Test role 1",
                        description: "Add role 1",
                        value: "first_option",
                    },
                    {
                        label: "Test role 2",
                        description: "Add role 2",
                        value: "second_option",
                    },
                ])
        );

        const embed = new MessageEmbed()
            .setDescription(
                `This is the description of the menu, this is a system to give some roles.`
            )
            .setColor("36393F");

        await interaction.followUp({
            emebeds: [embed],
            components: [row],
        });
    },
};
