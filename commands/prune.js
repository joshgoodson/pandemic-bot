module.exports = {
  name: "prune",
  description: "Displays Users Avatar",
  execute(msg, cmd, args) {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return msg.reply("please enter a valid number");
    } else if (amount <= 1 || amount > 100) {
      return msg.reply("you need to input a number between 1 and 99.");
    }

    msg.channel.bulkDelete(amount, true).catch(err => {
      // console.error(err);
      msg.channel.send(
        `an error occurred trying to prune messages from this channel!\n\n${err.message}`
      );
    });
  }
};
