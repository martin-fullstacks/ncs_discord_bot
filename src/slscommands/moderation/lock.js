const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'lock',
  category: 'moderation',
  description: 'Lock a channel for a role!',
  permissions: ['MANAGE_CHANNELS'],
  usage: '/lock [role]',
  exemples: ['/lock @role'],
  type: 1,
  options: [
    {
      name: 'role',
      description: 'Select role',
      type: 'ROLE',
      required: true,
    },
  ],

  run: async (client, interaction, args) => {
    const role = interaction.options.getRole('role');

    if (role.rawPosition > interaction.guild.me.roles.highest.rawPosition) return interaction.reply('The bot cannot lock the channel for this role!');

    await interaction.channel.permissionOverwrites.edit(`${role.id}`, { SEND_MESSAGES: false });

    const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(`🔒 The channel has been locked for ${role}`);

    await interaction.reply({ embeds: [embed] });
  },
};
