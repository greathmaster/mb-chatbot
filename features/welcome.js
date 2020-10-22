const { BotkitConversation } = require("botkit");
const { introduction } = require("./info/messages.js");
const messages = require("./info/messages.js")
const menus = require("./info/menus.js")

module.exports = function (controller) {

	// controller.on(["hello", "welcome_back"], async(bot, message) => {
	// 	await bot.reply(message, 'I heard a message!');
	// })

	controller.on('hello, welcome_back', async(bot, message) => {			

			await bot.reply(message, messages['introduction']['0']['message'])			

			let quickMenu = menus()
			
			await bot.reply(message,{
				text: messages['introduction']['1']['message'],								
                quick_replies: quickMenu
            });
        });
		

	// let conversation = new BotkitConversation("welcome", controller);
	// conversation.say("Hello! Welcome to my app.");
	// conversation.say("Let us get started...");
	// // pass in a message with an action that will cause gotoThread to be called...
	// conversation.addAction("continuation");
	// conversation.addMessage(
	// 	"This is a different thread completely",
	// 	"continuation"
	// );
};
