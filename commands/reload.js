module.exports = {
  name: "reload",
  description: "Reloads a command",
  args: true,
  execute(msg, cmd, args) {
    const commandName = args[0].toLowerCase();
    const command =
      msg.client.commands.get(commandName) ||
      msg.client.commands.find(
        cmd => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command)
      return msg.channel.send(
        `There is no command with name or alias \`${commandName}\`, ${msg.author}!`
      );

    delete require.cache[require.resolve(`./${commandName}.js`)];

    try {
      const newCommand = require(`./${commandName}.js`);
      msg.client.commands.set(newCommand.name, newCommand);
    } catch (error) {
      console.log(error);
      msg.channel.send(
        `There was an error while reloading a command \`${commandName}\`:\n\`${error.msg}\``
      );
    }

    msg.channel.send(`Command \`${commandName}\` was reloaded!`);
  }
};
