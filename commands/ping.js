module.exports = {
  name: "ping",
  description: "Ping!",
  cooldown: 5,
  execute(msg, cmd, args) {
    msg.reply("pong");
  }
};
