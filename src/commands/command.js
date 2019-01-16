class Command() {
  isValid(msg) {
    const args = msg.cleanContent.slice(this.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    return this.aliases.indexOf(cmd) > -1;
  }
}
