/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const menus = require("./info/menus");
module.exports = function(controller) {

    controller.on('message,direct_message', async(bot, message) => {

		await bot.reply(message, {
			text: "I'm sorry, I don't understand. Ask me or select one of the options below...",
			quick_replies: menus(),
		});
	});

}
