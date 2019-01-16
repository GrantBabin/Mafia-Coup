class MessageListener {
  constructor(bot) {
    client.on("message" async(message) => {
      if(message.author.bot) return;
      if(message.content.indexOf(bot.commandPrefix) !== 0) return;

      for(const cmd in bot.commands) {
        if(!cmd.isValid(message)) return;
      
        try {
          const res = cmd.process(message);

          message.respond(res);
        } catch(e) {
          console.log(e);
        }
      } 
    })
  }
}

export default MessageListener; 
