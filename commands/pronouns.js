module.exports = {
    name: "pronouns",
    description: "Add or change a user's pronouns.",
    args: true,
    execute(msg, cmd, args) {
        // commands: add, show, delete, help
        switch (cmd) {
            case 'add':
                break;
            case 'show':
                break;
            case 'delete':
                break;
            default:
                msg.channel.send(`Sorry, I don't understand the command ${cmd}.`)
        }
    }
}