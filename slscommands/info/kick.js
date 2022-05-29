const {
    Client,
    CommandInteraction,
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    Message,
} = require("discord.js");

const wait = require("util").promisify(setTimeout);

module.exports = {
    name: "kick",
    description: "Kick a user based on a reason!",
    permissions: ["KICK_MEMBERS"],
    type: 1,
    options: [
        {
            name: "target",
            description: "specify user",
            required: true,
            type: "USER",
        },
        {
            name: "reason",
            description: "specify reason",
            required: true,
            type: "STRING",
        },
    ],

    run: async (client, interaction, args) => {

        const target = interaction.options.getUser("target");
        const reason = interaction.options.getString("reason");
        const member = interaction.guild.members.cache.get(target.id);

        console.log(member.kickable);
        console.log(target);

        if (!member.kickable)
            return interaction.followUp("Cette utilisateur ne peut pas etre kick!");
        member.kick(reason);
        await interaction.channel.send(
            `User ${target} successfully kicked for: ${reason}`
        );
    },
};
