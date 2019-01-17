import Command from "./command";

class Ping extends Command {
  constructor(bot, prefix) {
    this.cmd = "ping";

    super(bot, prefix);
  }

  process(message) {
    message.reply("pyonyang");
  }
}

export default Ping;
