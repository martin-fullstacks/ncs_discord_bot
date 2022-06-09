const ms = require('ms');

module.exports = {
  name: 'mute',
  category: 'moderation',
  description: 'Mute a user for a duration with a reason!',
  permissions: ['MODERATE_MEMBERS'],
  usage: '/mute [user] [reason]',
  exemples: ['/mute @user#1234 spamming'],
  type: 1,
  options: [
    {
      name: 'target',
      description: 'User to mute',
      type: 'USER',
      required: true,
    },
    {
      name: 'duration',
      description: 'Duration of mute',
      type: 'STRING',
      required: true,
    },
    {
      name: 'reason',
      description: 'Reason of mute',
      type: 'STRING',
      required: true,
    },
  ],

  run: async (client, interaction, args) => {
    const target = interaction.options.getMember('target');
    const duration = interaction.options.getString('duration');
    const convertedTime = ms(duration);
    const reason = interaction.options.getString('reason');

    if (convertedTime > 1000 * 60 * 60 * 24 * 28) return interaction.reply('The duration must be less than 28 days!');
    if (!target.moderatable) return interaction.reply('This user cannot be muted!');
    if (!convertedTime) return interaction.reply('Specify a valid duration!');

    target.timeout(convertedTime, reason);

    await interaction.reply(`User ${target} was successfully muted, during : ${duration}, for: ${reason}`);

  },
};
