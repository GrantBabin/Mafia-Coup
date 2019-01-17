class MessageListener {
  constructor(bot) {
    bot.client.on("message" async(message) => {
      if(message.author.bot) return;
      if(message.content.indexOf(bot.commandPrefix) !== 0) return;

      for(const cmd in bot.commands) {
        if(!cmd.isValid(message)) return;
      
        try {
          cmd.process(message);
        
        } catch(e) {
          console.log(e);
        }
      } 
    })
  }
}

export default MessageListener; 
