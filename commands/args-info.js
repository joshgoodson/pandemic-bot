module.exports = {
  name: "args-info",
  description: "Command argument debugger",
  args: true,
  execute(msg, cmd, args) {
    msg.channel.send(`Command name: ${cmd}\nArguments: ${args}`);
  }
};
