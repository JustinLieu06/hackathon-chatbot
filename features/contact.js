module.exports = function(controller) {
  let mem = controller.storage.memory;

  controller.hears(new RegExp('contact'),'message,direct_message', async(bot, message) => {

    console.log('I heard contact');
    mem.chosenCategory = "contact info";

    if (!mem.chosenCreator) {
      await bot.reply(message, {
        text: `I'm sorry. Who would you like to talk to?`,
        quick_replies: [
          { title: "Justin", payload: "I want to talk to Justin Lieu." },
          {
            title: "Yuan",
            payload: "I want to talk to Yuan Zhou.",
          },
        ],
      });
    } else {
      // clear preloaded mem.replies
      if (mem.replies.length !== 0) mem.replies = [];
      await bot.reply(message, {
        text: `Contact me below!`,
        quick_replies: mem.replies,
      });

    }
  });
}