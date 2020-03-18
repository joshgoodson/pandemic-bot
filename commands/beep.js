module.exports = {
  name: "beep",
  description: "Beep!",
  cooldown: 5,
  execute(msg, cmd, args) {
    msg.reply("Boop.");
  }
};
