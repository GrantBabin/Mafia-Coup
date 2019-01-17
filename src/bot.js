class Bot {
  constructor(client, config) {
    this.client = client;
    this.config = config;

    this.commandPrefix = this.config.commandPrefix;

    loadCommands();
    loadListenerS();
  }

  loadCommands() {
    this.commands = [];

    for (const cmdName of this.config.botCommands) {
      const command = require(`./commands/${cmdName}`);
      
      this.commands.push(new Command(this, this.commandPrefix));
    }
  }

  loadListeners() {
    this.listeners = [];

    for (const listenerName of this.config.botListeners) {
      const listener = require(`./listeners/${listenerName}`);
      
      this.listeners.push(new listener());
    }
  }
}

export default Bot;
