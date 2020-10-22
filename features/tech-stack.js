const { techStack } = require("./info/resume.js");
const menus = require("./info/menus");
const { matchesStrings } = require("./info/util.js");

module.exports = function (controller) {
	// use a function to match a condition in the message
	controller.hears(
		async (message) => {
			return (
				(message.text &&
					message.text.toLowerCase() === techStack.slug) ||
				matchesStrings(message.text.toLowerCase(), [
					"css",
					"html",
					"mongo",
					"express",
					"node",
					"postgres",
					"sql",
					"rails",
					"ruby",
					"js",
					"javascript",
					"language",
					"framework",
					"technologies",
					"tech",
					"stack"
				])
			);
		},

		["message"],
		async (bot, message) => {
			let htmlString = '<h3>My Technologies and Languages...</h3>' + '<p><strong>Languages: </strong></p>'

			techStack.listOfLanguages.map((lang) => {
				return `<p><strong>${lang.name}: </strong> ${lang.yearsCoding} years</p> </p>`
			}).forEach((info) => {
				htmlString = htmlString + info + '<br />'
			})
			htmlString += '<br /><p><strong>Technologies: </strong></p>'
			techStack.listOfTechnologies.map((tech) => {
				return `<p><strong>${tech.name}: </strong> ${tech.yearsCoding} years</p> </p>`
			}).forEach((info) => {
				htmlString = htmlString + info + '<br />'
			})
			
			await bot.reply(message, {
				text: htmlString,
				quick_replies: menus(),
			});
		}
	);
};