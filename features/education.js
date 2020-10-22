const { education } = require("./info/resume.js");
const menus = require("./info/menus");
const { matchesStrings } = require("./info/util.js");

module.exports = function (controller) {
	// use a function to match a condition in the message
	controller.hears(
		async (message) => {
			return (
				(message.text &&
					message.text.toLowerCase() === education.slug) ||
				matchesStrings(message.text.toLowerCase(), [
					"college",
					"degree",
					"education",
					"credentials",
					"bootcamp",
					"computer",
					"university",
					"bachelor",
				])
			);
		},

		["message"],
		async (bot, message) => {
			let htmlString = '<h3>My education...</h3>'

			education.listOfInsitutions.map((institution) => {
				return `<p><strong>Institution:</strong> ${institution.institutionName} from ${institution.startDate} to ${institution.endDate}</p><p><strong>Degree: </strong>${institution.degree}</p><p><strong>Description: </strong>${institution.description}</p>`
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
