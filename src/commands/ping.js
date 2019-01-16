import Command from "./command";

class Ping extends Command {
  constructor() {
    this.prefix = "ping";
  }

  process(message) {
    return "Pyonyang!";
  }
}

export default Ping;
