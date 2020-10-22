const { contactInformation } = require("./info/resume.js");
const menus = require("./info/menus");
const { matchesStrings } = require("./info/util.js");

module.exports = function (controller) {
	// use a function to match a condition in the message
	controller.hears(
		async (message) => {
			return (
				(message.text &&
					message.text.toLowerCase() === "contact-info") ||
				matchesStrings(message.text.toLowerCase(), [
					"email",
					"contact",
					"linked",
					"phone",
					"mobile",
					"telephone",
					"mail",
					"social",
				])
			);
		},
		["message"],
		async (bot, message) => {
			
			await bot.reply(message, {
				text: `<h3>Here is how you can contact me...</h3><p><strong>Email:</strong> ${contactInformation["email"]}</p><p><strong>Phone:</strong> ${contactInformation["phone"]}</p><p><strong>LinkedIn: </strong><a target="_blank" href="${contactInformation["linkedInURL"]}" >${contactInformation["linkedInURL"]}</a> </p>`,
				quick_replies: menus(),
			});
		}
	);
};
