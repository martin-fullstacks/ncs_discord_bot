const {
    MessageActionRow,
    MessageSelectMenu,
    MessageEmbed,
} = require("discord.js");

module.exports = {
    name: "menu",
    description: "Messsage to pop the menu.",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],

    run: async (client, interaction, args, config) => {


        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Choose a category.")
                .addOptions([
                    {
                        label: "Test role 1",
                        description: "Add role 1",
                        value: config.roles[1],
                    },
                    {
                        label: "Test role 2",
                        description: "Add role 2",
                        value: config.roles[2],
                    },
                    {
                        label: "Test role 3",
                        description: "Add role 3",
                        value: config.roles[3],
                    },
                ])
        );

        const embed = new MessageEmbed()
            .setDescription(
                `This is the description of the menu, this is a system to give some roles.`
            )
            .setColor("36393F");

        await interaction.reply({
            emebeds: [embed],
            components: [row],
        });
    },
};
