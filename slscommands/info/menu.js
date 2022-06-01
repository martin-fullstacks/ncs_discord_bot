const { CommandInteraction, Client, Message } = require("discord.js");
// const { config } = require("dotenv");
const wait = require("util").promisify(setTimeout);

module.exports = {
    name: "menu2",
    description: "ee",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],

    run: async (client, interaction, args, config) => {
        const {
            MessageActionRow,
            MessageSelectMenu,
            MessageEmbed,
        } = require("discord.js");

        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Choose a category.")
                .setMinValues(1)
                .setMaxValues(config.roles.length)
                .addOptions([
                    {
                        label: "Test role 1",
                        description: "Add role 1",
                        value: config.roles[0],
                    },
                    {
                        label: "Test role 2",
                        description: "Add role 2",
                        value: `${config.roles[1]}`,
                    },
                    {
                        label: "Test role 3",
                        description: "Add role 3",
                        value: `${config.roles[2]}`,
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
