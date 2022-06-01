require("dotenv").config();
const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({
  allowedMentions: {
    parse: ["roles", "users"]
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES",
  ],
});
module.exports = client;

const { setTimeout: sleep } = require('node:timers/promises');

const config = require("./settings/config.json");
const prefix = config.prefix;

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");

["command_handler", "event_handler", "slash_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;
  if (interaction.customId === "select") {
    await interaction.deferUpdate();
    await sleep(1000);
    if (interaction.values[0] === "first_option") {
      const member = await interaction.guild.members.fetch(interaction.user.id);
      const role = interaction.guild.roles.cache.get(config.roles.role);

      if (
          interaction.member.roles.cache.some(
              (role) => role.id === config.roles.role
          )
      ) {
        return await interaction.followUp({
          content: "You have already this role !",
          ephemeral: true,
        });
        await member.roles.remove(role)
      }

      await member.roles.add(role);

      const embed_reply = new MessageEmbed().setDescription("Role added.");

      await interaction.followUp({
        embeds: [embed_reply],
        ephemeral: true,
      });
    } else if (interaction.values[0] === "second_option") {
      const member = await interaction.guild.members.fetch(interaction.user.id);
      const role = interaction.guild.roles.cache.get(config.roles.role2);

      if (
          interaction.member.roles.cache.some(
              (role) => role.id === config.roles.role2
          )
      ) {
        return await interaction.followUp({
          content: "You have already this role !",
          ephemeral: true,
        });
        await member.roles.remove(role2)
      }

      await member.roles.add(role);

      const embed_reply = new MessageEmbed().setDescription("Role added.");

      await interaction.followUp({
        embeds: [embed_reply],
        ephemeral: true,
      });
    }
  }
});


