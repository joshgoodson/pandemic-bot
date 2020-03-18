module.exports = {
  name: "kick",
  description: "Kick a user from the server.",
  guildOnly: true,
  execute(msg, cmd, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply("Please tag a valid user!");
    }
  }
};
