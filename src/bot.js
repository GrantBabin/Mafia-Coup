class Bot {
  constructor(client, config) {
    this.client = client;
    this.config = config;

    this.commandPrefix = this.commandPrefix;

    loadCommands();
    loadListenerS();
  }

  loadCommands() {
    this.commands = [];
  }

  loadListeners() {
    this.listeners = [];
  }
}

export default Bot;
